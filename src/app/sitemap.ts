import type { MetadataRoute } from "next";

const BASE_URL = "https://www.cvrbg.com.br";

/** Rotas publicas do site, da mais para a menos importante. */
const routes = [
  { path: "", priority: 1 },
  { path: "/sobre", priority: 0.8 },
  { path: "/solucoes", priority: 0.8 },
  { path: "/app", priority: 0.7 },
  { path: "/contato", priority: 0.7 },
  { path: "/privacidade", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
