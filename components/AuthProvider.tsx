"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  useEffect(() => {
    const createUser = async () => {
      if (session?.user) {
        try {
          await fetch("/api/auth/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
            }),
          });
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
    };

    createUser();
  }, [session]);

  return <>{children}</>;
}
