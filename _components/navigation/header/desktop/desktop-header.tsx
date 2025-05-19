import Image from "next/image";
import Link from "next/link";

import navData from "@/_data/nav-data.json";
import { HeaderProps } from "../mobile/mobile-header";
import classNames from "classnames";

export function DesktopHeader({ isScrolled }: HeaderProps) {
  return (
    <div
      className={classNames(
        "hidden desktop:flex relative py-5 items-end justify-between h-[100px] ease-in-out duration-500 desktop:duration-500",
        {}
      )}
    >
      <Link href="/" className="hover:opacity-90 ease-in-out duration-500">
        <Image
          src="/logo/maple-ranch-logo.png"
          alt="Maple Ranch Logo"
          width={171}
          height={171}
          priority
          className={classNames(
            "absolute h-[171px] w-auto -mt-15 ease-in-out duration-500",
            {
              "scale-30 -mt-[105px] -ml-15": isScrolled,
            }
          )}
        />
      </Link>
      <nav
        className={classNames("ease-in-out duration-500", {
          "translate-y-1.5": isScrolled,
        })}
      >
        <ul className="flex gap-2.5 items-center">
          {navData.map(({ title, url }, id) => {
            return (
              <li key={id}>
                <Link
                  href={url}
                  className="text-paragraph ease-in-out text-blue duration-200 hover:opacity-80"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
