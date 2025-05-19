import Image from "next/image";

const AboutComponent = () => {
  return (
    <div className="space-y-10 px-5 desktop:px-10">
      <Image
        src="/images/home-page/20241116_111757.jpg"
        alt="About us - Maple Ranch"
        width={750}
        height={750}
        className="w-full h-auto object-cover aspect-square tablet:hidden"
      />
      <main className="space-y-5">
        <h2>About Us</h2>
        <div className="desktop:grid gap-10 desktop:grid-cols-3">
          <div className="space-y-4 desktop:order-last">
            <p>
              Lorem ipsum dolor sit amet consectetur. Convallis nec amet
              senectus porttitor praesent leo. Vitae suspendisse maecenas nulla
              at. Volutpat quis amet aliquam vitae eget et quam. Elit proin id
              eu mauris sapien a nec. Facilisi aenean ipsum elit ut malesuada
              nec sed nulla pretium. Dui eu odio ornare felis dignissim sem.
              Velit elementum aenean ultrices a tortor ut mauris felis. Nisi sit
              interdum adipiscing in sed.
            </p>
            <p>
              Enim enim malesuada aliquam pulvinar augue ornare felis lectus.
              Urna euismod eget sed magna sed sit faucibus. Tortor tellus
              ultricies venenatis ornare aliquet quisque eleifend. Eget eget
              augue volutpat facilisi pharetra dictum. Tortor hendrerit massa in
              aliquam.
            </p>
            <p>
              A lectus quis bibendum vel et egestas id sit. Vulputate pulvinar
              egestas risus id pharetra. Ac consequat dui urna venenatis neque
              faucibus eu egestas mi. Velit sit velit tellus sed congue in id
              eget. Vulputate magnis scelerisque in consectetur amet sit
              ultricies suspendisse. Erat enim ipsum mollis egestas vel. Id odio
              massa nullam elit turpis.
            </p>
          </div>
          <div className="grid gap-10 mt-10 tablet:grid-cols-3 desktop:grid-cols-2 desktop:mt-0 desktop:col-span-2">
            <Image
              src="/images/home-page/20241116_111757.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={400}
              className="hidden w-full h-full object-cover tablet:block desktop:aspect-auto desktop:h-[250px]"
            />
            <Image
              src="/images/home-page/IMG-20231018-WA0103.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square desktop:aspect-auto desktop:order-last desktop:h-[250px]"
            />
            <Image
              src="/images/home-page/20250413_091930.jpg"
              alt="About Us - Maple Ranch"
              width={400}
              height={800}
              className="w-full h-full object-cover aspect-square desktop:aspect-auto desktop:row-span-2"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutComponent;
