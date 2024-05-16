import MobileHeader from "@/components/mobileHeader";
import Sidebar from "@/components/sideBar";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return <div className="min-h-screen flex flex-col">
                <MobileHeader />
                <Sidebar className="hidden lg:flex border-r-2 border-slate-200"/>
                <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
                    <div className="max-w-[1056px] mx-auto pt-6 h-full">
                        {children}
                    </div>
                </main>
            </div>
}

export default MainLayout;