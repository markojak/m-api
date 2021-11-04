// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { join, resolve } from "path";
import fs from "fs";

const extensionDirectory = resolve(process.cwd(), "extensions");

type Data = {
  content: string;
};

type Error = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method === "GET") {
    const { slug } = req.query;

    const ext = fs.readFileSync(
      join(
        extensionDirectory,
        Array.isArray(slug) ? slug[0] : slug,
        "README.md"
      ),
      {
        encoding: "utf-8",
      }
    );
    return res.status(200).json({
      content: ext,
    });
  } else {
    return res.status(404).json({
      error: "Not Support Method",
    });
  }
}
