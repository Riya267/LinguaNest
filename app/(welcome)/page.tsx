"use client";

import { Button } from "@/components/ui/button";
import { useUserContext } from "@/lib/context/userContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const context:any = useUserContext();
  const router = useRouter();
  if(context.sessionExist) router.push("/dashboard")
  const handleLogin = () => {
     router.push("/api/auth/login")
  }
  return (
    <div className="max-w-[988px] flex flex-col lg:flex-row justify-center items-center p-4 lg:p-10">
      <div className="w-[40%] h-auto flex justify-center items-center">
        <Image src={"/heroBanner.jpg"} alt="Hero Banner" width={300}
        height={360}/>
      </div>
      <div className="w-[70%] flex flex-col justify-between items-center">
        <h2 className="text-xl lg:text-3xl text-center py-10 text-slate-600">Learn, practice, and master new languages with <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">linguaNest</span></h2>
        <Button type="button" variant={"primary"} className="px-14" onClick={handleLogin}>Login Here</Button>
      </div>
    </div>
  );
}