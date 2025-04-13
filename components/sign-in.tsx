import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        const { response } = await signIn("google");
        console.log("response", response);
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
