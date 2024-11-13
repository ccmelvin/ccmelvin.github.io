export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  content: string;
  likes: number;
  comments: string[];
  altText: string;
  tags: string[];
}

import airplaneWingOverOceanClouds from "../assets/images/gallery/flybyspotter-airplane-wing-over-ocean-clouds.jpg";
import airplaneWingAboveFarmland from "../assets/images/gallery/flybyspotter-airplane-wing-above-farmland.jpg";
import blueAngelsMarineAircraft from "../assets/images/gallery/flybyspotter-blue-angels-marine-aircraft.jpg";
import airplaneLandingRDU from "../assets/images/gallery/flybyspotter-airplane-landing-rdu-raleigh.jpg";
import airplaneWingSunsetSky from "../assets/images/gallery/flybyspotter-airplane-wing-sunset-sky.jpg";

export const initialGallery: GalleryItem[] = [
  {
    id: "1",
    imageUrl: airplaneWingOverOceanClouds,
    title: "Ocean View from Airplane",
    description: "Captured over the ocean, a stunning view of clouds from an airplane wing.",
    content: "Flyby Spotter captures this serene ocean view from high above the clouds.",
    likes: 10,
    comments: ["Great shot!", "I love sunsets!"],
    altText: "View of the ocean and clouds from an airplane wing, captured by Flyby Spotter.",
    tags: ["flyby spotter", "airplane", "ocean view", "clouds", "aviation photography"]
  },
  {
    id: "2",
    imageUrl: airplaneWingAboveFarmland,
    title: "Farmland from Above",
    description: "A scenic view of farmland and fields seen from an airplane wing.",
    content: "An aerial view over green farmland, captured by Flyby Spotter during a flight.",
    likes: 5,
    comments: ["Amazing!", "I want to go there!"],
    altText: "Green farmland and fields as seen from an airplane wing, captured by Flyby Spotter.",
    tags: ["flyby spotter", "farmland view", "airplane wing", "aviation photography", "landscape"]
  },
  {
    id: "3",
    imageUrl: blueAngelsMarineAircraft,
    title: "Blue Angels Marine Aircraft",
    description: "A powerful Blue Angels Marine aircraft in flight.",
    content: "Captured by Flyby Spotter, this Blue Angels Marine aircraft demonstrates precision in the skies.",
    likes: 15,
    comments: ["Impressive!", "Look at that precision!"],
    altText: "Blue Angels Marine aircraft flying against a clear sky, captured by Flyby Spotter.",
    tags: ["flyby spotter", "Blue Angels", "Marine aircraft", "aviation", "airshow"]
  },
  {
    id: "4",
    imageUrl: airplaneLandingRDU,
    title: "Landing at Raleigh-Durham",
    description: "Aerial view during final descent into Raleigh-Durham International Airport (RDU).",
    content: "A view of Raleigh highways and landscape as the plane descends, streamed live by Flyby Spotter.",
    likes: 8,
    comments: ["Looks peaceful!", "I recognize that highway!"],
    altText: "Descending airplane view over Raleigh-Durham highways, captured by Flyby Spotter during final approach.",
    tags: ["flyby spotter", "RDU landing", "Raleigh-Durham", "airport view", "aviation photography"]
  },
  {
    id: "5",
    imageUrl: airplaneWingSunsetSky,
    title: "Airplane Wing at Sunset",
    description: "A serene view of an airplane wing with a golden sky at sunset.",
    content: "Captured by Flyby Spotter, this image showcases a beautiful golden hour view from high above the clouds.",
    likes: 12,
    comments: ["Stunning view!", "I love golden hour photos!"],
    altText: "View of an airplane wing during sunset with a golden sky, captured by Flyby Spotter.",
    tags: ["flyby spotter", "airplane wing", "sunset", "horizon", "aviation photography", "golden sky"]
  }
];
