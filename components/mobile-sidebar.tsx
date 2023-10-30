import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-primary/100 md:hidden"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bt-10 w-23 bg-transparent">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}