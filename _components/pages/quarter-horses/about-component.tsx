import ButtonLink from "@/_components/ui/buttons/button-link";
import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="space-y-10 px-5 desktop:px-10">
      <main className="space-y-5">
        <div className="grid desktop:grid-cols-3 gap-10">
          <h2 className="text-heading font-passion-one border-b-4 border-gold leading-12">
            About
          </h2>
        </div>
        <div className="desktop:grid gap-10 desktop:grid-cols-3">
          <div className="space-y-4 desktop:order-last">
            <p>
              Maple Ranch is home to the Blue Haze American Quarter Horse Stud,
              established in 2010 at Blue Haze Country Lodge, (link to Blue Haze
              website) Drakensberg KZN and still owned by our family. These
              horses, originally and still bred for and by the American cowboy,
              were selected and evolved for the athleticism, intelligence and
              temperament required to work cattle and compete in numerous Equine
              sports requiring bursts of speed, sharp stops and turns, a calm
              and kind disposition with a compliant mind, to make life safer and
              pleasurable for the rider.
            </p>
            <p>
              Their compact, muscular bodies, small and broad heads are
              generally how one recognizes them.
            </p>
            <p>
              We lease grazing roughly 5km from Maple Ranch, where most of the
              general herd graze entirely on good, green veld grasses year
              round. Our young stud sire, Bold Enterprise, and a few mares can
              be seen at Maple Ranch during the breeding spring season and you
              can visit the new foals from August through till the summer
              months. We have six beautiful, registered QH mares carrying our
              new sire's foals this year. So we are very excited to see their
              colors and get to know their personalities whilst we watch them
              gallop and play.
            </p>
            <ButtonLink
              color="gold"
              hoverTextColor="blue"
              ariaLabel="View our Sire's"
              href="#sires"
            >
              View our Sire's
            </ButtonLink>
          </div>
          <div className="grid gap-10 mt-10 tablet:grid-cols-3 desktop:grid-cols-2 desktop:mt-0 desktop:col-span-2">
            <Image
              src="/images/quarter-horses/20250528_153045.jpg"
              alt="Quarter Horses - Maple Ranch"
              width={400}
              height={400}
              className="w-full h-full aspect-square phone:aspect-video object-cover desktop:aspect-auto desktop:h-[250px]"
            />
            <Image
              src="/images/quarter-horses/20221109_183443.jpg"
              alt="Quarter Horses - Maple Ranch"
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square phone:aspect-video desktop:aspect-auto desktop:order-last desktop:h-[250px]"
            />
            <Image
              src="/images/quarter-horses/IMG-20240330-WA0033.jpg"
              alt="Quarter Horses - Maple Ranch"
              width={400}
              height={800}
              className="hidden w-full h-full object-cover tablet:block object-top aspect-square phone:aspect-video desktop:row-span-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutComponent;
