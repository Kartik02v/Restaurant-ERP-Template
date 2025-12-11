'use client';

import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart, User, Truck, Info, X, Square, Leaf } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  portion: string;
  addons: string[];
  imageUrl: string;
  isVeg: boolean;
}

export default function CartPage() {
  const [promoCode, setPromoCode] = useState('');
  const [promoStatus, setPromoStatus] = useState<'none' | 'success' | 'error'>('none');

  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Truffle Risotto',
      price: 28.00,
      quantity: 1,
      portion: '350g, serves 1-2 people',
      addons: ['Extra Parmesan', 'Sautéed Mushrooms'],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXqIghZec9TMAMHi2x-YCLwRRoRkcW68NgxbNEdmHr6tBvVTcMb0200u3nggvcjRju5sAIOkB1Vu2zDvzdidGuwAxF0aQMecDefPecoEGi1TiU4GVL_uo5yyLYS5NGq9_NCG7ch8AvzoH1ispTV-blEvZfYQXiny-21BEN-w9OZJaevmYdkUbVuGKrRocOBzEO1W7aIgJVrMCl9wa6VnItnQ1EKZcdBQWy7sNhvN28SxtnfmiPfSOWQzhrsXv3IbnkBuAYdxNGIa-3',
      isVeg: true,
    },
    {
      id: 2,
      name: 'Seared Scallops',
      price: 35.00,
      quantity: 1,
      portion: '250g, serves 1 person',
      addons: ['Lemon Butter Sauce'],
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDy5qcdibg0pg3ce64-OmpOSeZkZH0AXjMb5XbOM9eSQwgM2wZC4zHaiqHCItesYgQ2fn9EYgnKkSiV3uqydSPKBIWDiM0pyFsmmSRToWmKO5urEFxGhBWoKWQdwJa16PJ19xOJYwZjkcAWkDQ8PCQ3oX94hErj4rE4Pb7aOd7c58g5OvsIztIN3o3vs6u7txckEL-XeC6RAfpFB7uv8wMt0NhZEtDeqzJFr5ZBv6WuGxA9oPlAOk14Q-vtJw1220ZLR-32a3f3XdJ',
      isVeg: false,
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'WELCOME50') {
      setPromoStatus('success');
    } else {
      setPromoStatus('error');
    }
  };

  const itemTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const addonsTotal = 8.00; // Hardcoded as in original
  const deliveryFee = 5.00;
  const packaging = 2.00;
  const taxes = 6.50;
  const discount = promoStatus === 'success' ? 10.00 : 0; // Example discount
  const grandTotal = itemTotal + addonsTotal + deliveryFee + packaging + taxes - discount;

  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-[#f8f7f5] font-['Be_Vietnam_Pro',sans-serif] text-[#1c130d]">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-[#f4ece6] bg-[#f8f7f5]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4">
                <div className="size-6 text-[#fa8333]">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0"><rect fill="white" height="48" width="48" /></clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-lg font-bold tracking-tight">Bon Appétit</h2>
              </div>

              <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
                <a href="#" className="text-sm font-medium">Menu</a>
                <a href="#" className="text-sm font-medium">Reservations</a>
                <a href="#" className="text-sm font-medium">About Us</a>
                <a href="#" className="text-sm font-medium">Contact</a>
              </nav>

              <div className="flex items-center gap-2">
                <button className="flex size-10 items-center justify-center rounded-lg bg-[#f4ece6] text-xl">
                  <ShoppingCart size={20} />
                </button>
                <button className="flex size-10 items-center justify-center rounded-lg bg-[#f4ece6] text-xl">
                  <User size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto flex-grow px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
            {/* Left Column - Order Items */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-4xl font-black tracking-tight">Your Order</p>
              </div>

              {/* Cart Items */}
              <div className="flex flex-col gap-4 divide-y divide-[#f4ece6] rounded-xl border border-[#f4ece6] bg-white/50 p-2 md:p-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 px-4 py-3 justify-between">
                    <div className="flex flex-grow items-start gap-4">
                      <div
                        className="aspect-square size-[70px] flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("${item.imageUrl}")` }}
                      />
                      <div className="flex flex-1 flex-col justify-center gap-1">
                        <div className="flex items-center gap-2">
                          <p className="text-base font-bold">{item.name}</p>
                          {item.isVeg ? (
                              <Leaf className="text-green-600" size={16} />
                            ) : (
                            <Square className="text-red-600" size={16} fill="currentColor" />
                          )}
                        </div>
                        <p className="text-sm font-normal text-[#9e6a47]">{item.portion}</p>
                        {item.addons.length > 0 && (
                          <p className="text-xs text-[#9e6a47]">Add-ons: {item.addons.join(', ')}</p>
                        )}
                        <p className="mt-1 text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#9e6a47] hover:text-red-500"
                      >
                        <X size={20} />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex size-7 items-center justify-center rounded-full bg-[#f4ece6] text-base font-medium"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-6 text-center text-base font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex size-7 items-center justify-center rounded-full bg-[#f4ece6] text-base font-medium"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery & Offers */}
              <h2 className="px-4 pb-3 pt-8 text-[22px] font-bold tracking-tight">Delivery & Offers</h2>
              <div className="flex flex-col gap-4 rounded-xl border border-[#f4ece6] bg-white/50 p-4 md:p-6">
                <div className="flex items-center gap-4 rounded-lg bg-[#f4ece6] p-3 text-sm text-[#9e6a47]">
                  <Truck className="text-[#fa8333]" size={20} />
                  <span>
                    Estimated delivery in 25-35 minutes to{' '}
                    <strong>123 Culinary Lane, Foodie City</strong>
                  </span>
                </div>

                <div className="relative">
                  <input
                    className="h-12 w-full rounded-lg bg-[#f4ece6] px-4 pr-28 placeholder:text-[#9e6a47] focus:border-transparent focus:ring-2 focus:ring-[#fa8333]"
                    placeholder="Enter promo code"
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    onClick={applyPromo}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-[#fa8333]/20 px-4 py-2 text-sm font-bold text-[#fa8333]"
                  >
                    Apply
                  </button>
                </div>

                {promoStatus === 'success' && (
                  <p className="px-2 text-xs text-green-600">Promo code "WELCOME50" applied successfully!</p>
                )}
                {promoStatus === 'error' && (
                  <p className="px-2 text-xs text-red-500">Invalid promo code.</p>
                )}
              </div>
            </div>

            {/* Right Column - Bill Details */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="sticky top-24">
                <div className="rounded-xl border border-[#f4ece6] bg-white/50 p-6">
                  <h3 className="mb-4 text-xl font-bold">Bill Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9e6a47]">Item Total</span>
                      <span>${itemTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9e6a47]">Add-ons Total</span>
                      <span>${addonsTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9e6a47]">Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9e6a47]">Packaging Charges</span>
                      <span>${packaging.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-1 text-[#9e6a47]">
                        Discount / Offers
                      </span>
                      <span className="text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-1 text-[#9e6a47]">
                        Taxes & Charges <Info size={14} className="cursor-help text-xs" />
                      </span>
                      <span>${taxes.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="my-4 border-t border-dashed border-[#d8c3b5]" />

                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Grand Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>

                  <button className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-[#fa8333] font-bold text-white transition-colors hover:bg-opacity-90">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}