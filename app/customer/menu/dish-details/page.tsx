'use client';

import React, { useState } from 'react';
// FIX: We cast the imported components to 'any' to resolve the TypeScript error
// related to 'ForwardRefExoticComponent' not being a valid JSX element type
// in some Next.js/React environments.
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const MinusIcon = Minus as any;
const PlusIcon = Plus as any;
const ShoppingCartIcon = ShoppingCart as any;

export default function DishDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [portion, setPortion] = useState<'regular' | 'large'>('regular');
  const [extraParmesan, setExtraParmesan] = useState(false);
  const [truffleOil, setTruffleOil] = useState(false);

  const basePrice = 1250;
  const portionPrice = portion === 'large' ? 300 : 0;
  const extrasPrice = (extraParmesan ? 80 : 0) + (truffleOil ? 150 : 0);
  const totalPrice = (basePrice + portionPrice + extrasPrice) * quantity;

  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FDFBF5] font-['Be_Vietnam_Pro',sans-serif]">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-[1400px] flex-1 flex-col">
              <main className="grid grid-cols-1 gap-12 pb-32 lg:grid-cols-2 lg:gap-16">
                {/* Left Column: Image */}
                <div className="flex items-start justify-center">
                  <div className="aspect-[4/5] w-full max-w-lg overflow-hidden rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] lg:max-w-none">
                    <div
                      className="h-full w-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlwt9Keey68wGSYOklJKMrG3x89LRHlphKl1JyktH3NB6nALuTsHIPPj7-TMDtxoSqlw6S2AFRAYtnfZ78hJy7AD4lmZPMhnILO_1gnFuMQkejVNxp1y29EMPuTemfsR-q8rbWDy7jIrlInOGnYRial0PcYH_Klq0z3EYOOpaO2VzgigXnheNYFO4uXd8JCIGPvWfRXCZLLJ7kO3pKOCPLuIYUWWfke437yzuTb1ONEPLe_Ebn3PIGgCSvS0B4sGBBCXOmlPxTvrHG")',
                      }}
                      aria-label="A beautifully plated saffron risotto with perfectly seared scallops on top, garnished with fresh chives."
                    />
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="flex flex-col gap-8">
                  {/* Header Section */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <h1 className="text-4xl font-black text-[#800020] md:text-5xl">
                        Saffron Risotto with Seared Scallops
                      </h1>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]">
                        <div className="h-3 w-3 rounded-full bg-red-600" />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-[#D4AF37] md:text-5xl">₹1250</p>
                  </div>

                  {/* Serving Info Card */}
                  <div className="rounded-lg border border-[#D4AF37] bg-[rgba(212,175,55,0.1)] p-4">
                    <p className="text-base font-medium text-[#800020]">Serves 1-2 people</p>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-2">
                    <h2 className="border-b border-[#D4AF37] pb-2 text-xl font-bold text-[#800020]">
                      Description
                    </h2>
                    <p className="pt-2 text-base font-normal leading-relaxed text-[#333333]">
                      A creamy and decadent Arborio rice dish infused with delicate saffron threads, topped with
                      perfectly seared jumbo scallops. Finished with a touch of parmesan and fresh chives, this
                      dish is a true taste of coastal Italian luxury.
                    </p>
                  </div>

                  {/* Ingredients */}
                  <div className="rounded-lg border border-[#D4AF37] bg-white p-4">
                    <h3 className="text-lg font-bold text-[#800020]">Key Ingredients</h3>
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-[#333333]">
                      <li>Arborio Rice</li>
                      <li>Jumbo Scallops</li>
                      <li>Saffron Threads</li>
                      <li>Parmigiano-Reggiano</li>
                      <li>White Wine & Chicken Broth</li>
                    </ul>
                  </div>

                  {/* Portion Size */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-[#800020]">Portion Size</h3>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setPortion('regular')}
                        className={`rounded-full px-6 py-2 text-white transition-colors ${
                          portion === 'regular'
                            ? 'bg-[#fa8333] border-2 border-[#fa8333]'
                            : 'bg-transparent border-2 border-[#fa8333] text-[#fa8333] hover:bg-[#fa8333]/10'
                        }`}
                      >
                        Regular
                      </button>
                      <button
                        onClick={() => setPortion('large')}
                        className={`rounded-full px-6 py-2 text-white transition-colors ${
                          portion === 'large'
                            ? 'bg-[#fa8333] border-2 border-[#fa8333]'
                            : 'bg-transparent border-2 border-[#fa8333] text-[#fa8333] hover:bg-[#fa8333]/10'
                        }`}
                      >
                        Large (+₹300)
                      </button>
                    </div>
                  </div>

                  {/* Customizations */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#800020]">Customizations</h3>
                    <div className="space-y-3">
                      <label
                        className={`flex cursor-pointer items-center gap-4 rounded-lg border p-3 transition-colors ${
                          extraParmesan
                            ? 'border-[#fa8333] bg-[#fa8333] text-white'
                            : 'border-[#D4AF37] text-[#333333]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={extraParmesan}
                          onChange={(e) => setExtraParmesan(e.target.checked)}
                          className="h-5 w-5 rounded border-[#D4AF37] text-[#fa8333] focus:ring-[#fa8333]/50"
                        />
                        <span className="flex-grow">Extra Parmesan</span>
                        <span
                          className={`font-semibold ${extraParmesan ? 'text-white' : 'text-[#D4AF37]'}`}
                        >
                          +₹80
                        </span>
                      </label>
                      <label
                        className={`flex cursor-pointer items-center gap-4 rounded-lg border p-3 transition-colors ${
                          truffleOil
                            ? 'border-[#fa8333] bg-[#fa8333] text-white'
                            : 'border-[#D4AF37] text-[#333333]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={truffleOil}
                          onChange={(e) => setTruffleOil(e.target.checked)}
                          className="h-5 w-5 rounded border-[#D4AF37] text-[#fa8333] focus:ring-[#fa8333]/50"
                        />
                        <span className="flex-grow">White Truffle Oil Drizzle</span>
                        <span className={`font-semibold ${truffleOil ? 'text-white' : 'text-[#D4AF37]'}`}>
                          +₹150
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <p className="font-semibold text-green-600">In Stock</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Sticky Add to Cart Bar */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-[#D4AF37]/30 bg-[#FDFBF5]/80 p-4 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-4 md:grid-cols-3">
            <div className="hidden md:block" />
            <div className="flex items-center justify-center gap-4">
              <p className="font-bold text-[#333333]">Quantity</p>
              <div className="flex items-center rounded-full border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#333333] hover:bg-gray-200"
                >
                  <MinusIcon size={20} /> {/* Use aliased name */}
                </button>
                <span className="px-4 text-lg font-bold text-[#333333]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#333333] hover:bg-gray-200"
                >
                  <PlusIcon size={20} /> {/* Use aliased name */}
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="flex w-full items-center justify-center gap-3 rounded-full bg-[#fa8333] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-opacity-90 md:w-auto">
                <ShoppingCartIcon className="text-[#D4AF37]" size={24} /> {/* Use aliased name */}
                Add to Cart • ₹{totalPrice}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}