import Image from "next/image";
import Link from "next/link";

export function MobileFooter() {
  return (
    <div className="flex flex-col gap-5 items-center px-5 py-10 desktop:hidden">
      <Image
        src="/logo/maple-ranch-logo.png"
        alt="Maple Ranch Logo"
        width={140}
        height={140}
        className="w-[140px] h-auto"
      />
      <div className="text-center">
        <p className="text-[14px]">Designed & developed by</p>
        <Link
          href="https://thewrightdesigns.co.za"
          aria-label="The Wright Designs"
          className="text-[14px] p-2 -m-2 text-linkBlue font-light"
          target="_blank"
        >
          The Wright Designs
        </Link>
      </div>

      <div className="text-center">
        <h4 className="font-light text-[14px]">
          © Maple Ranch {new Date().getFullYear()}
        </h4>
        <Link
          href="/"
          className="text-[14px] p-2 -m-2 text-linkBlue font-light"
        >
          www.mapleranch.co.za
        </Link>
      </div>
    </div>
  );
}
