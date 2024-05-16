import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./header";
import Sidebar from "./sideBar";
  
const MobileSidebar = () => {
    return (
      <nav className='lg:hidden px-6 h-[50px] flex items-center border-b fixed top-0 w-full z-50'>
        <Sheet>
        <SheetTrigger>
            <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent>
            <Sidebar />
        </SheetContent>
        </Sheet>
      </nav>
    )
}
  
export default MobileSidebar;