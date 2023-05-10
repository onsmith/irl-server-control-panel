import dotenv from "dotenv";
import fs from "fs/promises";
import { merge } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import defaultEnv from "./default";

const NOALBS_ENV_FILE = process.env.NOALBS_ENV_FILE!;
const NOALBS_ENV_DIR = path.dirname(NOALBS_ENV_FILE);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method == "GET") {
    await get_env(response);
  } else if (request.method == "POST") {
    await update_env(request, response);
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}

async function get_env(response: NextApiResponse) {
  response.status(200).json(await loadServerEnv());
}

async function update_env(request: NextApiRequest, response: NextApiResponse) {
  // Load the env specified in the request body
  const requestEnv = request.body;
  // TODO validate

  // Load the env that exists on the server, or the default if none exists
  let serverEnv = await loadServerEnv();

  // Merge the env objects
  const mergedEnv = merge({}, serverEnv, requestEnv);

  // Ensure the env path exists
  // Throws an error if the server process does not have permission to create
  // the directory
  await fs.mkdir(NOALBS_ENV_DIR, { recursive: true });

  // Overwrite the server env file with the merged data
  // Throws an error if the server process does not have permission to write to
  // the file
  await fs.writeFile(
    NOALBS_ENV_FILE,
    Object.entries(mergedEnv)
      .map(([key, value]) => `${key}=${value}\n`)
      .join("")
  );

  // Respond with the merged data
  response.status(200).json(mergedEnv);
}

async function loadServerEnv() {
  try {
    return dotenv.parse((await fs.readFile(NOALBS_ENV_FILE)).toString("utf8"));
  } catch (_: any) {
    // If no server env exists, return the default env
    return defaultEnv;
  }
}
