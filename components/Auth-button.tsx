import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function AuthButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href="register">
          <Button variant={"secondary"}>
            <UserRound />
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>ورود | ثبت نام</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default AuthButton;
