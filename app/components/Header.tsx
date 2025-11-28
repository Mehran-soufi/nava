import HeaderButtons from "./Header-buttons";
import HeaderLogo from "./Header-logo";
import HeaderMenu from "./Header-menu";

function Header() {
  return (
    <header className="w-full flex justify-center items-center">
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
