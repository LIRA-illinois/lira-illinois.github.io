// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

const news = defineCollection({
  // Load Markdown and MDX files in the `src/content/news/` directory.
  loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const team = defineCollection({
  // Load Markdown and MDX files in the `src/content/team/` directory.
  loader: glob({ base: "./src/content/team", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      position: z.string(),
      dateJoined: z.date(),
      dateUpdated: z.date().optional(),
      imageUrl: image().optional(),
      imageAlt: z.string().optional(),
      website: z.string().optional(),
      email: z.string().email().optional(),
      googleScholar: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      cv: z.string().optional(),
  }),
});

// const blog = defineCollection({
//   // Load Markdown and MDX files in the `src/content/blog/` directory.
//   loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
//   // Type-check frontmatter using a schema
//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       description: z.string(),
//       // Transform string to Date object
//       pubDate: z.coerce.date(),
//       updatedDate: z.coerce.date().optional(),
//       heroImage: image().optional(),
//     }),
// });

// Export a single `collections` object to register your collection(s)
export const collections = { news, team };
