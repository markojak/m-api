// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve, join } from "path";
import { readFileSync } from "fs";

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

    const Directory = resolve(process.cwd(), "extensions");
    const resume = readFileSync(
      join(Directory, "index.md"),
      "utf8"
    );
    return res.status(200).send(
      resume
    );
  } else {
    return res.status(404).json({
      error: "Not Support Method",
    });
  }
}
