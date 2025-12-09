// app/page.tsx
import Image from "next/image";
// import "./globals.css";

export default function MenuPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <header className="sticky top-0 z-20 bg-custom-background/80 backdrop-blur-sm shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* PageHeading */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div className="flex flex-col gap-1">
                <p className="text-custom-heading text-4xl font-black leading-tight tracking-tighter">
                  Our Menu
                </p>
                <p className="text-custom-body text-base font-normal leading-normal">
                  A curated selection of culinary excellence, crafted with the
                  finest ingredients.
                </p>
              </div>
              <div className="relative">
                <button className="flex items-center gap-2 rounded-lg border border-custom-border px-4 py-2 text-sm font-medium text-custom-heading hover:bg-gray-100">
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
            {/* Tabs */}
            <div className="border-b border-custom-border">
              <div className="flex gap-2">
                <a
                  className="flex flex-col items-center justify-center rounded-full bg-custom-primary px-4 py-2"
                  href="#"
                >
                  <p className="text-white text-sm font-bold leading-normal">
                    Appetizers
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center rounded-full px-4 py-2 text-custom-body hover:bg-gray-100"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal">
                    Soups &amp; Salads
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center rounded-full px-4 py-2 text-custom-body hover:bg-gray-100"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal">Mains</p>
                </a>
                <a
                  className="flex flex-col items-center justify-center rounded-full px-4 py-2 text-custom-body hover:bg-gray-100"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal">Desserts</p>
                </a>
                <a
                  className="flex flex-col items-center justify-center rounded-full px-4 py-2 text-custom-body hover:bg-gray-100"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal">Beverages</p>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1 lg:sticky lg:top-40 h-fit">
              <div className="space-y-8 rounded-lg border border-custom-border bg-white p-6 shadow-sm">
                {/* Veg/Non-Veg Toggle */}
                <div>
                  <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-gray-100 p-1">
                    <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:text-custom-heading text-custom-body text-sm font-medium leading-normal">
                      <span className="truncate">Veg</span>
                      <input
                        defaultChecked
                        className="invisible w-0"
                        name="dietary-toggle"
                        type="radio"
                        value="Veg"
                      />
                    </label>
                    <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:text-custom-heading text-custom-body text-sm font-medium leading-normal">
                      <span className="truncate">Non-Veg</span>
                      <input
                        className="invisible w-0"
                        name="dietary-toggle"
                        type="radio"
                        value="Non-Veg"
                      />
                    </label>
                  </div>
                </div>
                {/* Spicy Level Filter */}
                <div>
                  <h2 className="text-custom-heading text-lg font-bold leading-tight tracking-tight pb-3">
                    Spicy Level
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <button className="h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-custom-heading hover:bg-gray-200 outline-2 outline-offset-2 outline-custom-highlight focus:outline">
                      Mild
                    </button>
                    <button className="h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-custom-heading hover:bg-gray-200 outline-2 outline-offset-2 outline-custom-highlight focus:outline">
                      Medium
                    </button>
                    <button className="h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 px-4 text-sm font-medium text-custom-heading hover:bg-gray-200 outline-2 outline-offset-2 outline-custom-highlight focus:outline">
                      Hot
                    </button>
                  </div>
                </div>
                {/* Cuisine Filter */}
                <div>
                  <h2 className="text-custom-heading text-lg font-bold leading-tight tracking-tight pb-3">
                    Cuisine
                  </h2>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-custom-primary focus:ring-custom-primary/50"
                        type="checkbox"
                      />
                      <span className="text-custom-body">Italian</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-custom-primary focus:ring-custom-primary/50"
                        type="checkbox"
                      />
                      <span className="text-custom-body">Asian</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        className="h-4 w-4 rounded border-gray-300 text-custom-primary focus:ring-custom-primary/50"
                        type="checkbox"
                      />
                      <span className="text-custom-body">Continental</span>
                    </label>
                  </div>
                </div>
                {/* Price Range Slider */}
                <div>
                  <h2 className="text-custom-heading text-lg font-bold leading-tight tracking-tight pb-4">
                    Price Range
                  </h2>
                  <div className="relative h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="absolute h-2 rounded-full bg-custom-primary"
                      style={{ left: "20%", right: "40%" }}
                    ></div>
                    <div
                      className="absolute -top-1.5 h-5 w-5 cursor-pointer rounded-full border-2 border-custom-primary bg-white shadow"
                      style={{ left: "20%" }}
                    ></div>
                    <div
                      className="absolute -top-1.5 h-5 w-5 cursor-pointer rounded-full border-2 border-custom-primary bg-white shadow"
                      style={{ left: "60%" }}
                    ></div>
                  </div>
                  <div className="mt-3 flex justify-between text-sm text-custom-body">
                    <span>$10</span>
                    <span>$50</span>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-custom-primary py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02]">
                  Apply Filters
                </button>
              </div>
            </aside>
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Recommended Items Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-extrabold tracking-tight text-custom-highlight mb-6">
                  Recommended For You
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Recommended Dish Card 1 */}
                  <div className="group flex flex-col overflow-hidden rounded-lg border border-custom-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt="A delicious pizza with cheese and toppings"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMoIRydSn2VNEPi4pf2rTz0IHixV5f_kXeHaFoRKXzXwqCSF3HD3ouAt_Vnbnx_tmj6u3-b3qZ_BWUvW9GIvFFPxSLhhZhuqBRsOyHeYa7xO3QZ51EH9dsA2_Gf_zkHfP0SyKxh02VDTY8t6Pv2SvPBAsgW6hka6FGuZZWSInn7zrtHpO9ATgdHzIlMfvx9vdSxLX-TnEv095NqPd2SwoYPubgXFwDQBr60Ig_51UFpzMuSP9bJzIAb6on0Ti3EWxJGzMTMrVrsmS"
                        width={500}
                        height={256}
                      />
                      <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-custom-heading">
                        Margherita Extravaganza
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-custom-body">
                        Classic delight with San Marzano tomatoes, fresh
                        mozzarella, basil, and a drizzle of virgin olive oil.
                      </p>
                      <div className="mt-4 flex items-end justify-between">
                        <p className="text-2xl font-bold text-custom-highlight">
                          $22.50
                        </p>
                        <button className="rounded-lg bg-custom-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Recommended Dish Card 2 */}
                  <div className="group flex flex-col overflow-hidden rounded-lg border border-custom-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt="A gourmet salad in a white bowl"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2_6u091qZRwSu1UmkTf5EJS7xNLLiaGiYD8AbsLiDNWp7w19fIECycxvkFetS6hOQmk7aQiVhTek-CFEIct022n3fuLUxhsoTV3cIDQBLiaALlRk1_kvelPpq_0R4X_QqEFovcxhHDODz-VHy2_LHIzQA0w98JowZOMtOJigZNJMA4f_JA0dICrOh1Ue6cWo6oFWhk6Koix8a84FZ1a6fAGFCM4SwXvT2i822HQL5X9Erw1ixc7hbjqXHCWjEY5itceL_HlNIvTXV"
                        width={500}
                        height={256}
                      />
                      <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-custom-heading">
                        Orchard Garden Salad
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-custom-body">
                        A refreshing mix of seasonal greens, crisp apples,
                        candied walnuts, and a light vinaigrette.
                      </p>
                      <div className="mt-4 flex items-end justify-between">
                        <p className="text-2xl font-bold text-custom-highlight">
                          $18.00
                        </p>
                        <button className="rounded-lg bg-custom-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Main Menu Section */}
              <section>
                <h2 className="text-2xl font-extrabold tracking-tight text-custom-heading mb-6">
                  Appetizers
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Dish Card with Variants */}
                  <div className="group flex flex-col overflow-hidden rounded-lg border border-custom-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        className="h-56 w-full object-cover"
                        alt="A vibrant quinoa salad in a bowl"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVUBK3E8hqfTVe2bK5H2LkZvf8NPBy2G2oLRSLwfyULpR7vOZhUTMFnzTquedAZyfHdS4dqBzhnJvJS7-sKeBQB9wsdFO2m_9smZGu77VtjjESPXf5w6LqJDVZMRe6tpoLdGhi7s7GTyBoos_nMfVeWZPzdVbJsE7Hyg2XutEv3z1mFA0C6eOF4SDlfGcFHKobnuzvCrB_Bn4obBXjyr4VJHE_iFm6TDBs0_o1QXBBSFzB4xE47hPqLR5qtm1h4KCbdsTBI8aF4hz-"
                        width={500}
                        height={224}
                      />
                      <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-custom-heading">
                        Sunset Quinoa Bowl
                      </h3>
                      <p className="mt-1 text-sm text-custom-body">
                        A healthy and colorful mix of quinoa, roasted
                        vegetables, and avocado with a lemon-tahini dressing.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-custom-heading mb-2">
                          Size
                        </p>
                        <div className="flex gap-2">
                          <button className="rounded-full border border-custom-primary bg-custom-primary/10 px-3 py-1 text-xs font-medium text-custom-primary">
                            Regular
                          </button>
                          <button className="rounded-full border border-custom-border bg-transparent px-3 py-1 text-xs font-medium text-custom-body hover:bg-gray-100">
                            Large (+$2)
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xl font-bold text-custom-highlight">
                          $14.99
                        </p>
                        <div className="flex items-center gap-2">
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-custom-border text-custom-body hover:bg-gray-100">
                            -
                          </button>
                          <span className="w-6 text-center font-semibold">
                            1
                          </span>
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-custom-border text-custom-body hover:bg-gray-100">
                            +
                          </button>
                        </div>
                      </div>
                      <button className="mt-5 w-full rounded-lg bg-custom-primary py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02]">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  {/* Dish Card 2 */}
                  <div className="group flex flex-col overflow-hidden rounded-lg border border-custom-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        className="h-56 w-full object-cover"
                        alt="Bruschetta with tomatoes and basil"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAK8_NNbVoUA6o3KEr2GEhuxLXglZILDg5KjrBPrDbUsoLpb1iJnxijGkfLWt4VGlgvuDSsXbYo3sg3N9cE0fMi4LmaqowoxqG2qvSK5d2ptC_whLK-WpndDAoLoYDfOu04x-VvE27SzzE8cksPnc3kcSgCdjUL-EtnwauoIdOtPjjcYR96kRXsZp3VWZxYMFeVdBjljtETIODsdYmeFBP3akP4yCLsEMc1f5hd8OX5hayyzXRKw9gB6mJt574MZe-0Fg3Ha6jjZ3"
                        width={500}
                        height={224}
                      />
                      <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-green-600 bg-white">
                        <div className="h-4 w-4 rounded-full bg-green-600"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-custom-heading">
                        Classic Bruschetta
                      </h3>
                      <p className="mt-1 text-sm text-custom-body">
                        Toasted artisan bread topped with fresh diced tomatoes,
                        garlic, basil, and balsamic glaze.
                      </p>
                      <div className="mt-auto pt-4 flex items-end justify-between">
                        <p className="text-xl font-bold text-custom-highlight">
                          $12.00
                        </p>
                        <button className="rounded-lg bg-custom-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Dish Card 3 */}
                  <div className="group flex flex-col overflow-hidden rounded-lg border border-custom-border bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        className="h-56 w-full object-cover"
                        alt="Spaghetti with red sauce and basil"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXhlEsrXFAB-U6O3cSRXANd3cN47Oji8B6QKF3EXCUKKtBlJYK6UKKTtaKvx7ShiI7tWXz7Wx07Oh9O_TYLeOFx1GbnCEUcgB8Yf4cl8P11kmFxfUjNP5sIa74MgeUak7w_2acnacq9d7ABInVFXw3UhYswV8xAx9N5mDQifemkv7hNVw4EDFHzWzJw5PRfS-esvXHTjlEkU5HxNcZz7ZG7VVTmCq3VRwOoNG3GflaYPuuUPFhExvAEpPYBiq7izxfRSrufaJivmWQ"
                        width={500}
                        height={224}
                      />
                      <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-red-600 bg-white">
                        <div className="h-4 w-4 rounded-full bg-red-600"></div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-custom-heading">
                        Spicy Arrabbiata Penne
                      </h3>
                      <p className="mt-1 text-sm text-custom-body">
                        Penne pasta in a fiery tomato sauce with garlic, red
                        chili flakes, and fresh parsley.
                      </p>
                      <div className="mt-auto pt-4 flex items-end justify-between">
                        <p className="text-xl font-bold text-custom-highlight">
                          $19.50
                        </p>
                        <button className="rounded-lg bg-custom-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {/* Floating Cart Summary */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 p-4 sm:p-6">
        <div className="pointer-events-auto mx-auto w-full max-w-md">
          <div className="flex items-center justify-between gap-4 rounded-lg bg-custom-heading px-6 py-4 text-white shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="relative">
                <span className="material-symbols-outlined text-2xl">
                  shopping_bag
                </span>
                <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-custom-highlight text-xs font-bold text-custom-heading">
                  3
                </span>
              </span>
              <span className="font-semibold">3 items in your cart</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">$56.49</span>
              <button className="rounded-md bg-custom-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}