import Link from "next/link";
import Image from "next/image";

import whatsapp from "@/public/icons/whatsapp.png";
import facebook from "@/public/icons/facebook.png";
import instagram from "@/public/icons/instagram.png";

interface Props {
  cssClasses?: string;
  small?: boolean;
}

const SocialIcons = ({ cssClasses, small }: Props) => {
  if (small) {
    return (
      <ul className={`flex gap-2 ${cssClasses}`}>
        <li>
          <Link
            href="https://www.facebook.com/arlenespools"
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="View our Facebook page"
          >
            <Image
              src={facebook}
              alt="View our Facebook page"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link
            href=""
            target="_blank"
            className="tablet:tablet:hover:opacity-80 ease-in-out duration-200"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={whatsapp}
              alt="Get in touch on WhatsApp"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className={`flex gap-6 ${cssClasses}`}>
        <li>
          <Link
            href=""
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200 p-2 -m-2"
            target="_blank"
            aria-label="View our Facebook page"
          >
            <Image
              src={facebook}
              alt="View our Facebook page"
              width={28}
              height={28}
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://wa.me/message/WCHULFMQ26MMK1"
            className="grid place-items-center tablet:hover:opacity-80 ease-in-out duration-200 p-2 -m-2"
            target="_blank"
            aria-label="Get in touch on WhatsApp"
          >
            <Image
              src={whatsapp}
              alt="Get in touch on WhatsApp"
              width={28}
              height={28}
            />
          </Link>
        </li>
      </ul>
    );
  }
};

export default SocialIcons;
