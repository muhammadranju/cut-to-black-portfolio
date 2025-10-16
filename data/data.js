const data = [
  {
    id: 1,
    title: "Burnin' Trail",
    category: "films",
    platform: "youtube",
    image: "../assets/images/travel-login.jpg",
    videoPath: "pUEWTIciMZQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 2,
    title: "Carousel",
    category: "films",
    image: "../assets/images/travel-register.jpg",
    videoPath: "1127248459",
    platform: "vimeo",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 3,
    title: "Wear The Future",
    category: "commercials",
    platform: "youtube",
    image: "../assets/images/708392.webp",
    videoPath: "jz9XUBUjTiM",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 4,
    title: "Action Hero",
    category: "motion-graphics",
    platform: "vimeo",
    image: "../assets/images/J1jYLLlRpA4.jpg",
    videoPath: "352912827",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 5,
    title: "Robotlar Evreni",
    category: "motion-graphics",
    platform: "vimeo",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=800&fit=crop",
    videoPath: "239818793",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 6,
    title: "Robot Evolution",
    category: "motion-graphics",
    platform: "vimeo",
    image:
      "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&h=800&fit=crop",
    videoPath: "191064522",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 7,
    title: "Champion 25",
    category: "commercials",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 8,
    title: "Suspense Now",
    category: "editor",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 9,
    title: "No Rules",
    category: "post-supervisor",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 10,
    title: "Rivals in Love",
    category: "films",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 11,
    title: "Urban Stories",
    category: "branded-documentaries",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 12,
    title: "City Lights",
    category: "branded-documentaries",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 13,
    title: "Digital Dreams",
    category: "motion-graphics",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 14,
    title: "Brand Vision",
    category: "commercials",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
  {
    id: 15,
    title: "Epic Journey",
    category: "films",
    platform: "youtube",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=800&fit=crop",
    videoPath: "dQw4w9WgXcQ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt neque officia repudiandae dolorum harum ex, nulla odio explicabo, a unde voluptate repellendus voluptas omnis eaque, fuga rerum cumque eveniet rem veritatis laborum nihil minus dolorem? Sunt illo ea beatae aliquid.",
    cast: "Lorem, ipsum dolor, sit amet, consectetur, adipisicing elit, Soluta, ipsam!",
  },
];
