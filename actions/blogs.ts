"use server";

import dbConnect from "@/configs/db";
import Blog from "@/models/blog";

export const getBlogs = async () => {
  try {
    await dbConnect();
    const blogs = await Blog.find().select({
      _id: 1,
      title: 1,
      description: 1,
      image: 1,
      createdAt: 1,
      time_to_read: 1,
      tags: 1,
    });
    return { data: blogs };
  } catch (error) {
    return { error: true, message: `Fetch error: ${error}` };
  }
};

export const getBlogIds = async () => {
  try {
    await dbConnect();
    const ids = await Blog.find().select({
      _id: 1,
    });
    return { data: ids };
  } catch (error) {
    return { error: true, message: `Fetch error: ${error}` };
  }
};

export const getBlogById = async (id: string) => {
  try {
    await dbConnect();
    const blog = await Blog.findById(id);
    return { data: blog };
  } catch (error) {
    return { error: true, message: `Fetch error: ${error}` };
  }
};
