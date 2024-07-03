import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const TyphaniaMelith = () => {
  return (
    <div>
      <Head>
        <title>Typhania Melith - Princess of MIRLUN</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.typhaniaMelith})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Typhania Melith
              </h1>
              <p className="text-xl">Princess and Enchantress of MIRLUN</p>
            </div>
          </div>
        </header>
        <nav className="flex justify-center py-4 bg-gray-100">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="text-blue-600 hover:underline"
              >
                About Typhania Melith
              </a>
            </li>
            <li>
              <a
                href="#appearance"
                className="text-blue-600 hover:underline"
              >
                Physical Appearance
              </a>
            </li>
            <li>
              <a
                href="#personality"
                className="text-blue-600 hover:underline"
              >
                Personality
              </a>
            </li>
            <li>
              <a
                href="#abilities"
                className="text-blue-600 hover:underline"
              >
                Magical Abilities
              </a>
            </li>
            <li>
              <a
                href="#role"
                className="text-blue-600 hover:underline"
              >
                Role in MIRLUN
              </a>
            </li>
          </ul>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <div
            className="flex flex-col max-w-screen-lg"
            id="about"
          >
            <h2 className="text-4xl font-bold my-5 text-left">
              About Typhania Melith
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Typhania Melith is the beloved princess of MIRLUN, a kingdom known
              for its ancient forests and mystical heritage. Born into the royal
              family, Typhania has been trained in the arts of enchantment and
              nature magic from a young age.
            </p>
          </div>
          <div className="mt-8 flex">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[90dvw] h-1/2">
              <Image
                src={imageUrls.typhaniaMelith}
                alt="Typhania Melith"
                objectFit="cover"
                className="rounded-lg shadow-lg max-w-screen-lg w-[90dvw] h-1/2"
                height={0}
                width={0}
              />
            </div>
          </div>
          <div
            className="flex flex-col mt-8"
            id="appearance"
          >
            <h3 className="text-3xl font-bold my-5">Physical Appearance</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Typhania has long, flowing green hair and vibrant emerald eyes
              that reflect her deep connection with nature. Her pointed ears and
              ethereal beauty are characteristic of her elven heritage. She
              wears regal, flowing robes adorned with enchanted jewelry that
              enhances her magical abilities.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="personality"
          >
            <h3 className="text-3xl font-bold my-2">Personality</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Known for her compassion and wisdom, Typhania is deeply loved by
              her people. She has an innate love for nature and spends much of
              her time in the ancient forests of MIRLUN, tending to the flora
              and fauna. Her deep knowledge of magic and nature makes her a wise
              and insightful leader.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="abilities"
          >
            <h3 className="text-3xl font-bold my-2">Magical Abilities</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              As a master enchantress, Typhania specializes in spells that
              enhance, protect, and heal. Her enchantments are intricate and
              potent, often requiring deep concentration and knowledge. She has
              a deep connection with the natural world, allowing her to
              manipulate plants, communicate with animals, and heal the land.
              Despite her lack of physical strength, her control over elements
              such as water and earth makes her a formidable opponent.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="role"
          >
            <h3 className="text-3xl font-bold my-2">Role in MIRLUN</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              As the princess, Typhania plays a crucial role in the governance
              of MIRLUN. She represents her people in diplomatic matters and
              ensures the kingdom{"'"}s traditions and values are upheld. She is
              also the foremost guardian of MIRLUN{"'"}s ancient forests, using
              her magic to protect the land from threats.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TyphaniaMelith;
