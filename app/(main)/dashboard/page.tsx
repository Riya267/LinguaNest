"use client"

import FeedWrapper from "@/components/feedWrapper";
import StickyWrapper from "@/components/stickyWrapper";
import { useUserContext } from "@/lib/context/userContext";
import { useRouter } from "next/navigation";
import { Header } from "./header";
import UserProgress from "@/components/userProgress";

export default function DashBoard() {
  const context:any = useUserContext();
  const router = useRouter();
  if(!context.sessionExist) router.push("/")

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
         <UserProgress 
          activeCourse={{ title: "Indian", imageSrc: "/in.svg"}}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
         />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Indian" />
      </FeedWrapper>
    </div>
  );
}