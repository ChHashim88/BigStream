export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export const CATEGORIES: Category[] = [
  { id: "cat-0", name: "All", slug: "all", description: "Explore the full Big Stream cinematic catalog.", count: 103 },
  { id: "cat-1", name: "Featured", slug: "featured", description: "Handpicked masterpieces and Big Stream Originals.", count: 11 },
  { id: "cat-2", name: "Recently Added", slug: "recently-added", description: "The freshest film premieres and festival additions.", count: 82 },
  { id: "cat-3", name: "History", slug: "history", description: "Historic wartime archives, classic documentaries, and restored vintage films.", count: 48 },
  { id: "cat-4", name: "Documentary", slug: "documentary", description: "Stories that explore real people, places, and paradigm-shifting ideas.", count: 67 },
  { id: "cat-5", name: "Horror", slug: "horror", description: "Chilling supernatural tales, gothic nightmares, and atmospheric dread.", count: 9 },
  { id: "cat-6", name: "Comedy", slug: "comedy", description: "Witty satires, romantic comedies, and side-splitting stand-up specials.", count: 16 },
  { id: "cat-7", name: "Drama", slug: "drama", description: "Deeply moving character studies, historical sagas, and human conflict.", count: 20 },
  { id: "cat-8", name: "Action", slug: "action", description: "Adrenaline-fueled setpieces, tactical thrillers, and explosive spectacles.", count: 4 },
  { id: "cat-9", name: "Thriller", slug: "thriller", description: "Edge-of-your-seat suspense, psychological mind-benders, and noir mysteries.", count: 6 },
  { id: "cat-10", name: "Romance", slug: "romance", description: "Captivating love stories, passionate drama, and timeless connections.", count: 9 },
  { id: "cat-11", name: "Sci-Fi", slug: "sci-fi", description: "Futuristic visions, artificial intelligence, and interstellar exploration.", count: 6 },
  { id: "cat-12", name: "Family", slug: "family", description: "Heartwarming, magical entertainment designed for all generations.", count: 6 },
  { id: "cat-13", name: "Special", slug: "special", description: "Restored color classics, backstage studio masterclasses, and exclusive technological showcases.", count: 5 },
  { id: "cat-14", name: "Adventure", slug: "adventure", description: "Wild wilderness odysseys, tropical expeditions, and high-seas quests.", count: 12 },
  { id: "cat-15", name: "World War I", slug: "world-war-one", description: "Authentic trench warfare newsreels, Western Front retrospectives, and 1914-1918 historical film archives.", count: 8 },
  { id: "cat-16", name: "World War II", slug: "world-war-two", description: "Academy Award-winning combat documentaries, Allied newsreels, and 1939-1945 Pacific and European theater archives.", count: 25 },
];
