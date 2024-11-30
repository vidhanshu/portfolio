import { getBlogs } from "@/actions/blogs";
import type { MetadataRoute } from "next";

const BASE_URL = "https://vidhanshu-borade.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getBlogs({
    select: {
      _id: 1,
      updatedAt: 1,
    },
  });

  return data
    ? data.map((blog) => ({
        url: `${BASE_URL}/blogs/${blog._id}`,
        lastModified: blog.updatedAt,
      }))
    : [];
}
