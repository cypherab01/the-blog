import connectToDatabase from "@/lib/db/dbConnect";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

// get request to get all blog posts with limit and page
export async function GET(request: NextRequest) {
  await connectToDatabase();
  // get limit and page from url params
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "10");
  const page = parseInt(searchParams.get("page") || "1");

  const posts = await Blog.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .select("-__v");

  if (posts.length === 0) {
    return NextResponse.json({ message: "No posts found" }, { status: 404 });
  }

  if (!posts) {
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }

  // Process posts to extract first 50 words of description and remove HTML tags
  const processedPosts = posts.map((post) => {
    const plainText = post.description.replace(/<[^>]*>/g, "");
    const words = plainText.split(/\s+/);
    const truncatedDescription =
      words.slice(0, 50).join(" ") + (words.length > 50 ? "..." : "");

    return {
      ...post.toObject(),
      description: truncatedDescription,
    };
  });

  return NextResponse.json(processedPosts, { status: 200 });
}
