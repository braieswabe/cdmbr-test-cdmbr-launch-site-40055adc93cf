import Link from "next/link";
"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Camera, Layers3, Sparkles, Store, Users } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImageGrid } from "@/components/ImageGrid";
import { ModalLightbox } from "@/components/ModalLightbox";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { Tabs } from "@/components/Tabs";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "studio-launch",
    title: "Studio launch campaign",
    description: "A polished visual system for a service brand introducing a new premium offer.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "team-session",
    title: "Team workshop day",
    description: "Behind-the-scenes moments from a strategy session focused on planning and alignment.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "product-detail",
    title: "Product detail shoot",
    description: "Clean product imagery designed to support ecommerce, ads, and landing pages.",
    category: "Products",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "workspace",
    title: "Workspace environment",
    description: "A bright, modern office setup that reflects a calm and focused working style.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "event-stage",
    title: "Event stage setup",
    description: "Lighting, signage, and stage composition for a polished live experience.",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "brand-still",
    title: "Brand still life",
    description: "Editorial-style imagery that adds texture and credibility to campaign pages.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "culture", label: "Culture" },
  { id: "products", label: "Products" },
  { id: "events", label: "Events" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(galleryItems[0]);

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return galleryItems;
    return galleryItems.filter((item) => item.category.toLowerCase() === activeTab);
  }, [activeTab]);

  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <Hero
        title="A visual gallery that shows the quality behind the work."
        subtitle="Explore brand moments, product imagery, and team environments that reflect a thoughtful, premium approach. Every image is chosen to support trust, clarity, and a stronger story."
        ctaLabel="Browse the gallery"
        ctaHref="#gallery"
        secondaryLabel="See related work"
        secondaryHref="/portfolio"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Filters"
          title="Browse by theme"
          description="Use the categories below to focus on the type of imagery you want to explore."
        />
        <div className="mt-8">
          <Tabs
            tabs={tabs}
            defaultTabId="all"
            onTabChange={setActiveTab}
            className="rounded-3xl border border-border bg-card p-2 shadow-sm"
            tabListClassName="gap-2"
            tabPanelClassName="pt-0"
          />
        </div>
      </section>

      <section id="gallery" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ImageGrid
            heading="Featured gallery"
            subheading="A curated set of images that communicate quality, consistency, and attention to detail."
            items={filteredItems.map((item) => ({
              title: item.title,
              description: item.description,
              image: item.image,
            }))}
            columns={3}
            className="rounded-3xl border border-border bg-background p-6 shadow-sm"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Selected image"
          title="View a closer look"
          description="Click a card to inspect the composition, lighting, and story behind the image."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <button
              type="button"
              onClick={() => setSelectedItem(filteredItems[0] ?? galleryItems[0])}
              className="block w-full text-left"
            >
              <img
                src={(selectedItem ?? filteredItems[0] ?? galleryItems[0]).image}
                alt={(selectedItem ?? filteredItems[0] ?? galleryItems[0]).title}
                className="h-[420px] w-full object-cover"
              />
            </button>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Gallery caption
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{(selectedItem ?? filteredItems[0] ?? galleryItems[0]).title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {(selectedItem ?? filteredItems[0] ?? galleryItems[0]).description}
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-primary" />
                Clean composition and natural light
              </p>
              <p className="flex items-center gap-2">
                <Layers3 className="h-4 w-4 text-primary" />
                Built to support web, social, and pitch decks
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Designed to make the brand feel credible and human
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            headline="Need imagery that supports your brand story?"
            description="We can help you plan a gallery, create a visual direction, and connect the right images to the right pages."
            buttonLabel="Start a project"
            buttonHref="/contact"
          />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Or explore more examples in the{" "}
            <Link href="/portfolio" className="font-medium text-primary underline-offset-4 hover:underline">
              portfolio
            </Link>
            .
          </div>
        </div>
      </section>
      <Footer />
      <ModalLightbox
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title ?? "Gallery image"}
        description={selectedItem?.description ?? ""}
      >
        <img
          src={selectedItem?.image ?? galleryItems[0].image}
          alt={selectedItem?.title ?? galleryItems[0].title}
          className="max-h-[70vh] w-full rounded-2xl object-cover"
        />
      </ModalLightbox>
    </main>
  );
}