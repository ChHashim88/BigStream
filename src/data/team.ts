export interface Executive {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const BSEG_INFO = {
  companyName: "Big Screen Entertainment Group Inc.",
  stockTicker: "BSEG",
  foundedYear: 2005,
  headquarters: "Los Angeles, California, USA",
  mission:
    "Big Screen Entertainment Group is a publicly traded (Stock: BSEG) media and technology conglomerate dedicated to acquiring, producing, and globally distributing high-impact independent feature films, television properties, and next-generation digital streaming services.",
  overview:
    "Big Stream Entertainment is a premier streaming platform delivering Big Screen Entertainment Group, partner, and affiliate content across connected TVs, web platforms, and mobile devices. From the expansion of our dedicated Roku channel to our state-of-the-art web app platform, Big Stream connects global audiences directly to high-caliber filmmaking.",
};

export const EXECUTIVE_TEAM: Executive[] = [
  {
    name: "Kimberley Kates",
    role: "CEO & Director",
    bio: "Award-winning film producer and former actress who has led Big Screen Entertainment Group through major international distribution deals, production slates, and streaming innovations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Stephen Eckelberry",
    role: "Chairman & Director",
    bio: "Veteran film director, writer, and editor with decades of experience overseeing feature film post-production, VFX workflows, and strategic corporate governance at BSEG.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Manasseri",
    role: "Director & Consultant",
    bio: "Acclaimed actor, director, and filmmaker who brings creative vision, talent relations, and hands-on independent production management to the BSEG board.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Bruce Lee",
    role: "Director",
    bio: "Global business strategist and corporate advisory director providing expertise in international finance, cross-border content licensing, and strategic corporate growth.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Jimmy Jiang",
    role: "Director & CEO of BSEG Capital Subsidiary",
    bio: "Finance and venture director leading BSEG Capital Subsidiary, driving capital structure optimization, institutional investor relations, and strategic media acquisitions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export const CAMELCODE_INFO = {
  name: "camelCode LLC",
  role: "Technology Partner",
  description:
    "camelCode LLC serves as the core engineering and digital infrastructure technology partner for Big Stream Entertainment, engineering ultra-low-latency video delivery architectures, responsive streaming interfaces, and secure user data systems.",
};
