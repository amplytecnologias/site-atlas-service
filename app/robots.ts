import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Gera /robots.txt. Tudo é indexável; as rotas de redirect (301) não precisam
// ser bloqueadas.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
