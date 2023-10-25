import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    }
}

const CompanionIdPage = async ({
    params
}: CompanionIdPageProps) => {

    const portfolio = await prismadb.portfolio.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (
        <div className="my-4 mx-6">
            <CompanionForm initialData={portfolio} categories={categories}/>
        </div>
    )
} 

export default CompanionIdPage;