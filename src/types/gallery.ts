export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  content: string;
  likes: number;
  comments: string[];
}

import airPlane1 from "../assets/images/air_plane_01.jpg";
import airPlane2 from "../assets/images/air_plane_02.jpg";
import airPlane3 from "../assets/images/air_plane_03.jpg";
import airPlane4 from "../assets/images/raleigh_view_02.jpg";

export const initialGallery: GalleryItem[] = [
  {
    id: "1",
    imageUrl: airPlane1,
    title: "Beautiful Sunset",
    description: "A stunning sunset over the ocean.",
    content: "A stunning sunset over the ocean.",
    likes: 10,
    comments: ["Great shot!", "I love sunsets!"],
  },
  {
    id: "2",
    imageUrl: airPlane2,
    title: "Mountain View",
    description: "A breathtaking view of the mountains.",
    content: "",
    likes: 5,
    comments: ["Amazing!", "I want to go there!"],
  },

  {
    id: "3",
    imageUrl: airPlane3,
    title: "Mountain View",
    description: "A breathtaking view of the mountains.",
    content: "",
    likes: 5,
    comments: ["Amazing!", "I want to go there!"],
  },
  {
    id: "4",
    imageUrl: airPlane4,
    title: "Raleigh - North Carolina",
    description: "Final Approach to Raleigh - RDU",
    content:
      "A view from the window as the plane descends into Raleigh-Durham International Airport. The overcast skies frame the highways and green landscape below, capturing the city’s blend of nature and infrastructure just moments before landing.",
    likes: 5,
    comments: ["Amazing!", "I want to go there!"],
  },
];
