export type MediaItem = {
  type: "image" | "video" | "vimeo";
  src: string;
  caption?: string;
  layout: "full" | "grid-4";
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  category: string[];
  link?: string;
  collaborators?: { name: string; url?: string }[];
  photography?: string[];
  media: MediaItem[];
};

function fullThenGrid(slug: string, files: string[], caption?: string): MediaItem[] {
  return files.map((file, i) => ({
    type: "image",
    src: `/projects/${slug}/${file}`,
    layout: i === 0 ? "full" : "grid-4",
    ...(i === 0 && caption ? { caption } : {}),
  }));
}

function videos(slug: string, files: string[], layout: "full" | "grid-4" = "full"): MediaItem[] {
  return files.map((file) => ({
    type: "video",
    src: `/projects/${slug}/${file}`,
    layout,
  }));
}

function vimeoEmbed(url: string): MediaItem {
  return { type: "vimeo", src: url, layout: "full" };
}

export const projects: Project[] = [
  {
    slug: "sams",
    title: "sams",
    year: "2025",
    description: "Sams explores innovative solutions for equipping workspaces in compact living environments, combining modular design, natural elements, and adaptable features to address the evolving needs of remote work and multifunctional living spaces.",
    category: ["furniture", "objects"],
    media: fullThenGrid("sams", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  },
  {
    slug: "camp",
    title: "camp",
    year: "2024",
    description: "The concern for the environment is growing, and after the pandemic many of us realized the importance of materials and how they affect our health. In this context, our project explored how to bring nature into people's spaces through a modular solution made with natural materials.",
    category: ["furniture", "objects"],
    collaborators: [{ name: "Carlos de Luis", url: "https://carlosdeluis.cargo.site" }],
    media: [vimeoEmbed("https://player.vimeo.com/video/956788107?portrait=0&muted=1&autopause=0&pip=0&volume=0&loop=1&app_id=122963&controls=0"), ...fullThenGrid("camp", ["1.png", "2.png", "3.png", "4.png", "5.png"])],
  },
  {
    slug: "charlotte",
    title: "charlotte",
    year: "2024",
    description: "We made the Charlotte Stool thinking in the classic geometry. Charlotte is hand-carved in solid teak wood with a ripple texture inspired by marine flora. This piece is a showcase of how craftsmanship harmonize with nature.",
    category: ["furniture", "objects"],
    link: "HeapsAndWoods.com",
    collaborators: [{ name: "Heaps and Woods" }],
    photography: ["Javi Dardo"],
    media: [...fullThenGrid("charlotte", ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]), ...videos("charlotte", ["video-5.mp4"])],
  },
  {
    slug: "clau",
    title: "clau",
    year: "2024",
    description: "Introducing the Clau Table – a showcase of our dedication to recycled teak wood pieces. Simple yet intricate, the tabletop reveals a captivating interplay of geometries upon closer inspection.",
    category: ["furniture", "objects"],
    link: "HeapsAndWoods.com",
    collaborators: [{ name: "Heaps and Woods" }],
    photography: ["Javi Dardo"],
    media: fullThenGrid("clau", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png"]),
  },
  {
    slug: "hanna",
    title: "hanna",
    year: "2024",
    description: "Hanna Mirror is a captivating blend of organic, psychedelic, and sculptural design inspired by nature. Part of a series born on an Asian beach stroll, this mirror showcases innovative techniques developed in collaboration with artisan teams.",
    category: ["furniture", "objects"],
    link: "HeapsAndWoods.com",
    collaborators: [{ name: "Heaps and Woods" }],
    photography: ["Javi Dardo"],
    media: [...fullThenGrid("hanna", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]), ...videos("hanna", ["video-6.mp4"])],
  },
  {
    slug: "ionicare-power-go",
    title: "ionicare power&go",
    year: "2025",
    description: "The Cecotec IoniCare Power&Go is a compact and powerful hair dryer designed to provide fast and efficient drying both at home and while traveling. Thanks to its high-power motor and ionic technology, it helps reduce frizz and leaves hair shinier, smoother, and with a professional finish. Its lightweight, foldable design makes it easy to transport and store.",
    category: ["tech", "objects"],
    link: "Cecotec.es",
    collaborators: [{ name: "Cecotec" }],
    media: fullThenGrid("ionicare-power-go", ["1.png", "2.png", "3.png", "4.png"]),
  },
  {
    slug: "conga-rockstar-1600-advance",
    title: "conga rockstar 1600 advance",
    year: "2025",
    description: "The vacuum is a versatile and cordless, designed to deliver powerful performance and intelligent cleaning across all floor types and surfaces. This vacuum excels by blending robust suction, smart automation, ergonomic design, and comprehensive cleaning capabilities — ideal for modern homes with varied flooring and frequent pet hair or dust.",
    category: ["tech", "objects"],
    link: "Cecotec.es",
    collaborators: [{ name: "Cecotec" }],
    media: fullThenGrid("conga-rockstar-1600-advance", ["1.png", "2.png", "3.png", "4.png"]),
  },
  {
    slug: "apple-station-concept",
    title: "apple station concept",
    year: "2022",
    description: "I developed this smart wireless charger, taking inspiration from MagSafe and the Apple Watch. This product serves as an additional extension of the “Apple Ecosystem,” a device designed to stay at home and function as an integral part of your Apple products.",
    category: ["tech", "objects"],
    media: [...fullThenGrid("apple-station-concept", ["1.png", "2.png", "3.png"]), ...videos("apple-station-concept", ["video-4.mp4", "video-5.mp4", "video-6.mp4"], "grid-4")],
  },
  {
    slug: "s-jive",
    title: "s-jive",
    year: "2023",
    description: "In a society where living spaces are increasingly smaller, we saw the need to redesign the classic turntable to adapt it to these new compact environments.",
    category: ["tech", "objects"],
    media: [...fullThenGrid("s-jive", ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]), vimeoEmbed("https://player.vimeo.com/video/1035781473?portrait=0&muted=1&autopause=0&pip=0&volume=0&loop=1&app_id=122963&controls=0")],
  },
  {
    slug: "pit-go",
    title: "pit&go",
    year: "2024",
    description: "The portable electric car charger allows the battery of an electric car to be charged from a standard power outlet. It consists of a charging cable and an adapter that can be connected to a regular electrical socket.",
    category: ["tech", "objects"],
    link: "Cecotec.es",
    collaborators: [{ name: "Cecotec" }],
    media: [...fullThenGrid("pit-go", ["1.png", "2.png", "3.png", "4.png"]), ...videos("pit-go", ["video-5.mp4"])],
  },
  {
    slug: "conga-grasshopper-500",
    title: "conga grasshopper 500",
    year: "2024",
    description: "The intelligent, autonomous, and connected robotic lawnmower is designed to automate the maintenance of residential lawns of up to 500 m², offering an efficient, quiet, sustainable, and easily manageable solution via mobile devices.",
    category: ["tech", "objects"],
    link: "Cecotec.es",
    collaborators: [{ name: "Cecotec" }],
    media: [...fullThenGrid("conga-grasshopper-500", ["1.png", "2.png", "3.png"]), ...videos("conga-grasshopper-500", ["video-4.mp4"])],
  },
  {
    slug: "adcv-adwars-exhibition",
    title: "ADCV adwars exhibition",
    year: "2024",
    description: "Collaborative design with Makea for the biennial event for the ADCV Awards Exhibition the proyect was in collaboration with Makea and the Asociación de Diseñadores de la Comunitat Valenciana.",
    category: ["exhibition"],
    collaborators: [
      { name: "Asociación de diseñadores de la Comunitat Valenciana" },
      { name: "Makea" },
    ],
    photography: ["Alejandro de Luis", "Artur Kubiak"],
    media: fullThenGrid("adcv-adwars-exhibition", ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]),
  },
];
