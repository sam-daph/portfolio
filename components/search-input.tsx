"use client";

import qs from "query-string";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");

  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const toggleInput = () => {
    const input = document.getElementById("search-input");
    if (input) {
        input.classList.toggle("active");
        if (input.classList.contains("active")) {
            input.focus();
        }
    }
  }

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="search-container">
      <Search onClick={toggleInput} className="search-icon" id="search-icon" />
      <Input
        onChange={onChange}
        value={value}
        id="search-input"
        className="search-input"
        placeholder="Rechercher..."
      />
    </div>
  );
};
