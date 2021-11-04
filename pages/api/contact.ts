import type { NextApiRequest, NextApiResponse } from "next";
import { getTemplate } from "../../lib/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  res.status(200).json({
    content: getTemplate(slug),
  });
};
