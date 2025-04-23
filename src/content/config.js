import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        is_finished: z.boolean(),
        link_git: z.string().url().nullable(true),
        link_demo: z.string().url().nullable(true),
        tools: z.array(z.string())
    })
})


export const collections = {projects}