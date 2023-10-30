"use client";

import qs from "query-string";
import { Category } from "@prisma/client";
import { useSearchParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return (
    <div className="category w-full overflow-y-auto flex p-2 pt-10">
      <button
        onClick={() => onClick(undefined)}
        className={cn(`btn3 rounded-md mr-3 md:text-sm px-4`,
          !categoryId ? "bg1" : "bg2")}>
        test
      </button>

      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(
            `
                btn3 flex items-center text-center text-xs mr-3 md:text-sm px-4 mb-2 md:px-4 py-2 md:py-3 rounded-md
            `,
            item.id === categoryId ? "bg1" : "bg2"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
