import BlogCard from "@/components/user-components/BlogCard";
import axios from "axios";
import { toast } from "sonner";

const getBlogs = async () => {
  try {
    // Use absolute URL for server component
    const response = await axios.get(
      `${
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      }/api/blog?limit=10&page=1`
    );
    const blogs = response.data;
    return blogs;
  } catch (error: any) {
    if (error.response.status === 404) {
      return [];
    }
    if (error.response.status === 500) {
      toast.error(error.response.data.message);
      return [];
    }
    toast.error("Failed to fetch blogs");
    return [];
  }
};

const Home = async () => {
  const blogs = await getBlogs();
  return (
    <main>
      <h2 className="my-8 text-xl font-bold tracking-tight">Latest Blogs</h2>
      <BlogCard blogs={blogs} />
    </main>
  );
};
export default Home;
