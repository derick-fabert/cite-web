import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Front Load Garbage Trucks with Curotto-Can",
    description:
         "Engineered for high-volume municipal routes, our front load garbage trucks with factory-installed Curotto-Can deliver rapid cart-to-hopper cycles and unmatched driver visibility. Pairing Heil’s legendary body construction with the Curotto-Can’s low-maintenance grabbing mechanism, the platform keeps contamination low and productivity high on residential, alley, and automated commercial pickups. Fitted with optional 3rd Eye camera systems, the package streamlines daily inspections and keeps crews safer at the curb.",
    imageSrc: "/Front-Load-Garbage-Trucks-With-Curotto-Can.jpg",
    imageAlt: "Heil front load garbage truck equipped with a Curotto Can attachment",
    link: "https://www.heil.com/type/automated-front-loaders/",
  },
  {
    title: "DuraPack Python Side Load Garbage Trucks",
    description:
      "Built to dominate dense residential routes, the DuraPack Python sideload body combines Heil’s proven Durapack body with the Python automated arm for one-pass cart retrieval. Smooth hydraulic sequencing, ergonomic joystick controls, and precision auto-leveling reduce cart spillage and operator fatigue while maintaining fast 8-second lift cycles. Stainless steel hopper liners and easy-access service doors simplify preventive maintenance so your crews spend more time earning revenue and less time in the shop.",
    imageSrc: "/DuraPack-Python-Side-Load-Garbage-Trucks.jpg",
    imageAlt: "Heil DuraPack Python side load garbage truck collecting carts curbside",
    link: "https://www.heil.com/bodies/durapack-python-automated-side-load-garbage-trucks/",
  },
  {
    title: "Heil Half/Pack Commercial",
    description:
         "The standard of the industry for decades, the Heil Half/Pack is built for longevity. With an interlaced subframe, streetwise hydraulics, and double-walled hoppers, this unit is designed to be on route with less downtime to optimize total cost of ownership",
    imageSrc: "/Heil-Half-Pack.jpg",
    imageAlt: "Heil Half/Pack Commercial",
    link: "https://www.heil.com/bodies/half-pack-commercial/",
  },
  {
    title: "Heil RevAMP Electric",
    description:
         "Heil’s fully electric automated sideloader with self-contained power source can work on electric or diesel chassis. Eliminating hydraulics during operation prevents costly spills. The RevAMP comes standard with an 8-second lift cycle time, full eject, and an auger self-cleaning hopper. Servicing up to 1,200 containers on RevAMP’s independent battery with an overnight charge. ",
    imageSrc: "/Heil-RevAMP-Electric.jpg",
    imageAlt: "Heil RevAMP Electric",
    link: "https://www.heil.com/bodies/revamp-electric-side-load-garbage-truck/",
  },
  {
    title: "Rear Load Garbage Trucks",
    description:
      "For communities that rely on manual or semi-automated collection, Heil rear load bodies provide the rugged backbone crews demand. Tapered body lines and high-compaction sweep panels maximize payloads, while dual-cycling tailgate locks and Bayne-compatible cart tippers keep operators moving efficiently. Integrated LED work lighting, curbside controls, and simple plumbing architecture make these trucks ideal for mixed waste streams, bulky pickups, and tight urban alleys where reliability comes first.",
    imageSrc: "/Rear-Load-Garbage-Trucks.jpg",
    imageAlt: "Heil rear load garbage truck backing up for collection",
    link: "https://www.heil.com/type/rear-loaders/",
  },
  {
    title: "Connected Collections Fleet Technology",
    description:
      "Connected Collections brings 3rd Eye digital cameras, Soft-Pak routing intelligence, Marathon compaction data, and Heil body sensors into a single dashboard. Real-time video, geolocation breadcrumbs, and predictive maintenance alerts help dispatchers respond to service requests before they escalate. API integrations feed directly into billing and citizen engagement platforms, while driver scorecards reinforce safe habits. Whether you manage ten trucks or a regional fleet, the platform scales insights that keep routes profitable and communities informed.",
    imageSrc: "/Connected-Collections.jpg",
    imageAlt: "Connected Collections technology logos highlighting fleet data integration",
    link: "https://www.heil.com/connected-collections/",
  }
];

const productOrderClasses = [
  "order-1 md:order-1",
  "order-3 md:order-2",
  "order-2 md:order-3",
  "order-4 md:order-4",
  "order-5 md:order-5",
  "order-6 md:order-6",
];

function Hero() {
  return (
    <section className="bg-slate-50 text-slate-900 p-2">
      <div className="flex items-center justify-center gap-8">
        <div className="relative min-h-[220px] w-full max-w-36 sm:max-w-72">
          <Image
            src="/Logo-transparent.png"
            alt="Central Indiana Truck Equipment logo"
            fill
            sizes="(min-width: 1280px) 28vw, (min-width: 640px) 38vw, 90vw"
            className="object-contain"
            priority
          />
        </div>
        <h1 className="font-extrabold uppercase tracking-[0.2em] text-slate-900 sm:text-3xl">
          <span className="text-red-600">C</span>entral{" "}
          <span className="text-red-600">I</span>ndiana{" "}
          <span className="text-red-600">T</span>ruck{" "}
          <span className="text-red-600">E</span>quipment Corp.
        </h1>
      </div>

      <div className="text-center text-slate-500 my-4 italic md:text-2xl">Since 1961</div>

      <div className="flex items-center justify-center">
        <div className=" my-auto max-w-[1000px] p-2 flex flex-col md:flex-row gap-4 items-center justify-center">
          <p className="text-base leading-relaxed text-slate-700">
            Your authorized Heil refuse equipment dealer servicing Indiana, Northern Kentucky and
            East Central Illinois. We also  offer Schaefer carts, 3rd Eye camera systems, Curotto-Can
            automation and Bayne Thinline lifters, backed by local expertise to keep routes safe and
            productive.
          </p>

          <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-6 text-sm leading-6 text-slate-700 shadow-sm min-w-72">
            <p className="font-semibold uppercase tracking-wide text-slate-900">
              Visit Our Headquarters
            </p>
            <p className="mt-2">
              2128 South Harding Street
              <br />
              Indianapolis, IN 46221
            </p>
            <p className="mt-3">
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              <a className="underline decoration-slate-400 hover:text-red-600" href="tel:+13176394207">
                (317) 639-4207
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-slate-900 lg:px-8">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-[0.2em] text-slate-900 sm:text-4xl">
            Product Spotlight
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            Explore lead offerings from Central Indiana Truck Equipment and discover how Heil refuse bodies,
            automation upgrades, and connected fleet tools keep your routes on schedule.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product.title}
              className={`${productOrderClasses[index] ?? ""} group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority={product.title === products[0].title}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-wide text-red-600 underline decoration-red-300 underline-offset-4 hover:text-red-700"
                >
                  See More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-white flex flex-col gap-8 items-center justify-center pt-8 pb-16 px-4">
      <div className="text-center text-sm md:text-2xl font-semibold uppercase tracking-wide text-slate-900">
        Contact us today to learn more about our products and services.
      </div>
      <button className="text-sm font-semibold uppercase tracking-wide text-red-600 underline decoration-red-300 underline-offset-4 hover:text-red-700 bg-slate-200 px-4 py-2 rounded-md">
        <a className="underline decoration-slate-400" href="mailto:SALES@CITECORP.NET">
          SALES@CITECORP.NET
        </a>
      </button>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Central Indiana Truck Equipment Corp.</p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <CTA />
      <Footer />
    </>
  );
}
