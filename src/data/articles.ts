export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  image: string;
  featured?: boolean;
  readTime: string;
}

export const HIFM_ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "The Key to Christmas",
    slug: "the-key-to-christmas",
    date: "2020-05-22",
    category: "Development & Production",
    author: {
      name: "Kimberley Kates",
      role: "Editor-in-Chief & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    excerpt: "Big Screen Entertainment Group is developing a Christmas movie which looks set to give family audiences a festive treat for years to come.",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    readTime: "6 min read",
    content: [
      "Big Screen Entertainment Group (BSEG) is thrilled to announce the active development of its major holiday feature film, 'The Key to Christmas.' Designed to resonate with global family audiences for generations, the production brings together world-class storytelling, cutting-edge visual effects, and timeless musical arrangements.",
      "The narrative follows a young clockmaker in a snow-draped alpine village who inherits an ancient brass key. Unbeknownst to him, the key unlocks an ethereal clockwork sanctuary where forgotten holiday wishes are preserved. When the sanctuary's gears slow down, threatening to erase holiday spirit forever, he embarks on an enchanted quest to reignite the magic of giving.",
      "With pre-production under way and principal photography scheduled across stunning European locations, 'The Key to Christmas' represents BSEG's commitment to building enduring cinematic IP for streaming and international theatrical distribution.",
    ],
  },
  {
    id: "art-2",
    title: "The Directors Who Changed the Film Industry",
    slug: "the-directors-who-changed-the-film-industry",
    date: "2020-04-20",
    category: "Cinema History",
    author: {
      name: "Stephen Eckelberry",
      role: "Senior Film Historian",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    excerpt: "Some directors do more than just make great movies, they also change film history in the process through revolutionary techniques and bold narrative vision.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    readTime: "9 min read",
    content: [
      "Throughout the history of cinema, a rare tier of visionary directors has expanded the medium beyond mere entertainment. From Orson Welles' pioneering deep-focus photography in 'Citizen Kane' to Stanley Kubrick's perfectionist framing in '2001: A Space Odyssey,' cinema continually reinvents itself.",
      "In the modern era, auteurs like Steven Spielberg pioneered the summer blockbuster model, while Akira Kurosawa revolutionized editing pacing and multi-camera battle sequences that influenced generations of Western and Asian filmmakers alike.",
      "Today, as digital volume walls and generative virtual production tools become standard across Hollywood soundstages, directors like Denis Villeneuve and Christopher Nolan preserve the tactical weight of IMAX film while embracing 21st-century technological frontiers.",
    ],
  },
  {
    id: "art-3",
    title: "Collecting History: Iconic Hollywood Auctions",
    slug: "collecting-history",
    date: "2020-03-26",
    category: "Film Artifacts",
    author: {
      name: "Michael Manasseri",
      role: "Executive Curator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    excerpt: "An exploration into collectible film history, including the legendary Captain America hero costume sold at auction for $228,000 and the booming market for screen-used props.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    readTime: "7 min read",
    content: [
      "Film memorabilia has transformed from fan curiosities into one of the highest-yield asset classes in fine art collecting. Rare screen-used costumes, original shooting scripts, and key prop artifacts command multi-million dollar bidding wars at premier international auctions.",
      "A famous case in point is Chris Evans' original screen-worn Captain America hero costume from 'The First Avenger,' which fetched an extraordinary $228,000 at a high-profile Hollywood memorabilia event.",
      "As physical media gives way to digital streaming platforms like BIG STREAM, owning tangible pieces of film heritage connects collectors directly to the golden lineage of cinematic history.",
    ],
  },
];
