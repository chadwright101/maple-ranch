"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import useScrollPosition from "@/_lib/hooks/scroll-position";

import { MobileHeader } from "./mobile/mobile-header";
import { DesktopHeader } from "./desktop/desktop-header";

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
    <header className="sticky left-0 border-b-4 border-black bg-gold z-50 ease-in-out duration-500 desktop:duration-500">
      <div className="max-w-[1360px] mx-auto relative desktop:px-15">
        <MobileHeader />
        <DesktopHeader />
      </div>
    </header>
  );
}
