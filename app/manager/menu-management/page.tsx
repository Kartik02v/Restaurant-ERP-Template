"use client";

import React from "react";

export default function MenuManagementPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-brand-text-light dark:text-brand-text-dark font-display">

      {/* Header */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl text-brand-text-light dark:text-brand-text-dark">
            restaurant_menu
          </span>
          <h1 className="text-xl font-bold tracking-tight">Menu Management</h1>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">

          {/* Searchbar */}
          <div className="relative hidden sm:block w-full max-w-xs">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-muted-light dark:text-brand-text-muted-dark">
              search
            </span>
            <input
              type="search"
              placeholder="Search dishes or categories..."
              className="form-input h-10 w-full rounded-lg border-none bg-brand-surface-light dark:bg-brand-surface-dark pl-10 pr-4 text-sm text-brand-text-light dark:text-brand-text-dark placeholder:text-brand-text-muted-light dark:placeholder:text-brand-text-muted-dark focus:ring-2 focus:ring-brand-orange/50"
            />
          </div>

          {/* Import */}
          <button className="hidden sm:flex h-10 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-brand-surface-light dark:bg-brand-surface-dark px-4 text-sm font-semibold hover:bg-brand-surface-light/80 dark:hover:bg-brand-surface-dark/80">
            <span className="material-symbols-outlined text-base">file_upload</span>
            Import
          </button>

          {/* Export */}
          <button className="hidden sm:flex h-10 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-brand-surface-light dark:bg-brand-surface-dark px-4 text-sm font-semibold hover:bg-brand-surface-light/80 dark:hover:bg-brand-surface-dark/80">
            <span className="material-symbols-outlined text-base">file_download</span>
            Export
          </button>

          {/* Publish */}
          <button className="flex h-10 min-w-[84px] items-center justify-center rounded-lg bg-brand-orange px-4 text-sm font-bold text-white shadow-sm hover:bg-brand-orange/90">
            Publish Changes
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1">
        <div className="flex w-full flex-col lg:flex-row">

          {/* LEFT SIDEBAR — CATEGORIES */}
          <aside className="w-full shrink-0 border-b border-brand-surface-light dark:border-brand-surface-dark lg:w-80 lg:border-b-0 lg:border-r">
            <div className="flex h-full flex-col justify-between p-4">

              <div>
                <h2 className="text-base font-semibold">Categories & Quick Filters</h2>

                {/* Category List */}
                <div className="mt-4 flex flex-col gap-1">

                  {/* Selected Category */}
                  <div className="group flex cursor-pointer items-center gap-3 rounded-lg bg-brand-gold/20 py-2 pl-2 pr-3 ring-2 ring-brand-gold">
                    <span className="material-symbols-outlined fill text-brand-text-light dark:text-brand-text-dark">
                      drag_indicator
                    </span>
                    <p className="flex-1 text-sm font-semibold">Appetizers</p>
                    <span className="text-xs font-medium text-brand-text-muted-light dark:text-brand-text-muted-dark">
                      12
                    </span>

                    <div className="flex items-center opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="p-1 text-brand-text-muted-light dark:text-brand-text-muted-dark hover:text-brand-text-light">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-1 text-brand-text-muted-light dark:text-brand-text-muted-dark hover:text-brand-text-light">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-1 text-brand-text-muted-light dark:text-brand-text-muted-dark hover:text-brand-text-light">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                      </button>
                    </div>
                  </div>

                  {/* Other categories */}
                  {["Main Courses", "Desserts", "Beverages"].map((cat) => (
                    <div
                      key={cat}
                      className="group flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 pr-3 hover:bg-brand-surface-light dark:hover:bg-brand-surface-dark"
                    >
                      <span className="material-symbols-outlined text-brand-text-muted-light dark:text-brand-text-muted-dark">
                        drag_indicator
                      </span>
                      <p className="flex-1 text-sm font-medium">{cat}</p>
                      <span className="text-xs font-medium text-brand-text-muted-light dark:text-brand-text-muted-dark">
                        {cat === "Main Courses" ? "25" : cat === "Desserts" ? "8" : "15"}
                      </span>

                      <div className="flex items-center opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="p-1 text-brand-text-muted-light hover:text-brand-text-light">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="p-1 text-brand-text-muted-light hover:text-brand-text-light">
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </button>
                        <button className="p-1 text-brand-text-muted-light hover:text-brand-text-light">
                          <span className="material-symbols-outlined text-lg">add_circle</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Category */}
              <div className="mt-4 flex flex-col gap-2">
                <button className="flex h-10 w-full items-center justify-center rounded-lg bg-brand-gold text-sm font-bold text-brand-burgundy shadow-sm hover:bg-brand-gold/90">
                  Add Category
                </button>

                <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-brand-text-muted-light hover:bg-brand-surface-light dark:hover:bg-brand-surface-dark">
                  <span className="material-symbols-outlined text-lg">keyboard_arrow_down</span>
                  Bulk actions
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: ITEMS */}
          <section className="flex-1 bg-brand-surface-light/50 dark:bg-brand-surface-dark/20 p-4 sm:p-6">

            {/* Toolbar */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">

                {/* Breadcrumbs */}
                <div className="flex items-center text-sm font-medium">
                  <a className="text-brand-text-muted-light hover:underline">Menu</a>
                  <span className="mx-2 text-brand-text-muted-light">/</span>
                  <span>Appetizers</span>
                </div>

                {/* View Toolbar */}
                <div className="flex items-center gap-2">
                  <button className="rounded-lg p-2 shadow-sm">
                    <span className="material-symbols-outlined">view_list</span>
                  </button>
                  <button className="rounded-lg p-2 text-brand-text-muted-light hover:bg-background-light">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>

                  <div className="h-6 w-px bg-brand-surface-light dark:bg-brand-surface-dark" />

                  <button className="rounded-lg p-2 text-brand-text-muted-light hover:bg-background-light">
                    <span className="material-symbols-outlined">swap_vert</span>
                  </button>

                  <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-brand-gold px-4 text-sm font-bold text-brand-burgundy shadow-sm hover:bg-brand-gold/90">
                    <span className="material-symbols-outlined fill text-base">add</span>
                    Add Dish
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {[ 
                  { label: "Veg", icon: "circle", color: "text-green-600" },
                  { label: "Non-Veg", icon: "circle", color: "text-red-600" },
                  { label: "Available", icon: "check_circle", color: "text-green-600" },
                  { label: "Out of Stock", icon: "cancel", color: "text-red-600" },
                ].map((chip) => (
                  <button
                    key={chip.label}
                    className="flex h-8 items-center gap-x-2 rounded-full bg-background-light dark:bg-brand-surface-dark px-3 text-sm font-medium ring-1 ring-brand-surface-light dark:ring-brand-surface-dark"
                  >
                    <span className={`material-symbols-outlined text-sm ${chip.color}`}>
                      {chip.icon}
                    </span>
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Items List */}
            <div className="mt-6 flow-root">
              <div className="divide-y divide-brand-surface-light dark:divide-brand-surface-dark rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark shadow-sm">

                {/* Header */}
                <div className="grid grid-cols-12 items-center gap-4 px-4 py-2 text-xs font-semibold uppercase text-brand-text-muted-light dark:text-brand-text-muted-dark">
                  <div className="col-span-6 sm:col-span-5">Dish</div>
                  <div className="col-span-3 hidden sm:block">Tags</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 sm:col-span-1 text-center">Status</div>
                  <div className="col-span-2 sm:col-span-1 text-right">Actions</div>
                </div>

                {/* One Example Item */}
                {[{
                  name: "Bruschetta",
                  desc: "Grilled bread with tomatoes, garlic, and olive oil.",
                  price: "$8.99",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAe2UywU05M0Dtu0-bsWgjZR6myHA4C1WueO4mMT12YdHh2Q13IXtklL73y5iZLZRyIA0L92-nYsJc2i6C1VtptC4x4sQkBl6iNyFVdpqD0GaHtOa6Sdmt4I6Hkyan4Q_hk2P3VwXFOODRW20bAJBGw90LUA3e4ufmYk2H7lGX_3Zq5LLKJjaD1OQfv1Wyj1VkysVF1X2H8CMcpMtSn52vtowPwbmTHyPYS3Yj5cfx58B-VzNBr_IsMaj20aGsTun_6kevcAfRC9Yjm",
                  tags: ["Chef's Special"],
                }].map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 items-center gap-4 p-4 hover:bg-brand-surface-light/50 dark:hover:bg-brand-surface-dark/40"
                  >
                    {/* Dish Info */}
                    <div className="col-span-6 sm:col-span-5 flex items-center gap-4">
                      <div
                        className="size-12 shrink-0 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm text-green-600">
                            circle
                          </span>
                          <p className="font-semibold">{item.name}</p>
                        </div>
                        <p className="text-xs text-brand-text-muted-light dark:text-brand-text-muted-dark truncate">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="col-span-3 hidden sm:flex flex-wrap gap-1">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-brand-gold/20 px-2 py-0.5 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-right font-medium">{item.price}</div>

                    {/* Stock Toggle */}
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white peer-checked:bg-brand-orange peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 sm:col-span-1 flex justify-end gap-1">
                      <button className="p-2 text-brand-text-muted-light hover:text-brand-text-light">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-2 text-brand-text-muted-light hover:text-brand-text-light">
                        <span className="material-symbols-outlined text-lg">content_copy</span>
                      </button>
                      <button className="p-2 text-brand-text-muted-light hover:text-brand-burgundy">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
