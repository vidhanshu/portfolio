import { PROJECTS } from "@/lib/constants";
import type { MetadataRoute } from "next";

const BASE_URL = "https://vidhanshu-borade.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return PROJECTS.map((product) => ({
    url: `${BASE_URL}/product/${product.slug}`,
    lastModified: new Date(),
  }));
}
