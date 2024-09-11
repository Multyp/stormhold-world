import imageUrls from "@/constants/imageUrls";
import SectionImage from "@/components/base/SectionImage";
import SectionImageContainer from "@/components/base/SectionImageContainer";

export default function BasePageIntroImage({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <SectionImageContainer>
      <SectionImage
        alt={title}
        imageUrl={imageUrls[image as keyof typeof imageUrls]}
      />
    </SectionImageContainer>
  );
}
