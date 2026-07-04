import { MetadataRoute } from "next";

const base = "https://yogicmassageinstitute.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                        priority: 1.0,  changeFrequency: "monthly" },
    { url: `${base}/the-modality`,                      priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/the-method`,                        priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/programs`,                          priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/programs/continuing-education`,     priority: 0.95, changeFrequency: "monthly" },
    { url: `${base}/programs/certification`,            priority: 0.85, changeFrequency: "monthly" },
    { url: `${base}/about`,                             priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/journal`,                           priority: 0.75, changeFrequency: "weekly"  },
    { url: `${base}/contact`,                           priority: 0.7,  changeFrequency: "yearly"  },
    { url: `${base}/accreditation`,                     priority: 0.6,  changeFrequency: "monthly" },
    { url: `${base}/disclosures`,                       priority: 0.4,  changeFrequency: "yearly"  },
    { url: `${base}/non-discrimination`,                priority: 0.4,  changeFrequency: "yearly"  },
    { url: `${base}/privacy`,                           priority: 0.4,  changeFrequency: "yearly"  },
    { url: `${base}/terms`,                             priority: 0.4,  changeFrequency: "yearly"  },
  ];
}
