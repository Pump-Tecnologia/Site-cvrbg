import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Rota de envio do formulario: nao ha nada para indexar nela.
      disallow: "/api/",
    },
    sitemap: "https://www.cvrbg.com.br/sitemap.xml",
  };
}
