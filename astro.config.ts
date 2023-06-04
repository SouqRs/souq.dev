// @ts-nocheck
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

export default defineConfig({
	site: "https://souq.dev",
	experimental: {
		assets: true,
	},
	integrations: [
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true
		}
	}
});
