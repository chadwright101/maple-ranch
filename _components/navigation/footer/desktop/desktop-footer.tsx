import Link from "next/link";
import Image from "next/image";

import navData from "@/_data/nav-data.json";

export function DesktopFooter() {
  return (
    <div className="hidden desktop:block bg-white pt-10 pb-5">
      <div className="flex justify-between px-5">
        <nav>
          <ul className="flex flex-col">
            {navData.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className=" text-[14px] font-light text-blue hover:text-opacity-80 ease-in-out duration-200 desktop:hover:text-green"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-5 items-end justify-around">
          <Image
            src="/logo/maple-ranch-logo.png"
            alt="Maple Ranch Logo"
            width={98}
            height={98}
            className="w-[98px] h-auto"
          />
          <div className="text-right">
            <p className="text-[14px] ">Designed & developed by</p>
            <Link
              href="https://thewrightdesigns.co.za"
              aria-label="The Wright Designs"
              className="text-[14px] font-light hover:opacity-80 ease-in-out duration-200 text-linkBlue"
              target="_blank"
            >
              The Wright Designs
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center col-span-2 place-self-center w-full">
        <h4
          className="font-light pt-5 text-[14px]"
          style={{ fontVariant: "normal" }}
        >
          © Maple Ranch {new Date().getFullYear()} |{" "}
          <Link
            href="/"
            className="text-[14px] hover:opacity-80 ease-in-out duration-200 text-linkBlue"
            style={{ fontVariant: "normal" }}
          >
            www.mapleranch.co.za
          </Link>
        </h4>
      </div>
    </div>
  );
}
