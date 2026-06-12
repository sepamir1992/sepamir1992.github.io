import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()).default([]),
    researchArea: z.string().optional(),
    role: z.string().optional(),
    impact: z.string().optional(),
    links: z
      .object({
        github: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
        slides: z.string().optional(),
      })
      .default({}),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    date: z.coerce.date().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string().optional(),
    year: z.number(),
    status: z
      .enum(['published', 'accepted', 'under-review', 'preprint', 'in-preparation'])
      .default('published'),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.string().optional(),
    bibtex: z.string().optional(),
    tags: z.array(z.string()).default([]),
    abstract: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z
      .enum(['network', 'video', 'brain', 'shield', 'wifi', 'chat', 'automation', 'chart'])
      .default('network'),
    order: z.number().default(99),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    location: z.string().optional(),
    date: z.coerce.date().optional(),
    caption: z.string().optional(),
    category: z
      .enum(['travel', 'nature', 'city', 'people', 'events', 'other'])
      .default('other'),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { projects, publications, research, photos, news };
