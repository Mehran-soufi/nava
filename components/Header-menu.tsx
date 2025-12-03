import { House, ListMusic, LucideIcon, Mic, Music, Video } from "lucide-react";
import Link from "next/link";

interface MenuItemType {
  name: string;
  link: string;
  icon: LucideIcon;
}
const menuItem: MenuItemType[] = [
  {
    name: "خانه",
    link: "/",
    icon: House,
  },
  {
    name: "آهنگ",
    link: "/music",
    icon: Music,
  },
  {
    name: "ویدیو",
    link: "/video",
    icon: Video,
  },
  {
    name: "خوانندگان",
    link: "/singer",
    icon: Mic,
  },
  {
    name: "پلی لیست",
    link: "/play-list",
    icon: ListMusic,
  },
];

function HeaderMenu() {
  return (
    <div
      className="fixed bottom-0 right-0 md:relative w-full md:w-auto flex-1 flex items-center
     md:justify-center justify-between md:gap-4 px-1 md:py-0 py-1 md:bg-transparent bg-secondary"
    >
      {menuItem.map((menu, index) => (
        <div key={index}>
          <Link
            href={menu.link}
            target="_blank"
            className="flex flex-col justify-center items-center gap-0.5 md:text-lg font-semibold hover:text-main transition duration-300 ease-linear border-b border-b-transparent hover:border-b hover:border-b-main pb-0.5"
          >
            <span className="md:hidden">
              <menu.icon size={16} />
            </span>
            <p>{menu.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HeaderMenu;
