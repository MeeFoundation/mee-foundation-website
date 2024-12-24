import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    published: z.date(),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    previewImage: z.string().optional(),
    description: z.array(z.string()).optional(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
