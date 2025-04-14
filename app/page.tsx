import SignIn from "@/components/user-components/sign-in";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="">
        <SignIn />
        <Link href="/login">Login</Link>
        <ModeToggle />
      </div>
    </>
  );
};
export default Home;
