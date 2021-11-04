const { join, resolve } = require("path");
const { readFileSync } = require("fs");
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const templateDirectory = resolve(process.cwd(), "email");
  const emailTemplate = readFileSync(
    join(templateDirectory, slug, "template.mjml"),
    "utf8"
  );

  res.status(200).json({
    content: emailTemplate,
  });
};
