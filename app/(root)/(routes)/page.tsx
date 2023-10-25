import { Categories } from "@/components/categories";
import { Samdaph } from "@/components/samdaph";
import { SearchInput } from "@/components/search-input";
import prismadb from "@/lib/prismadb";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  }
}

export default async function RootPage({
  searchParams
}: RootPageProps) {
  const data = await prismadb.portfolio.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name
      }
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          message: true
        }
      }
    }
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full w-full p-8 md:pl-40 space-y-4 pt-6 pl-6 ">
      <SearchInput />
      <Categories data={categories} />
      <Samdaph data={data}/>
    </div>
  )
}
