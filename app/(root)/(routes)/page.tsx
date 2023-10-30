import { Categories } from "@/components/categories";
import { Samdaph } from "@/components/samdaph";
import { SearchInput } from "@/components/search-input";
import { SectionHero } from "@/components/sectionhero";
import prismadb from "@/lib/prismadb";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

export default async function RootPage({ searchParams }: RootPageProps) {
  const data = await prismadb.portfolio.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          message: true,
        },
      },
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="hero-container">
      {/* <SearchInput /> */}

          <SectionHero />
      <div className="category">
          <Categories data={categories} />
          <Samdaph data={data} />
      </div>
    </div>
  );
}
