"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { X, AlignJustify } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="px-5 pt-5 pb-4 desktop:hidden">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex gap-2.5">
          <Image
            src="/logo/maple-ranch-logo.png"
            alt="Maple Ranch logo"
            width={60}
            height={60}
            priority
            className="w-auto h-[60px]"
          />
          <h2 className="text-[24px] font-normal flex flex-col">
            Maple Ranch{" "}
            <span className="text-[14px] -mt-6">Plettenberg Bay</span>
          </h2>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="-m-5 p-3"
          aria-label="Open menu"
        >
          <AlignJustify
            color="#353C44"
            className="h-12 w-12 p-2"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-gold/99 transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex pt-7 pb-5 items-center justify-end pl-5 pr-3">
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X color="#353C44" className="h-12 w-12 p-2" strokeWidth={2} />
          </button>
        </div>
        <nav className="px-7">
          <ul className="grid gap-4">
            {navData.map(({ title, url }, id) => {
              return (
                <li key={id}>
                  <Link
                    href={url}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] text-black font-normal p-3 -m-3"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
