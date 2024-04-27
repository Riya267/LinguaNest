"use client"

import { Button } from "@/components/ui/button";
import { useUserContext } from "@/lib/context/userContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const context:any = useUserContext();
  const router = useRouter();
  if(!context.sessionExist) router.push("/")

  return (
    <main className="">
      <a href="/api/auth/logout">Logout</a>
      <Button type="button" variant={"primary"}>Dashboard</Button>
    </main>
  );
}