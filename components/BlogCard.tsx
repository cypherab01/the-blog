import Image from "next/image";

const BlogCard = () => {
  return (
    <div>
      <Image
        src={
          "https://fastly.picsum.photos/id/136/1000/1000.jpg?hmac=RDaw2ixDDF5SYSgf9DHda-E9NIWbf1YHuitZR3osaAs"
        }
        alt={"blog image"}
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      <div className="my-4 text-sm font-semibold text-gray-500">
        {/* Sunday, 10th April 2025 */}
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
};
export default BlogCard;
