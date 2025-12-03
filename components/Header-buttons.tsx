import AuthButton from "./Auth-button";
import { ModeToggle } from "./ModeToggle";
import SearchButton from "./Search-button";

function HeaderButtons() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <SearchButton />
      <AuthButton />
      <ModeToggle />
    </div>
  );
}

export default HeaderButtons;
