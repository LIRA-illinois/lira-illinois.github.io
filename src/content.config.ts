// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";

const news = defineCollection({
  // Load Markdown and MDX files in the `src/content/news/` directory
  loader: glob({ base: "./src/content/news", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    date: z.date(),
    subtitle: z.string().optional(),
    dateUpdated: z.date().optional(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    past: z.boolean().optional(),
    funding: z.string().optional(),
    fundingSlugs: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const papers = defineCollection({
  loader: glob({ base: "./src/content/papers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    imageUrl: z.string(),
    imageAlt: z.string(),
    citation: z.string(),
    date: z.date(),
    projects: z.array(z.string()),
    paperUrl: z.string().optional(),
    dateUpdated: z.date().optional(),
    funding: z.string().optional(),
    fundingSlugs: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    imageUrl: z.string(),
    imageAlt: z.string(),
    date: z.date().optional(),
    dateUpdated: z.date().optional(),
    past: z.boolean().optional(),
    funding: z.string().optional(),
    fundingSlugs: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ base: "./src/content/team", pattern: "**/*.{md,mdx}" }),
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
      linkedIn: z.string().optional(),
      youtube: z.string().optional(),
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
export const collections = { news, papers, projects, team };
