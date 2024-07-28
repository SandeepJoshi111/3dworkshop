const packages = [
  {
    essential: [
      {
        available: [
          "Basic static model",
          "4 renders view ",
          "Basic texture & lighting",
          "Multiple file formats",
          "Unlimited revisions",
          "Source file",
        ],
        notavailable: [
          "Includes Animation",
          "PBR textures",
          "Advanced Lighting",
        ],
      },
    ],
    standard: [
      {
        available: [
          "Semi complex model",
          "8 renders view",
          "10-15 seconds basic animations",
          "Advanced texture & lighting",
          "Multiple file formats ",
          "Unlimited revisions",
          "Source file",
        ],
        notavailable: ["PBR textures", "Complex models"],
      },
    ],
    premium: [
      {
        available: [
          "Complex model",
          "Unlimited renders view",
          "Advanced animations ",
          "Advanced texture & lighting",
          "24/7 customer support",
          "Multiple file formats ",
          "Unlimited revisions",
          "Source file",
          "PBR textures",
        ],
        notavailable: [],
      },
    ],
  },
];

export default packages;
