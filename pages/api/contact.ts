// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve, join } from "path";
import { readFileSync } from "fs";

type Data = {
  updated: string[];
  deleted: string[];
};

type Error = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { slugs } = req.query;

  const data: Data = {
    deleted: [],
    updated: [],
  };

  (typeof slugs === "string" ? [slugs] : slugs).forEach((slug: string) => {
    const templateDirectory = resolve(process.cwd(), "extensions");
    const emailTemplate = readFileSync(
      join(templateDirectory, slug, "README.md"),
      "utf8"
    );
    if (!emailTemplate) {
      data.deleted.push(slug);
    } else {
      data.updated.push(emailTemplate);
    }
  });
  return res.status(200).json(data);
}
