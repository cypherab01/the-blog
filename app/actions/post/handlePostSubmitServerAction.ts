"use server";

import { getIdServerAction } from "@/lib/auth/getIdServerAction";
import connectToDatabase from "@/lib/db/dbConnect";
import Blog from "@/models/blog.model";

export const handlePostSubmitServerAction = async (
  prevState: any,
  formData: FormData
) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");
  const tagsString = formData.get("tags") as string;
  const tags = tagsString ? tagsString.split(",") : [];
  const userId = await getIdServerAction();

  console.log("Tags", tags);

  await connectToDatabase();

  const post = await Blog.create({
    title,
    description,
    tags,
    image,
    author: userId,
  });

  if (!post) {
    return {
      error: true,
      success: null,
      title: title as string,
      description: description as string,
      image: image as string,
      tags: tags as string[],
    };
  }

  return {
    error: null,
    success: true,
  };
};
