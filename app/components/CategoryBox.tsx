"use client";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import {IconType} from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // define empty query
    let currentQuery = {};
    // Check if we have params:
    if (params) {
      // Using qs (npm package) create and object of all the params
      currentQuery = qs.parse(params.toString());
    }

    // spread current query and add new category
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // Reset the category if user click on it again:
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // generate URL string
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {skipNull: true}
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
    flex flex-col
    items-center
    justify-center
    gap-2
    p-3
    border-b-2
   hover:text-neutral-800
  transition
   cursor-pointer
   ${selected ? "border-b-neutral-800" : "border-transparent"}
   ${selected ? "text-neutral-800" : "text-neutral-500"}

   `}
    >
      <Icon size={26} />
      <div className="font-medium text=sm">{label}</div>
    </div>
  );
};
export default CategoryBox;
