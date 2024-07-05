/* Global imports */
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";
import SectionTitle from "@/components/base/SectionTitle";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionImageContainer from "@/components/base/SectionImageContainer";
import SectionImage from "@/components/base/SectionImage";
import SectionHeadContainer from "@/components/base/SectionHeadContainer";
import SectionHeader from "@/components/base/SectionHeader";
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionNavLink from "@/components/base/SectionNavLink";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Felicia Shoner - SHUBORE's Supreme Witch",
};

const FeliciaShoner = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.feliciaShoner}
          title="Felicia Shoner"
          subtitle="The Supreme Witch of SHUBORE"
        />
        <SectionNavContainer>
          <SectionNavLink
            href="#about"
            title="About Felicia Shoner"
          />
          <SectionNavLink
            href="#appearance"
            title="Physical Appearance"
          />
          <SectionNavLink
            href="#personality"
            title="Personality"
          />
          <SectionNavLink
            href="#abilities"
            title="Magical Abilities"
          />
          <SectionNavLink
            href="#role"
            title="Role in SHUBORE"
          />
        </SectionNavContainer>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="about">
            <SectionTitle title="About Felicia Shoner" />
            <SectionContent>
              Felicia Shoner is the esteemed Supreme Witch of SHUBORE, a kingdom
              renowned for its maritime prowess and harsh, icy climate. Felicia
              {"'"}s exceptional magical abilities and deep knowledge of
              enchantments have earned her a revered position in Shuborian
              society.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Felicia Shoner"
              imageUrl={imageUrls.feliciaShoner}
            />
          </SectionImageContainer>
          <SectionContainer id="appearance">
            <SectionSubtitle title="Physical Appearance" />
            <SectionContent>
              Felicia possesses a commanding presence with her striking
              features. Her long, blond hair and piercing blue eyes reflect the
              icy landscape of SHUBORE. She often dons flowing robes adorned
              with intricate magical symbols and focuses on ice magic.
              <div className="grid grid-cols-2 gap-4 mt-4 max-h-96 h-full">
                <div className="relative col-span-1">
                  <Image
                    src={imageUrls.feliciaShonerDungeon}
                    alt="Felicia Shoner"
                    className="w-full max-h-96 object-cover rounded-md"
                    style={{ height: "100%" }}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <Image
                    src={imageUrls.feliciaShonerBack}
                    alt="Felicia Shoner"
                    className="w-full max-h-44 object-cover rounded-md"
                    style={{ height: "auto" }}
                    width={0}
                    height={0}
                  />
                  <Image
                    src={imageUrls.feliciaShonerEveryday}
                    alt="Felicia Shoner"
                    className="w-full max-h-44 object-cover rounded-md"
                    style={{ height: "auto" }}
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="personality">
            <SectionSubtitle title="Personality" />
            <SectionContent>
              Known for her unwavering resolve and wisdom, Felicia is deeply
              respected by her peers and subjects. She has a fierce dedication
              to protecting SHUBORE and its people, often seen as both a
              guardian and a mentor. Despite her formidable power, she is
              compassionate and seeks to use her abilities for the greater good.
              Her presence commands both fear and reverence; if you see her on
              the battlefield, it is most likely the last sight you will ever
              behold.
              <br />
              <br />
              Felicia{"'"}s relationship with her younger sister, Eliana Shoner,
              is a cornerstone of her life. Eliana, quickly becoming a powerful
              soldier and now the head of SHUBORE{"'"}s fleet, shares a bond
              with Felicia that goes beyond familial ties. Their mutual respect
              and shared experiences have forged an unbreakable bond. Eliana
              {"'"}s rise to power has made Felicia even more determined to
              protect her people, as she sees in Eliana the future of SHUBORE
              {"'"}s strength and resilience.
              <br />
              <br />
              Felicia is a complex individual, balancing the weight of her
              responsibilities with a deep sense of personal reflection. In
              private moments, she is reflective and contemplative, often
              wandering by the fishermen{"'"}s shores. The rhythmic sound of the
              waves and the solitude of the coast provide her a sanctuary where
              she can meditate and reconnect with her inner self. These solitary
              walks are crucial for her mental clarity and emotional balance,
              allowing her to reflect on the past and plan for the future.
              <br />
              <br />
              Her wisdom is not just a result of her magical prowess but also a
              product of her keen observation and understanding of people.
              Felicia has an intuitive ability to read emotions and intentions,
              making her a skilled diplomat and a trusted advisor. Her empathy
              allows her to connect deeply with others, offering comfort and
              guidance when needed. However, this same empathy can be a source
              of pain, as she often feels the burdens and sorrows of those
              around her.
              <br />
              <br />
              Felicia’s leadership style is characterized by her emphasis on
              unity and collective strength. She believes that the true power of
              SHUBORE lies in its people and their ability to work together. She
              encourages open communication and collaboration, fostering a
              community where every voice is heard and valued. Her strategic
              mind is always thinking several steps ahead, anticipating
              potential threats and preparing her people to face them.
              <br />
              <br />
              Despite the immense pressure of her role, Felicia maintains a calm
              and composed exterior. This serenity is both a natural trait and a
              cultivated skill, developed through years of discipline and
              practice. She understands the importance of being a steady and
              reliable figure for her people, especially in times of crisis.
              <br />
              <br />
              Felicia’s life is a delicate balance of duty and personal
              aspiration. Her love for SHUBORE is matched by her desire to see
              her sister thrive and her kingdom flourish. She dreams of a future
              where peace reigns and her people can live without fear. Until
              that day comes, Felicia remains ever vigilant, a beacon of hope
              and strength for all of SHUBORE.
              <br />
              <br />
              In essence, Felicia Shoner is a blend of strength, wisdom,
              compassion, and introspection. Her multifaceted personality and
              unwavering dedication make her a revered and beloved figure in
              SHUBORE, a true embodiment of the kingdom{"'"}s spirit and
              resilience.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="abilities">
            <SectionSubtitle title="Magical Abilities" />
            <SectionContent>
              As the Supreme Witch, Felicia{"'"}s magical prowess is unmatched.
              She specializes in ice and water magic, capable of controlling the
              elements to devastating effect. Her enchantments are known for
              their complexity and strength, and she possesses the unique
              ability to communicate with the spirits of the sea, seeking their
              guidance and aid.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="role">
            <SectionSubtitle title="Role in SHUBORE" />
            <SectionContent>
              In her role as Supreme Witch, Felicia plays a vital part in the
              governance and defense of SHUBORE. She advises the royal family
              and the maritime guilds, ensuring that their strategies are
              bolstered by her magical insights. Felicia also leads efforts to
              maintain the kingdom{"'"}s ancient traditions and rituals,
              preserving the cultural heritage of SHUBORE.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeliciaShoner;
