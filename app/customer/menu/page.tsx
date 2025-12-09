// app/customer/menu/page.tsx
"use client"; // 👈 MARKED AS CLIENT COMPONENT
import { useState } from "react"; // 👈 IMPORTED useState hook
import Image from "next/image";

export default function MenuPage() {
  // 1. STATE: Manage the currently active category for filtering
  const [activeCategory, setActiveCategory] = useState("Appetizers");

  // 2. DATA: Define the menu categories (can be used for rendering tabs)
  const categories = [
    "Starters",
    "Main Course",
    "Desserts",
    "Specials",
    "Beverages",
  ];

  // 3. Conditional Content: Only shows the content if 'Appetizers' is the active category
  const renderAppetizersContent = activeCategory === "Appetizers";

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
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-heading hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                  <span className="material-symbols-outlined text-lg">
                    storefront
                  </span>
                  <span>Main Street Branch</span>
                  <span className="material-symbols-outlined text-lg">
                    expand_more
                  </span>
                </button>
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
              {/* 5. CONDITIONAL RENDERING: Only show content if 'Appetizers' is selected */}
              {renderAppetizersContent && (
                <>
                  {/* Recommended Items Section */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-extrabold tracking-tight text-highlight mb-6 dark:text-highlight">
                      Recommended For You
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Recommended Dish Card 1 (Margherita Extravaganza) */}
                      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            className="h-56 w-full object-cover"
                            alt="A delicious pizza with cheese and toppings"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMoIRydSn2VNEPi4pf2rTz0IHixV5f_kXeHaFoRKXzXwqCSF3HD3ouAt_Vnbnx_tmj6u3-b3qZ_BWUvW9GIvFFPxSLhhZhuqBRsOyHeYa7xO3QZ51EH9dsA2_Gf_zkHfP0SyKxh02VDTY8t6Pv2SvPBAsgW6hka6FGuZZWSInn7zrtHpO9ATgdHzIlMfvx9vdSxLX-TnEv095NqPd2SwoYPubgXFwDQBr60Ig_51UFpzMuSP9bJzIAb6on0Ti3EWxJGzMTMrVrsmS"
                            width={500}
                            height={224}
                          />
                          <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white dark:bg-gray-800">
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-heading dark:text-gray-200">
                            Margherita Extravaganza
                          </h3>
                          <p className="mt-1 text-sm text-body dark:text-gray-400">
                            Classic delight with San Marzano tomatoes, fresh
                            mozzarella, basil, and a drizzle of virgin olive
                            oil.
                          </p>
                          {/* --- Added Size Variants --- */}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-heading mb-2 dark:text-gray-200">
                              Size
                            </p>
                            <div className="flex gap-2">
                              <button className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500">
                                Small
                              </button>
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                Large (+$5)
                              </button>
                            </div>
                          </div>
                          {/* --- Quantity Selector --- */}
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-xl font-bold text-highlight dark:text-highlight">
                              $22.50
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                -
                              </button>
                              <span className="w-6 text-center font-semibold dark:text-gray-200">
                                1
                              </span>
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                +
                              </button>
                            </div>
                          </div>
                          {/* --- Full Width Add to Cart Button --- */}
                          <button className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      {/* Recommended Dish Card 2 (Orchard Garden Salad) */}
                      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            className="h-56 w-full object-cover"
                            alt="A gourmet salad in a white bowl"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2_6u091qZRwSu1UmkTf5EJS7xNLLiaGiYD8AbsLiDNWp7w19fIECycxvkFetS6hOQmk7aQiVhTek-CFEIct022n3fuLUxhsoTV3cIDQBLiaALlRk1_kvelPpq_0R4X_QqEFovcxhHDODz-VHy2_LHIzQA0w98JowZOMtOJigZNJMA4f_JA0dICrOh1Ue6cWo6oFWhk6Koix8a84FZ1a6fAGFCM4SwXvT2i822HQL5X9Erw1ixc7hbjqXHCWjEY5itceL_HlNIvTXV"
                            width={500}
                            height={224}
                          />
                          <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white dark:bg-gray-800">
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-heading dark:text-gray-200">
                            Orchard Garden Salad
                          </h3>
                          <p className="mt-1 text-sm text-body dark:text-gray-400">
                            A refreshing mix of seasonal greens, crisp apples,
                            candied walnuts, and a light vinaigrette.
                          </p>
                          {/* --- Added Size Variants --- */}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-heading mb-2 dark:text-gray-200">
                              Size
                            </p>
                            <div className="flex gap-2">
                              <button className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500">
                                Half
                              </button>
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                Full (+$6)
                              </button>
                            </div>
                          </div>
                          {/* --- Quantity Selector --- */}
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-xl font-bold text-highlight dark:text-highlight">
                              $18.00
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                -
                              </button>
                              <span className="w-6 text-center font-semibold dark:text-gray-200">
                                1
                              </span>
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                +
                              </button>
                            </div>
                          </div>
                          {/* --- Full Width Add to Cart Button --- */}
                          <button className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Main Menu Section */}
                  <section>
                    <h2 className="text-2xl font-extrabold tracking-tight text-heading mb-6 dark:text-white">
                      Appetizers
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {/* Dish Card with Variants (Sunset Quinoa Bowl - Base style) */}
                      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            className="h-56 w-full object-cover"
                            alt="A vibrant quinoa salad in a bowl"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVUBK3E8hqfTVe2bK5H2LkZvf8NPBy2G2oLRSLwfyULpR7vOZhUTMFnzTquedAZyfHdS4dqBzhnJvJS7-sKeBQB9wsdFO2m_9smZGu77VtjjESPXf5w6LqJDVZMRe6tpoLdGhi7s7GTyBoos_nMfVeWZPzdVbJsE7Hyg2XutEv3z1mFA0C6eOF4SDlfGcFHKobnuzvCrB_Bn4obBXjyr4VJHE_iFm6TDBs0_o1QXBBSFzB4xE47hPqLR5qtm1h4KCbdsTBI8aF4hz-"
                            width={500}
                            height={224}
                          />
                          <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white dark:bg-gray-800">
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-heading dark:text-gray-200">
                            Sunset Quinoa Bowl
                          </h3>
                          <p className="mt-1 text-sm text-body dark:text-gray-400">
                            A healthy and colorful mix of quinoa, roasted
                            vegetables, and avocado with a lemon-tahini
                            dressing.
                          </p>
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-heading mb-2 dark:text-gray-200">
                              Size
                            </p>
                            <div className="flex gap-2">
                              <button className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500">
                                Regular
                              </button>
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                Large (+$2)
                              </button>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-xl font-bold text-highlight dark:text-highlight">
                              $14.99
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                -
                              </button>
                              <span className="w-6 text-center font-semibold dark:text-gray-200">
                                1
                              </span>
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                +
                              </button>
                            </div>
                          </div>
                          <button className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      {/* Dish Card 2 (Classic Bruschetta) */}
                      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            className="h-56 w-full object-cover"
                            alt="Bruschetta with tomatoes and basil"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAK8_NNbVoUA6o3KEr2GEhuxLXglZILDg5KjrBPrDbUsoLpb1iJnxijGkfLWt4VGlgvuDSsXbYo3sg3N9cE0fMi4LmaqowoxqG2qvSK5d2ptC_whLK-WpndDAoLoYDfOu04x-VvE27SzzE8cksPnc3kcSgCdjUL-EtnwauoIdOtPjjcYR96kRXsZp3VWZxYMFeVdBjljtETIODsdYmeFBP3akP4yCLsEMc1f5hd8OX5hayyzXRKw9gB6mJt574MZe-0Fg3Ha6jjZ3"
                            width={500}
                            height={224}
                          />
                          <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white dark:bg-gray-800">
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-heading dark:text-gray-200">
                            Classic Bruschetta
                          </h3>
                          <p className="mt-1 text-sm text-body dark:text-gray-400">
                            Toasted artisan bread topped with fresh diced
                            tomatoes, garlic, basil, and balsamic glaze.
                          </p>
                          {/* --- Added Size Variants --- */}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-heading mb-2 dark:text-gray-200">
                              Portion
                            </p>
                            <div className="flex gap-2">
                              <button className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500">
                                4 Pieces
                              </button>
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                8 Pieces (+$8)
                              </button>
                            </div>
                          </div>
                          {/* --- Quantity Selector --- */}
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-xl font-bold text-highlight dark:text-highlight">
                              $12.00
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                -
                              </button>
                              <span className="w-6 text-center font-semibold dark:text-gray-200">
                                1
                              </span>
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                +
                              </button>
                            </div>
                          </div>
                          {/* --- Full Width Add to Cart Button --- */}
                          <button className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      {/* Dish Card 3 (Spicy Arrabbiata Penne) */}
                      <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            className="h-56 w-full object-cover"
                            alt="Spaghetti with red sauce and basil"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXhlEsrXFAB-U6O3cSRXANd3cN47Oji8B6QKF3EXCUKKtBlJYK6UKKTtaKvx7ShiI7tWXz7Wx07Oh9O_TYLeOFx1GbnCEUcgB8Yf4cl8P11kmFxfUjNP5sIa74MgeUak7w_2acnacq9d7ABInVFXw3UhYswV8xAx9N5mDQifemkv7hNVw4EDFHzWzJw5PRfS-esvXHTjlEkU5HxNcZz7ZG7VVTmCq3VRwOoNG3GflaYPuuUPFhExvAEpPYBiq7izxfRSrufaJivmWQ"
                            width={500}
                            height={224}
                          />
                          <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-red-600 bg-white dark:bg-gray-800">
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-heading dark:text-gray-200">
                            Spicy Arrabbiata Penne
                          </h3>
                          <p className="mt-1 text-sm text-body dark:text-gray-400">
                            Penne pasta in a fiery tomato sauce with garlic, red
                            chili flakes, and fresh parsley.
                          </p>
                          {/* --- Added Size Variants --- */}
                          <div className="mt-4">
                            <p className="text-sm font-semibold text-heading mb-2 dark:text-gray-200">
                              Heat Level
                            </p>
                            <div className="flex gap-2">
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                Mild
                              </button>
                              <button className="rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500">
                                Spicy
                              </button>
                              <button className="rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                Inferno (+$1)
                              </button>
                            </div>
                          </div>
                          {/* --- Quantity Selector --- */}
                          <div className="mt-4 flex items-center justify-between">
                            <p className="text-xl font-bold text-highlight dark:text-highlight">
                              $19.50
                            </p>
                            <div className="flex items-center gap-2">
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                -
                              </button>
                              <span className="w-6 text-center font-semibold dark:text-gray-200">
                                1
                              </span>
                              <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
                                +
                              </button>
                            </div>
                          </div>
                          {/* --- Full Width Add to Cart Button --- */}
                          <button className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}
              {/* Message for non-Appetizer sections */}
              {!renderAppetizersContent && (
                <div className="flex flex-col items-center justify-center py-20 text-center border border-gray-300 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-xl font-semibold text-heading dark:text-gray-200">
                    No items in "{activeCategory}"
                  </p>
                  <p className="mt-2 text-body dark:text-gray-400">
                    Please check back later, or select another category.
                  </p>
                </div>
              )}
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