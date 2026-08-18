export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
};

/** Metadata for each MDX post under src/app/blog/<slug>/page.mdx.
 * Kept as a small hand-maintained index rather than a content-layer
 * build step, since three posts doesn't yet justify that tooling. */
export const blogPosts: BlogPost[] = [
  {
    slug: "why-education-comes-first",
    title: "Why Education Comes First",
    date: "2026-06-02",
    excerpt:
      "Handing someone a financial tool without the education to go with it isn't opportunity — it's risk. Here's why every CeloHT program starts with a classroom, not an app.",
    author: "CeloHT Team",
  },
  {
    slug: "choosing-celo",
    title: "Why We Chose Celo",
    date: "2026-05-14",
    excerpt:
      "Mobile-first design, low transaction fees, and a stablecoin built for everyday use — the specific, practical reasons behind CeloHT's technical foundation.",
    author: "CeloHT Team",
  },
  {
    slug: "reforestation-as-infrastructure",
    title: "Reforestation as Infrastructure, Not an Afterthought",
    date: "2026-04-20",
    excerpt:
      "We treat land the same way we treat financial access: as infrastructure a community needs, not a side project funded when convenient.",
    author: "CeloHT Team",
  },
];
