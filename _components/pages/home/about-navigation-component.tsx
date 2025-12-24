import Link from "next/link";
import navData from "@/_data/nav-data.json";

export default function AboutNavigationComponent() {
  return (
    <div className="flex flex-col tablet:flex-row gap-5 tablet:gap-[20px]">
      <main className="flex flex-col gap-5 tablet:flex-1">
        <div>
          <h2 className="font-rye text-[40px] text-black uppercase">
            Maple Ranch
          </h2>
          <p className="text-[28px] text-black">Plettenberg Bay</p>
        </div>
        <div className="text-paragraph text-black">
          <p className="mb-4">
            Situated just ten kilometers North of Plettenberg Bay, conveniently
            positioned along the N2 motorway and within five minutes of two
            beautiful blue flag beaches and bird, primate, reptile, big cat, and
            elephant sanctuaries, wine farms, Polo estates and more.
          </p>
          <p>
            We strive to be an entertainment destination, catering for all ages.
            Our offerings include the Moss & Maple Restaurant, MR Adventure
            Centre, Farm Shop, guest cabins, campsite and home to the Blue Haze
            American Quarter Horse Stud.
          </p>
        </div>
      </main>
      <div className="hidden desktop:flex flex-col justify-between tablet:w-[187px]">
        <p className="capitalize font-bold text-[24px] mb-3 text-black">
          Our Offerings:
        </p>
        <div className="flex flex-col gap-2 text-paragraph text-link-blue">
          {navData.map((item) => (
            <Link key={item.title} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
