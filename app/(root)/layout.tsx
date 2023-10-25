import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const rootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="">
            <Navbar />
            <div className="hidden md:flex mt-24 w-20 flex-col fixed inset-y-2">
                <Sidebar />
            </div>
            <main className="md:pl-0 pt-3 h-full">
                {children}
            </main>
        </div>
    )
}

export default rootLayout;