import { CategorySidebar } from "@/components/category-sidebar";
import { SortingControls } from "@/components/sorting-controls";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { Metadata } from "next";

const des =
  "A simple fake e-commerce store built with Next.js and Tailwind CSS";

export const metadata: Metadata = {
  title: {
    default: "Fake Store",
    template: "%s | Fake Store",
  },
  icons: {
    icon: "/fake-store.png",
  },
  description: des,
  openGraph: {
    title: "Fake Store",
    description: des,
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Fake Store",
    images: [
      {
        url: "/og/fake-store.png",
        width: 630,
        height: 630,
        alt: "Fake store",
      },
    ],
  },
};

async function CategorySidebarServerWrapper() {
  const categories = await unstable_cache(
    () => {
      return prisma.category.findMany({
        select: {
          name: true,
          slug: true,
        },
        orderBy: {
          name: "asc",
        },
      });
    },
    ["categories"],
    {
      tags: ["categories"],
      revalidate: 3600,
    }
  )();
  return <CategorySidebar categories={categories} />;
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto py-4">
      <div className="flex gap-8">
        <div className="w-[125px] flex-none">
          <Suspense fallback={<div className="w-[125px]">Loading...</div>}>
            <CategorySidebarServerWrapper />
          </Suspense>
        </div>
        <div className="flex-1">{children}</div>
        <div className="w-[125px] flex-none">
          <SortingControls />
        </div>
      </div>
    </main>
  );
}
