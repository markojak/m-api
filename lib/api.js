import { resolve, join } from "path";
import { readFileSync } from "fs";
export const getTemplate = (slug) => {
  const templateDirectory = resolve(process.cwd(), "email");
  const emailTemplate = readFileSync(
    join(templateDirectory, slug, "template.mjml"),
    "utf8"
  );
  return emailTemplate;
};
