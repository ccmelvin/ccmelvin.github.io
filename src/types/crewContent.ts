// crewContent.ts
import victoria1 from "../assets/images/crew/victoria-flight-attendant-delta-connection-rdu.jpg";
import victoria2 from "../assets/images/crew/victoria-relaxing-garden-flybyspotter.jpg";
import victoria3 from "../assets/images/crew/brazil-family-airplane-selfie.jpg";
import gustavinho1 from "../assets/images/crew/gustavinho-cavalheiro-son-mirassol.jpeg"
import gustavinho2 from "../assets/images/crew/brazil-family-photo-airplane-mirassol.jpg";
import gustavinho3 from "../assets/images/crew/gustavo-son-pilot-student-raleigh.jpg";
import cassia1 from "../assets/images/crew/cassia-melvin-web-design-project.jpg";
import cassia2 from "../assets/images/crew/cassia-melvin-scotland-trip.jpg";
import cassia3 from "../assets/images/crew/cassia-melvin-london-sightseeing-1.jpg";
import colonMelvin1 from "../assets/images/crew/colon-melvin-san-diego-airplane.jpg";
import colonMelvin2 from "../assets/images/crew/colon-melvin-sao-paulo-airport.jpg";
import colonMelvin3 from "../assets/images/crew/colon-melvin-utah-airplane.jpg";

interface CrewMember {
    name: string;
    image: string[];
    alt: string;
    paragraphs: string[];
  }
  
  export const crewContent: CrewMember[] = [
    {
      name: "Victoria",
      image: [victoria1, victoria2, victoria3],
      alt: "Victoria Delta Flight Attendant at RDU",
      paragraphs: [
        "I’ve called Raleigh, NC, home for as long as I can remember, but my family's heritage is from Laos, and that’s a big part of who I am. Growing up surrounded by Lao culture and amazing Asian food has shaped my love for exploring different flavors and cuisines.",
        "If there's one place that truly stole my heart, it’s Thailand. I’ve been lucky enough to visit, and it quickly became my favorite destination. The food, the landscapes, the warmth of the people—it’s like nothing else.",
        "Being a flight attendant has given me the freedom to explore the world, but no matter how many countries I visit, Thailand will always hold a special place for me. I can’t get enough of the vibrant street food, the serene beaches, and the sense of peace I find there.",
      ],
    },
    {
      name: "Gustavo or Gustavinho (Son)",
      image: [gustavinho1, gustavinho2, gustavinho3],
      alt: "Gustavo Son Student Pilot (Raleigh) from Mirassol, Brazil",
      paragraphs: [
        "The year of 2024 has been a year of incredible milestones for me. I was born in a small city called Mirassol, São Paulo, Brazil, and although I’ve lived in North Carolina for many years, my Brazilian roots run deep. This year, I graduated from Leesville High School in North Carolina, and soon after, I started following my dream of becoming a pilot.",
        "One thing that will always connect me to my hometown is my love for Mirassol FC, the local soccer team. No matter where I am, you can bet I’ll be cheering them on! Now, I’m balancing my time between flight school and soaking in everything I can about the skies, eager to build a future as a pilot just like my dad.",
      ],
    },
    {
      name: "Cassia",
      image: [cassia1, cassia2, cassia3],
      alt: "Cassia - Web Designer and Traveler",
      paragraphs: [
        "I was born and raised in Guarulhos, São Paulo, Brazil, but now I call Cary, North Carolina, home. Since I was a child, I’ve dreamed of traveling the world. There’s so much out there I want to see and experience, and I know I’ve only scratched the surface.",
        "Besides travel, one of my greatest passions is cooking—I find it such a creative outlet. But my heart also belongs to design, especially when it comes to the world of perfume. There’s something magical about how scents can evoke memories and emotions.",
        "I’ve taken that passion for design and turned it into a career as a front-end engineer. I love being able to blend creativity with technology, crafting digital experiences that are as functional as they are visually appealing.",
      ],
    },
    {
      name: "Colon",
      image: [colonMelvin1, colonMelvin2, colonMelvin3],
      alt: "Colon - Photographer and Aspiring Pilot",
      paragraphs: [
        "Born and raised in North Carolina, photography has always been my creative outlet. It’s a way for me to pause time and capture the beauty around me.",
        "One day, I hope to have more time to pursue my other passion—flying. Getting my private pilot’s license has been a goal of mine, but between my career at a tech company and other life commitments, it’s been tough to fit in. Lately, I’ve been diving into AI at work, and it’s opened up a whole new world of possibilities in tech.",
        "When I’m not working or out with my camera, I enjoy keeping up with sports. I’m also into running—I make time for it regularly and have hit some personal records that I’m really proud of. Life is a bit of a balancing act, but I love every part of it.",
      ],
    },
  ];
  