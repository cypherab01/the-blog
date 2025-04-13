import { auth } from "@/auth";
import connectToDatabase from "@/lib/dbConnect";
import User from "@/models/user.model";

const LoginPage = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      <h1>LoginPage</h1>
      {session && <p>User created successfully</p>}
    </div>
  );
};
export default LoginPage;
