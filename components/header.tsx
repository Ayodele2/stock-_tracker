import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"
import UserDropdown from "@/components/UserDropdown";

const header = () => {
  return (
    <header className="sticky top-0 px-5 header">
        <div className="container header-wrapper">
            <Link href={"/"} className="text-2xl font-bold"> 
              <Image
              src="/assets/icons/logo.svg" 
              alt="logo"
              width={140}
              height={32} className="h-10 w-auto cursor-pointer"/>
            
            </Link>
            <nav className="hidden sm:block">
               <NavItems />
            </nav>
            <UserDropdown />
        </div>

    </header>
  )
}

export default header