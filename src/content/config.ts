import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const help = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('CSMatic Team'),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    views: z.number().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog,
  help,
};