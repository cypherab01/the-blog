import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <article>
      <div className="relative flex flex-col gap-4 p-4 rounded-md isolate hover:bg-muted/50">
        <div className="image">
          <Image
            src="https://picsum.photos/200/300"
            alt="Blog Image"
            width={400}
            height={200}
            className="object-cover w-full rounded-md aspect-video"
          />
        </div>

        <time id="date" className="pl-2 border-l-4 border-muted-foreground">
          <span className="text-sm text-muted-foreground">
            Septempter 5, 2022
          </span>
        </time>
        <div id="title">
          <h2 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </h2>
        </div>

        <div id="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Tempore dolorem accusantium et accusamus minus nesciunt, ea quis at
            expedita doloribus beatae, voluptas nostrum.
          </p>
        </div>

        <div className="actions">
          <Link href="/blog/1" className="flex items-center gap-2">
            <span className="absolute inset-0 z-10"></span>
            Read More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
