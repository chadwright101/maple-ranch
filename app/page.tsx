import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" mx-5 my-10 grid place-items-center">
      <div className="max-w-[1360px] space-y-10">
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="animate-[scale_2.5s_ease-in-out_infinite]">
            <Image
              src="/logo/maple-ranch-logo.png"
              alt="Maple Ranch Logo"
              className="w-[300px] object-contain"
              width={400}
              height={400}
              priority
            />
          </div>
          <h1 className="mt-8 text-heading text-center text-gray-800 max-w-[450px] tablet:max-w-max">
            The new home of Maple Ranch is coming soon!
          </h1>
        </div>
        <div>
          <Link
            href="https://maps.app.goo.gl/tC7RxQrepTCywfxN7"
            aria-label="Maple Ranch Location"
            target="_blank"
          >
            <address className="italic text-center">
              Farm 541 Cragsview, Plettenberg Bay, 6600
            </address>
          </Link>
        </div>
        <div>
          <ul className="grid gap-10 tablet:grid-cols-2">
            <li className="space-y-5">
              <Image
                src="/images/placeholders/restaurant.jpg"
                alt="Moss & Maple Restaurant"
                width={300}
                height={300}
                className="w-full object-cover aspect-square"
              />
              <h3 className="text-center mb-2">Moss & Maple Restaurant</h3>
              <ul className="grid place-items-center gap-2">
                <li>
                  Tel:{" "}
                  <Link
                    href="tel:+27726946801"
                    className="p-2 -m-2 desktop:p-0 desktop:m-0"
                  >
                    072 694 6801
                  </Link>
                </li>
                <li>
                  Email:{" "}
                  <Link
                    href="mailto:mossnmaple@gmail.com"
                    className="p-2 -m-2 desktop:p-0 desktop:m-0"
                    target="_blank"
                  >
                    mossnmaple@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/files/moss_and_maple_menu.pdf"
                    className="p-2 -m-2 desktop:p-0 desktop:m-0"
                    target="_blank"
                  >
                    View menu
                  </Link>
                </li>
              </ul>
            </li>
            <hr className="w-1/2 mx-auto tablet:hidden" />
            <li className="space-y-5">
              <Image
                src="/images/placeholders/adventures.jpg"
                alt="Moss Adventures"
                width={300}
                height={300}
                className="w-full object-cover aspect-square"
              />
              <h3 className="text-center mb-2">Maple Ranch Adventures</h3>
              <ul className="grid place-items-center gap-2">
                <li>
                  Tel:{" "}
                  <Link
                    href="tel:+27650542562"
                    className="p-2 -m-2 desktop:p-0 desktop:m-0"
                  >
                    065 054 2562
                  </Link>
                </li>
                <li>
                  Email:{" "}
                  <Link
                    href="mailto:adventures@mapleranch.co.za"
                    className="p-2 -m-2 desktop:p-0 desktop:m-0"
                    target="_blank"
                  >
                    adventures@mapleranch.co.za
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Maple Ranch. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
