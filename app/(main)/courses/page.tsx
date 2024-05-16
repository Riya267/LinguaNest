/* eslint-disable @next/next/no-async-client-component */
"use client"

import StickyWrapper from "@/components/stickyWrapper";
import { useUserContext } from "@/lib/context/userContext";
import { useRouter } from "next/navigation";
import UserProgress from "@/components/userProgress";
import { getCourses } from "@/db/queries";

const Courses = async () => {
  const context:any = useUserContext();
  const router = useRouter();
  if(!context.sessionExist) router.push("/")
  const data = await getCourses();

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">
         Language Courses
      </h1>
      {JSON.stringify(data)}
      {/* <List /> */}
    </div>
  );
}

export default Courses;