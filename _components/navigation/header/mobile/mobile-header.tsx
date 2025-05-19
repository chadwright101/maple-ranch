"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { X, AlignJustify } from "lucide-react";

import navData from "@/_data/nav-data.json";
import classNames from "classnames";

export interface HeaderProps {
  isScrolled: boolean;
}

export function MobileHeader({ isScrolled }: HeaderProps) {
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
    <div className="px-5 py-5 ease-in-out duration-300 desktop:hidden">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex gap-2.5 items-center">
          <Image
            src="/logo/maple-ranch-logo.png"
            alt="Maple Ranch logo"
            width={60}
            height={60}
            priority
            className={classNames("w-auto h-[60px] ease-in-out duration-300", {
              "scale-86 translate-y-2.5": isScrolled,
            })}
          />
          <h2
            className={classNames(
              "text-[24px] font-normal flex flex-col ease-in-out duration-300",
              {
                "mt-0": !isScrolled,
                "-mt-32": isScrolled,
              }
            )}
          >
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
            className={classNames("h-12 w-12 p-2 ease-in-out duration-300", {
              "translate-y-2.5": isScrolled,
            })}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Slide-out Menu */}
      <div
        className={classNames(
          "fixed inset-0 z-50 transform bg-blue/99 transition-transform duration-300 ease-in-out",
          {
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex py-5 items-center justify-end px-5">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className={classNames({
              "-translate-x-1.5 -translate-y-1": isScrolled,
              "-translate-x-1.5 translate-y-2": !isScrolled,
            })}
          >
            <X color="#FFFFFF" className="h-12 w-12 p-2" strokeWidth={2} />
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
                    className="text-[20px] text-white font-normal p-3 -m-3"
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
