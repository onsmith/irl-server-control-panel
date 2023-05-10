import fs from "fs/promises";
import { merge } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import defaultConfig from "./default";

const NOALBS_CONFIG_FILE = process.env.NOALBS_CONFIG_FILE!;
const NOALBS_CONFIG_DIR = path.dirname(NOALBS_CONFIG_FILE);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "GET") {
    await get_config(response);
  } else if (request.method == "POST") {
    await update_config(request, response);
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}

async function get_config(response: NextApiResponse) {
  response.status(200).json(await loadServerConfig());
}

async function update_config(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // Load the config specified in the request body
  const requestConfig = request.body;
  // TODO validate

  // Load the config that exists on the server, or the default if none exists
  let serverConfig = await loadServerConfig();

  // Merge the config objects
  const mergedConfig = merge({}, serverConfig, requestConfig);

  // Ensure the config path exists
  // Throws an error if the server process does not have permission to create
  // the directory
  await fs.mkdir(NOALBS_CONFIG_DIR, { recursive: true });

  // Overwrite the server config file with the merged data
  // Throws an error if the server process does not have permission to write to
  // the file
  await fs.writeFile(NOALBS_CONFIG_FILE, JSON.stringify(mergedConfig));

  // Respond with the merged data
  response.status(200).json(mergedConfig);
}

async function loadServerConfig() {
  try {
    return JSON.parse((await fs.readFile(NOALBS_CONFIG_FILE)).toString("utf8"));
  } catch (_: any) {
    // If no server config exists, return the default config
    return defaultConfig;
  }
}
