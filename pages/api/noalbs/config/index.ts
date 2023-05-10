import fs from "fs/promises";
import { merge } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

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
  const rawData = await fs.readFile(process.env.NOALBS_CONFIG_FILE!);
  const parsedData = JSON.parse(rawData.toString("utf8"));
  response.status(200).json(parsedData);
}

async function update_config(
  request: NextApiRequest,
  response: NextApiResponse
) {
  // Config specified by request
  const rawRequestConfig = request.body;
  const parsedRequestConfig = JSON.parse(rawRequestConfig);
  // TODO validate

  // Config existing on server
  const rawServerConfig = await fs.readFile(process.env.NOALBS_CONFIG_FILE!);
  const parsedServerConfig = JSON.parse(rawServerConfig.toString("utf8"));

  // Merge the config objects
  const mergedConfig = merge({}, parsedServerConfig, parsedRequestConfig);

  // Overwrite the server config with the merged data
  await fs.writeFile(
    process.env.NOALBS_CONFIG_FILE!,
    JSON.stringify(mergedConfig)
  );

  // Return the merged config
  response.status(200).json(mergedConfig);
}
