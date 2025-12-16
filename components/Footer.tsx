import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full py-1 flex items-center justify-center bg-secondary z-50">
      <div className="w-11/12 flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <p className="dark:text-slate-400 cursor-pointer text-slate-600 hover:text-slate-800 dark:hover:text-slate-50 transition duration-200 ease-linear">
            درباره ما
          </p>
          <p className="dark:text-slate-400 cursor-pointer text-slate-600 hover:text-slate-800 dark:hover:text-slate-50 transition duration-200 ease-linear">
            ارتباط با ما
          </p>
          <p className="dark:text-slate-400 cursor-pointer text-slate-600 hover:text-slate-800 dark:hover:text-slate-50 transition duration-200 ease-linear">
            حریم خصوصی
          </p>
          <p className="dark:text-slate-400 cursor-pointer text-slate-600 hover:text-slate-800 dark:hover:text-slate-50 transition duration-200 ease-linear">
            سوالات پرتکرار
          </p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Image
            width={24}
            height={24}
            alt="instagram"
            src={"/svg/instagram.svg"}
            className="cursor-pointer"
          />
             <Image
            width={24}
            height={24}
            alt="instagram"
            src={"/svg/youtube.svg"}
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
