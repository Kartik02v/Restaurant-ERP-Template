// app/customer/MenuItemsList.tsx
"use client";

import React from "react";
import Image from "next/image";

// --- TYPE DEFINITIONS FOR CLARITY ---
type Variant = {
  name: string;
  priceModifier: number;
  isDefault: boolean;
};

type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: string;
  isRecommended: boolean;
  basePrice: number;
  imageSrc: string;
  isVegetarian: boolean;
  isSpicy: boolean;
  variantLabel: string;
  variants: Variant[];
};

// --- MOCK MENU DATA FOR ALL CATEGORIES (INDIAN CUISINE) ---
const FULL_MENU_DATA: MenuItem[] = [
  // --- STARTERS ---
  {
    id: 101,
    name: "Aloo Tikki Chaat",
    description:
      "Crispy potato patties topped with yogurt, tamarind and mint chutneys, and savory spices.",
    category: "Starters",
    isRecommended: true,
    basePrice: 8.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: true,
    variantLabel: "Toppings",
    variants: [
      { name: "Yogurt & Chutney", priceModifier: 0, isDefault: true },
      { name: "Extra Sev (Noodles)", priceModifier: 1.5, isDefault: false },
    ],
  },
  {
    id: 102,
    name: "Samosa (2 Pcs)",
    description:
      "Crispy fried pastry filled with spiced potatoes, peas, and served with mint chutney.",
    category: "Starters",
    isRecommended: false,
    basePrice: 6.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Filling",
    variants: [
      { name: "Vegetable", priceModifier: 0, isDefault: true },
      { name: "Chicken (Non-Veg)", priceModifier: 2.0, isDefault: false },
    ],
  },
  {
    id: 103,
    name: "Tandoori Chicken Tikka",
    description:
      "Boneless chicken pieces marinated in yogurt and spices, roasted in a clay oven.",
    category: "Starters",
    isRecommended: true,
    basePrice: 14.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: false,
    isSpicy: true,
    variantLabel: "Portion",
    variants: [
      { name: "Small (4 pcs)", priceModifier: 0, isDefault: true },
      { name: "Large (8 pcs)", priceModifier: 10.0, isDefault: false },
    ],
  },

  // --- MAIN COURSE ---
  {
    id: 201,
    name: "Butter Chicken (Murgh Makhani)",
    description:
      "Tender chicken cooked in a rich, creamy, tomato-based sauce with butter and mild spices.",
    category: "Main Course",
    isRecommended: true,
    basePrice: 21.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: false,
    isSpicy: false,
    variantLabel: "Accompaniment",
    variants: [
      { name: "Basmati Rice", priceModifier: 0, isDefault: true },
      { name: "Garlic Naan (+$2.00)", priceModifier: 2.0, isDefault: false },
    ],
  },
  {
    id: 202,
    name: "Palak Paneer",
    description:
      "Fresh spinach purée cooked with cubes of soft Indian cottage cheese (paneer) and spices.",
    category: "Main Course",
    isRecommended: false,
    basePrice: 18.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Spice Level",
    variants: [
      { name: "Mild", priceModifier: 0, isDefault: true },
      { name: "Medium", priceModifier: 0, isDefault: false },
      { name: "Hot", priceModifier: 1.0, isDefault: false },
    ],
  },
  {
    id: 203,
    name: "Lamb Rogan Josh",
    description:
      "Aromatic Kashmiri lamb curry cooked with a blend of intense spices and yogurt.",
    category: "Main Course",
    isRecommended: true,
    basePrice: 24.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: false,
    isSpicy: true,
    variantLabel: "Portion Size",
    variants: [
      { name: "Regular", priceModifier: 0, isDefault: true },
      { name: "Family", priceModifier: 15.0, isDefault: false },
    ],
  },
  {
    id: 204,
    name: "Dal Makhani",
    description:
      "Slow-cooked black lentils and kidney beans simmered in a creamy, buttery tomato sauce.",
    category: "Main Course",
    isRecommended: false,
    basePrice: 16.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Preparation",
    variants: [
      { name: "Classic Creamy", priceModifier: 0, isDefault: true },
      { name: "Vegan (No Cream)", priceModifier: 0, isDefault: false },
    ],
  },

  // --- BREADS & RICE ---
  {
    id: 401,
    name: "Plain Naan",
    description: "Soft, leavened flatbread baked in the tandoor.",
    category: "Breads & Rice",
    isRecommended: false,
    basePrice: 3.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Quantity",
    variants: [
      { name: "1 Piece", priceModifier: 0, isDefault: true },
      { name: "3 Pieces", priceModifier: 5.0, isDefault: false },
    ],
  },
  {
    id: 402,
    name: "Jeera Rice",
    description: "Fragrant Basmati rice sautéed with cumin seeds and a touch of butter.",
    category: "Breads & Rice",
    isRecommended: true,
    basePrice: 5.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Size",
    variants: [
      { name: "Small", priceModifier: 0, isDefault: true },
      { name: "Large", priceModifier: 3.5, isDefault: false },
    ],
  },
  {
    id: 403,
    name: "Vegetable Biryani",
    description:
      "Aromatic Basmati rice dish cooked with mixed vegetables, yogurt, and whole spices.",
    category: "Breads & Rice",
    isRecommended: true,
    basePrice: 17.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: true,
    variantLabel: "Side Raita",
    variants: [
      { name: "Plain", priceModifier: 0, isDefault: true },
      {
        name: "Boondi Raita (Yogurt Dip)",
        priceModifier: 2.5,
        isDefault: false,
      },
    ],
  },

  // --- DESSERTS ---
  {
    id: 301,
    name: "Gulab Jamun",
    description:
      "Deep-fried milk solids (khoya) dumplings soaked in a rose-flavored sugar syrup.",
    category: "Desserts",
    isRecommended: true,
    basePrice: 7.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Serving",
    variants: [
      { name: "2 Pieces", priceModifier: 0, isDefault: true },
      { name: "4 Pieces", priceModifier: 6.0, isDefault: false },
    ],
  },
  {
    id: 302,
    name: "Ras Malai",
    description:
      "Spongy cottage cheese patties soaked in thickened, sweetened, and flavored milk.",
    category: "Desserts",
    isRecommended: false,
    basePrice: 8.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Flavor",
    variants: [
      { name: "Cardamom", priceModifier: 0, isDefault: true },
      { name: "Pistachio", priceModifier: 1.0, isDefault: false },
    ],
  },

  // --- BEVERAGES ---
  {
    id: 501,
    name: "Masala Chai",
    description: "Traditional Indian hot tea brewed with aromatic spices and milk.",
    category: "Beverages",
    isRecommended: true,
    basePrice: 4.0,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Sweetness",
    variants: [
      { name: "Standard", priceModifier: 0, isDefault: true },
      { name: "Less Sweet", priceModifier: 0, isDefault: false },
      { name: "Extra Sweet", priceModifier: 0.5, isDefault: false },
    ],
  },
  {
    id: 502,
    name: "Sweet Lassi",
    description:
      "A creamy, refreshing drink made from blended yogurt, water, spices, and sugar.",
    category: "Beverages",
    isRecommended: false,
    basePrice: 5.5,
    imageSrc:
      "", // FIX: Clean string definition
    isVegetarian: true,
    isSpicy: false,
    variantLabel: "Type",
    variants: [
      { name: "Sweet", priceModifier: 0, isDefault: true },
      { name: "Salted (Chaas)", priceModifier: 0, isDefault: false },
    ],
  },
];

// --- SUB-COMPONENT FOR RENDERING A SINGLE DISH CARD ---
const DishCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const priceDisplay = (price: number) => `$${price.toFixed(2)}`;

  const vegMarkerClasses = item.isVegetarian
    ? "border-green-600 bg-white dark:bg-gray-800"
    : "border-red-600 bg-white dark:bg-gray-800";
  const innerMarkerClasses = item.isVegetarian ? "bg-green-600" : "bg-red-600";

  const basePrice = item.basePrice;
  const defaultVariant = item.variants.find((v) => v.isDefault);
  const displayPrice = basePrice + (defaultVariant?.priceModifier || 0);

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          className="h-56 w-full object-cover"
          alt={item.name}
          src={item.imageSrc} 
          width={500}
          height={224}
        />
        <div
          className={`absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border ${vegMarkerClasses}`}
        >
          <div className={`h-4 w-4 rounded-full ${innerMarkerClasses}`} />
        </div>
        {item.isRecommended && (
          <div className="absolute right-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-gray-900 shadow-md">
            Chef&apos;s Pick ⭐
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-heading dark:text-gray-200">
          {item.name}
          {item.isSpicy && " 🌶️"}
        </h3>
        <p className="mt-1 text-sm text-body dark:text-gray-400">
          {item.description}
        </p>

        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-heading dark:text-gray-200">
            {item.variantLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.variants.map((variant) => {
              const isActive = variant.isDefault;
              const priceText =
                variant.priceModifier > 0
                  ? ` (+$${variant.priceModifier.toFixed(2)})`
                  : "";

              const variantClasses = isActive
                ? "rounded-full border border-orange-600 bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-600 dark:border-orange-500 dark:bg-orange-500/20 dark:text-orange-500"
                : "rounded-full border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700";

              return (
                <button
                  key={variant.name}
                  type="button"
                  className={variantClasses}
                >
                  {variant.name}
                  {priceText}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-highlight dark:text-highlight">
            {priceDisplay(displayPrice)}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              -
            </button>
            <span className="w-6 text-center font-semibold dark:text-gray-200">
              1
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-body hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-orange-600 py-2.5 text-center text-sm font-bold text-white shadow-sm transition-transform hover:scale-[1.02] dark:bg-orange-500 dark:text-gray-900"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// --- MAIN MENU ITEMS LIST COMPONENT ---
interface MenuItemsListProps {
  activeCategory: string;
}

export default function MenuItemsList({ activeCategory }: MenuItemsListProps) {
  const filteredItems = FULL_MENU_DATA.filter(
    (item) => item.category === activeCategory
  );

  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 py-20 text-center dark:border-gray-700 dark:bg-gray-800/50">
        <p className="text-xl font-semibold text-heading dark:text-gray-200">
          No items in &quot;{activeCategory}&quot;
        </p>
        <p className="mt-2 text-body dark:text-gray-400">
          Please check back later, or select another category.
        </p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-heading dark:text-white">
        {activeCategory} 🇮🇳
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredItems.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}