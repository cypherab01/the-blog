import { Metadata } from "next";
import connectToDatabase from "@/lib/db/dbConnect";
import Blog from "@/models/blog.model";
import { notFound } from "next/navigation";
import Image from "next/image";

// This is for generating metadata dynamically based on params
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  try {
    await connectToDatabase();
    const blog = await Blog.findById(id).select("title");

    if (!blog) {
      return {
        title: "Blog Post Not Found",
      };
    }

    return {
      title: blog.title,
    };
  } catch (error) {
    return {
      title: "Blog Post",
    };
  }
}

// Page component to render blog post details
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    await connectToDatabase();
    const blog = await Blog.findById(id);

    if (!blog) {
      notFound();
    }

    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {blog.image && (
          <div className="mb-6">
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto rounded-md"
              width={1000}
              height={1000}
            />
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {blog.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>Failed to load blog post. Please try again later.</p>
      </div>
    );
  }
}
