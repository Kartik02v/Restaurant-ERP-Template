import Image from "next/image";

const dishes = [
  {
    name: "Quinoa Power Bowl",
    description: "A healthy mix of quinoa, avocado, cherry tomatoes, and greens.",
    price: "$18.50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD11OZjJO-8jSHP8317TbNTyPOMV5hprMVbpVM8KQjO-LXbIk0HQSCb13aXLWxlSpsziV694tj_FFM7KXHueLuZHivhVm_ltLL7Efzw0T3LvTQuD4tiy-R4A3cFtPpQe4O3OlK6HlJpiwi8cMkCwJ87MWg4gKytavDZ7PvQLW0-_MaaVAPt7PTLu7T7obUpMsgujcezaG77WEQTGo7_pyHaW3cansOVI_pU8UAuG-lJJODLSQyxOewj2GW3aPQqpxN206p4G5n56c8D",
    alt: "A fresh quinoa salad bowl",
  },
  {
    name: "Margherita Pizza",
    description: "Classic Neapolitan pizza with fresh mozzarella and basil.",
    price: "$22.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD82J4GmaPjuCdrpXorqtLU27QhOuBLvE8HHEW91Q9v7zyQIZSEWyTlj9T4cEFPVfJaTA-dEzDmvZa5kSTJOX2D0lN3UcWj48jUU-s_LS8NagrT8ybU5cPklKsHFy1wS51aaSkEuIW4ZWvz_WITlYxbR8qSQvXdQsPsk33t9wO3lUpJ8m5RWlBiQHnq4RoxOKH_rjk_Qwv_M8AVf9anE7Q6m1czXKUwlBlxxeNGt2sRo3LKiPvfEZ_tE6G8qH-jKO04n2LSGrImVwB",
    alt: "A delicious wood-fired pizza",
  },
  {
    name: "Berry Pancakes",
    description: "Fluffy pancakes topped with fresh berries and maple syrup.",
    price: "$16.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWXi7-x3TzzMcQahES5Xpp3Rivg4s3dux1exIa0QiLnquNuuJvwu2c0FlgKK66dCLynvF70j2edjaSc8FDMwMwPpLBQVCqJgWa2UwZ_508YsEU7Xj0UlyXYFXcW003RA2bDiZx8fachXACZarylK5eCxNnYcO4D8ot-ojKX6XwdLGucbCwCUqK_vwmpb0XoG6120GvoPWB22hjI5RwF1ci6APdMvFciWLXsyL9rc-Oyo9h5nfRsQFRc1BqYR0u9m5nG3BuhKtSYf-i",
    alt: "A stack of fluffy pancakes with syrup",
  },
];

export default function BestSellingDishes() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-widest text-heading dark:text-white">
          Best-Selling Dishes
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-2xl dark:bg-gray-800"
            >
              <Image
                className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                src={dish.image}
                alt={dish.alt}
                width={400}
                height={240}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase text-heading dark:text-gray-200">
                  {dish.name}
                </h3>
                <p className="mt-2 text-body dark:text-gray-400">
                  {dish.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary dark:text-highlight">
                    {dish.price}
                  </span>
                  <button 
                    className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white dark:bg-highlight/20 dark:text-highlight dark:hover:bg-highlight dark:hover:text-heading"
                    aria-label="Add to cart"
                  >
                    <span 
                      className="material-symbols-outlined text-xl"
                      style={{ fontFamily: 'Material Symbols Outlined' }}
                    >
                      add_shopping_cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

