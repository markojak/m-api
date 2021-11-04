const { join, resolve } = require("path");
const { readFileSync } = require("fs");

export default async (req, res) => {
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
