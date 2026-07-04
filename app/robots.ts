import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://yogicmassageinstitute.com/sitemap.xml",
    host: "https://yogicmassageinstitute.com",
  };
}
