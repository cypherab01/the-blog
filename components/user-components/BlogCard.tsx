import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogs }: { blogs: any }) => {
  return (
    <>
      {blogs.map((blog: any) => (
        <article
          key={blog._id}
          className="mb-4 border-b border-gray-200 cursor-pointer"
        >
          <div className="relative flex flex-col gap-4 p-4 rounded-md isolate hover:bg-muted/30">
            {/* <div className="image">
              <Image
                src={blog.image || "https://github.com/shadcn.png"}
                alt="Blog Image"
                width={400}
                height={200}
                className="object-cover w-full rounded-md aspect-video"
              />
            </div> */}

            <time
              id="date"
              className="pl-2 border-l-2 border-muted-foreground/50"
            >
              <span className="text-sm text-muted-foreground">
                {blog.createdAt &&
                  new Date(blog.createdAt).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </span>
            </time>
            <div id="title">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </div>

            <div id="content">
              <p
                className="line-clamp-3"
                // dangerouslySetInnerHTML={{ __html: blog.description }}
              >
                {blog.description}
              </p>
            </div>

            <div className="actions">
              <Link
                href={`/blog/${blog._id}`}
                className="flex items-center gap-2"
              >
                <span className="absolute inset-0 z-10"></span>
                Read More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};
export default BlogCard;
