"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import navData from "@/_data/nav-data.json";

export function DesktopHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const leftNavItems = navData.slice(0, 3);
  const rightNavItems = navData.slice(3, 7);

  if (isHomePage) {
    return (
      <div className="hidden desktop:block py-5 h-[100px]">
        <Link href="/">
          <Image
            src="/logo/maple-ranch-logo.png"
            alt="Maple Ranch Logo"
            width={200}
            height={200}
            priority
            className={classNames(
              "absolute h-[200px] mt-2 left-1/2 -translate-x-1/2 w-auto ease-in-out duration-500"
            )}
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden desktop:grid grid-cols-[1fr_240px_1fr] items-start w-full px-8 py-5 h-[100px]">
      <nav className="flex gap-6 items-center mt-10 justify-end">
        {leftNavItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="text-[16px] font-normal text-black desktop:hover:opacity-75 ease-in-out duration-300"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <Link href="/" className="place-self-center">
        <Image
          src="/logo/maple-ranch-logo.png"
          alt="Maple Ranch Logo"
          width={200}
          height={200}
          priority
          className="h-[200px] w-auto ease-in-out duration-500"
        />
      </Link>

      <nav className="flex gap-6 items-center mt-10">
        {rightNavItems.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="text-[16px] font-normal text-black desktop:hover:opacity-75 ease-in-out duration-300"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
