# Stormhold History Documentation

This folder contains JSON files representing various historical events in the fantasy world of Stormhold. Each event file is used to generate pages on a website, showcasing different historical periods and details about the world.

## JSON Format

Each historical event is represented by a JSON file with the following structure:

```json
{
  "title": "The Creation of Stormhold",
  "subtitle": "The birth of the world and its races",
  "duration": "From the Dawn of Time to Year 0 of the First Age",
  "date_id": "-1000-01-01",
  "excerpt": "The creation of Stormhold is the beginning of everything, where the primordial gods Lothas and Rethane shaped the world and birthed the races of elves, humans, and beastfolk. This era marks the formation of the continent, the rise of the World Tree, and the creation of life.",
  "sections": [
    {
      "id": "intro",
      "title": "Introduction",
      "content": [
        "In the beginning, there was only the Void Sea, a vast expanse of nothingness and chaos. From this abyss emerged two primordial beings: Lothas, God of Creation, and Rethane, Goddess of Nature. Together, they sought to bring order to the chaos, shaping the land that would become known as Stormhold.",
        "Lothas created the earth, raising mountains, carving rivers, and forming the vast oceans. Rethane followed, filling the land with life. She planted the World Tree, Elothir, whose roots connected the divine realms to the mortal world. From this cosmic tree, the first races were born."
      ]
    },
    {
      "id": "creation-of-races",
      "title": "Creation of the Races",
      "content": [
        "The firstborn were the elves, created from the branches of Elothir. The elves were split into two sub-races: the Lunari, or High Elves, and the Sundrians, or Sand Elves. The Lunari were made to be the stewards of nature, while the Sundrians were adapted to life in the harsh deserts.",
        "Next came the humans, crafted by Lothas from the soil of Stormhold. They were designed to be builders, warriors, and rulers, spreading civilization across the continent.",
        "Lastly, Rethane in her wild aspect created the Beastfolk. These half-animal, half-human beings were connected to the primal forces of nature and lived in harmony with the land. The main Beastfolk races included the Lupiri (wolf-folk), Feliri (cat-folk), and Aviri (bird-folk)."
      ]
    },
    {
      "id": "the-world-tree",
      "title": "The World Tree, Elothir",
      "content": [
        "The World Tree, Elothir, stood at the heart of Stormhold, its roots stretching across the land and connecting the divine realms to the mortal world. It was from this tree that all life in Stormhold emerged, and it became a symbol of balance and unity between the gods and their creations.",
        "Elothir's branches touched the skies, and its roots delved deep into the earth. The elves, humans, and Beastfolk all revered the tree as a sacred entity, and its presence shaped the early spiritual practices of Stormhold's inhabitants."
      ]
    }
  ]
}
```

Fields

- title: The title of the historical event.
- subtitle: A subtitle providing additional context.
- duration: The time period covered by the event.
- date_id: A unique identifier for the date of the event, formatted as YYYY-MM-DD.
- excerpt: A brief summary of the event.
- sections: An array of sections describing different parts of the event.
  - id: A unique identifier for the section.
  - title: The title of the section.
  - content: An array of strings representing the content of the section. Can include plain text or formatted paragraphs, each string in the array representing a paragraph.
