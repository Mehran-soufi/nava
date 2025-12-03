import AuthButton from "./Auth-button";
import { ModeToggle } from "./ModeToggle";

function HeaderButtons() {
  return (
    <div className="flex items-center justify-center gap-1.5">
      <AuthButton />
      <ModeToggle />
    </div>
  );
}

export default HeaderButtons;
