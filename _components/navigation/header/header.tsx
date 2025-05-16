"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <header
      className={classNames(
        "sticky left-0 border-b-2 border-blue/25 mx-auto bg-white z-50 ease-in-out duration-500 desktop:duration-500",
        {
          "-top-5": isScrolled,
          "top-0": !isScrolled,
        }
      )}
    >
      <div className="max-w-[1280px] mx-auto relative">
        <MobileHeader isScrolled={isScrolled} />
        <DesktopHeader isScrolled={isScrolled} />
      </div>
    </header>
  );
}
