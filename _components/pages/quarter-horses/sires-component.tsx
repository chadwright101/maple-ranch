import Image from "next/image";

import siresData from "@/_data/general-data.json";

const {
  quarterHorsesPage: { sires },
} = siresData;

const SiresComponent = () => {
  return (
    <section className="space-y-10 px-5 desktop:px-10">
      <div className="grid desktop:grid-cols-3 gap-10">
        <h2 className="text-heading font-passion-one border-b-4 border-red leading-12">
          Sire's
        </h2>
      </div>
      <div className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
        {sires.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Sire's - Maple Ranch"
            width={400}
            height={400}
            className="w-full h-full object-cover aspect-video desktop:aspect-square"
          />
        ))}
      </div>
    </section>
  );
};

export default SiresComponent;
