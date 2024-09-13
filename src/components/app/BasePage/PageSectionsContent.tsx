// React and Next.js
import React from "react";
import Link from "next/link";

// Constants
import keywordDictionary from "@/constants/keywordsDict";

const replaceKeywordsWithLinks = (text: string) => {
  const parts = [];
  let lastIndex = 0;

  const keywordRegex = new RegExp(
    `\\b(${Object.keys(keywordDictionary).join("|")})\\b(?![\\w-])`,
    "gi",
  );

  let match;

  while ((match = keywordRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const keyword = match[0];
    const url =
      keywordDictionary[
        keyword.toLowerCase() as keyof typeof keywordDictionary
      ];

    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-blue-600 hover:underline"
      >
        {keyword}
      </Link>,
    );
    lastIndex = keywordRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const renderContent = (content: string | string[]) => {
  if (Array.isArray(content)) {
    return content.map((paragraph, index) => (
      <React.Fragment key={index}>
        {replaceKeywordsWithLinks(paragraph)}
        {index !== content.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </React.Fragment>
    ));
  }
  return replaceKeywordsWithLinks(content);
};

export default function PageSectionsContent({
  content,
}: {
  content: string | string[];
}) {
  return <>{renderContent(content)}</>;
}
