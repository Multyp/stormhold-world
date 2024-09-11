import SectionHeadContainer from "@/components/base/SectionHeadContainer";
import SectionTitle from "@/components/base/SectionTitle";
import PronunciationButton from "../PronunciationButton";
import SectionContent from "@/components/base/SectionContent";

import type {
  CharacterData,
  EventData,
  PageData,
  Section,
} from "@/types/pageData";

function isCharacterData(
  data: PageData | EventData | CharacterData,
): data is CharacterData {
  return (data as CharacterData).pronunciation !== undefined;
}

export default function BasePageIntro({
  section,
  data,
  renderContent,
}: {
  section: Section;
  data: PageData | EventData | CharacterData;
  renderContent: (a: string | string[]) => React.ReactNode;
}) {
  return (
    <SectionHeadContainer id={section.id}>
      <SectionTitle title={section.title} />
      {isCharacterData(data) && data.pronunciation && (
        <PronunciationButton
          pronunciation={data.pronunciation}
          name={data.title}
        />
      )}
      <SectionContent>{renderContent(section.content)}</SectionContent>
    </SectionHeadContainer>
  );
}
