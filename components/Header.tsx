import HeaderButtons from "./Header-buttons";
import HeaderLogo from "./Header-logo";
import HeaderMenu from "./Header-menu";

function Header() {
  return (
    <header className="w-full flex justify-center items-center mb-2 sticky top-0 z-50 bg-background border-b shadow-lg shadow-background">
      <nav className="w-11/12 py-1.5 flex items-center justify-between">
        {/* Logo */}
        <HeaderLogo />
        {/* Menu */}
        <HeaderMenu />
        {/* Buttons */}
        <HeaderButtons />
      </nav>
    </header>
  );
}

export default Header;
