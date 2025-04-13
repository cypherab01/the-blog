import SignIn from "@/components/sign-in";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <SignIn />
      <Link href="/login">Login</Link>
    </>
  );
};
export default Home;
