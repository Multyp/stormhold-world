// Components
import SectionHeadContainer from "@/components/base/SectionHeadContainer";
import SectionTitle from "@/components/base/SectionTitle";
import SectionContent from "@/components/base/SectionContent";
import PronunciationButton from "../PronunciationButton";

// Types
import type {
  CharacterData,
  EventData,
  PageData,
  Section,
} from "@/types/pageData";
import PageSectionsContent from "./PageSectionsContent";

function isCharacterData(
  data: PageData | EventData | CharacterData,
): data is CharacterData {
  return (data as CharacterData).pronunciation !== undefined;
}

export default function BasePageIntro({
  section,
  data,
}: {
  section: Section;
  data: PageData | EventData | CharacterData;
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
      <SectionContent>
        <PageSectionsContent content={section.content} />
      </SectionContent>
    </SectionHeadContainer>
  );
}
