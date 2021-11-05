import { resolve, join } from "path";
import { readFileSync } from "fs";
export const getTemplate = (slug) => {
  const templateDirectory = resolve(process.cwd(), "extensions");
  const emailTemplate = readFileSync(
    join(templateDirectory, slug, "README.md"),
    "utf8"
  );
  return emailTemplate;
};
