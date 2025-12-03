import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Link from "next/link";

function SearchButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={"/search"}>
          <Button variant={"secondary"}>
            <Search />
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>جستجو</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default SearchButton;
