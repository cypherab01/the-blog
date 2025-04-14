import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  console.log("session", session);
  if (session?.user.role !== "admin") {
    redirect("/");
  }
  return <div>admin page</div>;
};
export default page;
