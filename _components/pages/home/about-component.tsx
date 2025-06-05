import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="space-y-10 px-5 desktop:px-10">
      <Image
        src="/images/home-page/20241116_111757.jpg"
        alt="About us - Maple Ranch"
        width={750}
        height={750}
        className="w-full h-auto object-cover aspect-square phone:aspect-video tablet:hidden"
      />
      <main className="space-y-5">
        <div className="grid desktop:grid-cols-3 gap-10">
          <h2 className="text-heading font-passion-one border-b-4 border-gold leading-12">
            About Us
          </h2>
        </div>
        <div className="desktop:grid gap-10 desktop:grid-cols-[1fr_1fr_250px]">
          <div className="space-y-4 desktop:order-last">
            <p>
              We trust you will thoroughly enjoy your visit to all we offer,
              whether it be the Moss & Maple Restaurant, MR Adventure Centre,
              Farm Shop, guest cabins, our rustic camp site, or simply to view
              the beautiful horses of the Blue Haze American Quarter Horse Stud.
            </p>
            <p>
              Maple Ranch is situated just ten kilometers North East of
              Plettenberg Bay, conveniently positioned along the N2 motorway and
              within five minutes of two beautiful blue flag beaches and bird,
              primate, reptile, big cat, and elephant sanctuaries, wine farms,
              Polo estates and more.
            </p>
          </div>
          <div className="grid gap-10 mt-10 tablet:grid-cols-3 desktop:grid-cols-2 desktop:mt-0 desktop:col-span-2">
            <Image
              src="/images/home-page/IMG-20231018-WA0103.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={400}
              className="hidden w-full h-full object-cover tablet:block desktop:aspect-auto desktop:h-[250px]"
            />
            <Image
              src="/images/home-page/20241116_111757.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square phone:aspect-video desktop:aspect-auto desktop:order-last desktop:h-[250px]"
            />
            <Image
              src="/images/home-page/20230419_101843.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={800}
              className="w-full h-full object-cover aspect-square phone:aspect-video desktop:aspect-auto desktop:row-span-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutComponent;
