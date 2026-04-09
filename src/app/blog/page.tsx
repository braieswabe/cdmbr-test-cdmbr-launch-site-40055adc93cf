import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, Clock3, Search, Tag, TrendingUp } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical insights, strategy guides, and product thinking for teams that want to grow with clarity and confidence.",
};

const featuredPost = {
  title: "How to build a website that earns trust in the first 10 seconds",
  description:
    "A clear homepage does more than look polished. It helps visitors understand what you do, why it matters, and what to do next without friction.",
  date: "April 9, 2026",
  category: "Strategy",
  readTime: "8 min read",
};

const articles = [
  {
    title: "The 7-page structure that improves conversion on service websites",
    description:
      "A simple content framework for turning traffic into qualified inquiries with less guesswork and stronger messaging.",
    date: "April 4, 2026",
    category: "Conversion",
  },
  {
    title: "What to include on a pricing page when buyers are comparing options",
    description:
      "Reduce hesitation with transparent plans, clear outcomes, and proof that your offer is worth the investment.",
    date: "March 29, 2026",
    category: "Pricing",
  },
  {
    title: "How to write service descriptions that feel specific, not generic",
    description:
      "Use plain language, proof points, and outcome-focused copy to make your offer easier to understand.",
    date: "March 22, 2026",
    category: "Copywriting",
  },
  {
    title: "A practical guide to building trust with testimonials and case studies",
    description:
      "Learn how to present social proof so it answers objections and supports a confident buying decision.",
    date: "March 18, 2026",
    category: "Trust",
  },
  {
    title: "Why clear navigation matters more than clever design",
    description:
      "Good information architecture helps visitors find what they need faster and keeps them moving toward action.",
    date: "March 11, 2026",
    category: "UX",
  },
  {
    title: "How to create a blog that supports SEO without sounding robotic",
    description:
      "Publish useful content that answers real questions, earns search visibility, and reflects your expertise.",
    date: "March 5, 2026",
    category: "SEO",
  },
];

const categories = [
  { name: "Strategy", count: 12 },
  { name: "Conversion", count: 9 },
  { name: "SEO", count: 15 },
  { name: "Copywriting", count: 8 },
  { name: "UX", count: 11 },
  { name: "Trust", count: 6 },
];

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-4 sm:px-6 lg:grid-cols-[1.6fr_0.8fr] lg:px-8 lg:pb-24 lg:pt-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <TrendingUp className="h-4 w-4" />
              Insights for better websites and stronger growth
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical ideas for teams that want clearer messaging and better results.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Explore guides, frameworks, and examples that help you improve your website, sharpen your
              positioning, and make it easier for people to choose you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#articles"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary/40 hover:bg-secondary/40"
              >
                Browse articles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Search className="h-4 w-4" />
              Featured article
            </div>
            <div className="mt-5 space-y-4">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/30 to-muted/40" />
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                <Tag className="h-3.5 w-3.5" />
                {featuredPost.category}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">{featuredPost.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{featuredPost.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Request a content strategy call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
            <SectionHeading
              eyebrow="Topics"
              title="Find the right article faster"
              description="Browse by theme to focus on the questions that matter most to your team."
              className="mb-6"
            />
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href="/blog"
                  className="flex items-center justify-between rounded-2xl border border-border px-4 py-3 transition hover:border-primary/30 hover:bg-secondary/40"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">{category.count}</span>
                </Link>
              ))}
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow="Recent articles"
              title="Fresh thinking for better websites"
              description="Short, useful reads designed to help you make smarter decisions and move faster."
              className="mb-8"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <BlogCard
                  key={article.title}
                  icon={<Tag className="h-5 w-5" />}
                  title={article.title}
                  description={`${article.description} Published ${article.date} · ${article.category}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <NewsletterSignup
            heading="Get practical ideas in your inbox"
            description="Receive concise insights on messaging, conversion, and website strategy. No fluff, just useful guidance."
            placeholder="Enter your email address"
            buttonLabel="Subscribe"
            privacyNote="No spam. Unsubscribe anytime."
          />
        </div>
      </section>
    </main>
  );
}