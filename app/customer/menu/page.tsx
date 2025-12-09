// app/customer/menupage.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import MenuItemsList from "../MenuItemsList"; // 👈 IMPORTED NEW COMPONENT

export default function MenuPage() {
  // 1. STATE: Manage the currently active category for filtering
  // Changed default to "Starters" to match the first item in the array
  const [activeCategory, setActiveCategory] = useState("Starters");

  // 2. DATA: Define the menu categories (used for rendering tabs)
  const categories = [
    "Starters",
    "Main Course",
    "Desserts",
    "Specials",
    "Beverages",
  ];

  const getTabClasses = (category: string) => {
    const isActive = category === activeCategory;
    const baseClasses =
      "flex flex-col items-center justify-center rounded-full px-4 py-2 text-sm font-bold leading-normal transition-colors duration-200";

    return isActive
      ? `${baseClasses} bg-orange-600 text-white dark:bg-orange-500 dark:text-gray-900`
      : `${baseClasses} text-body hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800`;
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-gray-900/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* PageHeading */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div className="flex flex-col gap-1">
                <p className="text-heading text-4xl font-black leading-tight tracking-tighter dark:text-white">
                  Our Menu
                </p>
                <p className="text-body text-base font-normal leading-normal dark:text-gray-400">
                  A curated selection of culinary excellence, crafted with the
                  finest ingredients.
                </p>
              </div>
              <div className="relative">
                
              </div>
            </div>
            {/* Tabs (Clickable for Filtering) */}
            <div className="border-b border-gray-300 dark:border-gray-700">
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={getTabClasses(category)}
                    // 4. ACTION: Set the active category on click
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar - Content Omitted for brevity */}

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* 5. PASS ACTIVE CATEGORY TO NEW COMPONENT */}
              <MenuItemsList activeCategory={activeCategory} />
            </div>
          </div>
        </main>
      </div>
      {/* Floating Cart Summary */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-4 sm:p-6">
        <div className="pointer-events-auto mx-auto w-full max-w-md">
          <div className="flex items-center justify-between gap-4 rounded-lg bg-heading px-6 py-4 text-white shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="relative">
                <span className="material-symbols-outlined text-2xl">
                  shopping_bag
                </span>
                <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-highlight text-xs font-bold text-heading dark:text-gray-900">
                  3
                </span>
              </span>
              <span className="font-semibold dark:text-gray-200">
                3 items in your cart
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold dark:text-gray-200">$56.49</span>
              <button className="rounded-md bg-orange-600 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-orange-500 dark:text-gray-900">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}