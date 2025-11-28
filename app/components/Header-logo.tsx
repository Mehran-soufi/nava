import Image from "next/image";
import Link from "next/link";

function HeaderLogo() {
  return (
    <div className="xl:w-32 md:w-24 w-20 xl:h-14 md:h-12 h-10 relative">
      <Link className="w-full h-full" href={"/"}>
        <Image fill src="/assets/logo/logo.png" alt="nava logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
