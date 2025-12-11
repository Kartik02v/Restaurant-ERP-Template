"use client";

import React from "react";

export default function TakeawayPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-brand-text-light dark:text-brand-text-dark">
          Takeaway & Delivery Orders
        </h1>

        <button className="p-2 text-brand-text-light dark:text-brand-text-dark rounded-full hover:bg-brand-surface-light dark:hover:bg-brand-surface-dark">
          <span className="material-symbols-outlined text-2xl">refresh</span>
        </button>
      </header>

      {/* MAIN */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">

          {/* FILTERS */}
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Tabs */}
            <div className="flex border-b border-brand-surface-light dark:border-brand-surface-dark gap-8">
              {/* Delivery tab selected */}
              <button className="flex flex-col items-center justify-center border-b-[3px] border-brand-orange text-brand-orange pb-3 pt-2">
                <p className="text-sm font-bold">Delivery</p>
              </button>

              <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-brand-muted-gray pb-3 pt-2">
                <p className="text-sm font-bold">Takeaway</p>
              </button>
            </div>

            {/* Search */}
            <div className="w-full sm:max-w-xs">
              <label className="flex h-12 w-full">
                <div className="flex items-center pl-4 rounded-l-lg bg-background-light dark:bg-brand-surface-dark text-brand-muted-gray">
                  <span className="material-symbols-outlined text-2xl">search</span>
                </div>

                <input
                  placeholder="Search customer / phone"
                  className="form-input w-full rounded-lg border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-brand-surface-dark text-brand-text-light dark:text-brand-text-dark placeholder:text-brand-muted-gray px-4 pl-2 focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                />
              </label>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {/* 1 — Delivery */}
            <OrderCard
              name="Aarav Sharma"
              phone="+91 98765 43210"
              type="Delivery"
              typeColor="text-brand-orange bg-brand-orange/20"
              address="123, B-Wing, Royal Apartments, Mumbai"
              eta="25 mins"
              items={[
                "Paneer Tikka x2 - ₹480",
                "Garlic Naan x4 - ₹200",
                "Dal Makhani x1 - ₹350",
                "+2 more",
              ]}
              paymentStatus="Paid"
              paymentColor="text-brand-success bg-brand-success/20"
            />

            {/* 2 — Takeaway */}
            <OrderCard
              name="Priya Patel"
              phone="+91 91234 56789"
              type="Takeaway"
              typeColor="text-brand-success bg-brand-success/20"
              items={["Veg Biryani x1 - ₹300", "Coke (500ml) x2 - ₹80"]}
              paymentStatus="COD"
              paymentColor="text-brand-gold bg-brand-gold/20"
            />

            {/* 3 — Delivery Failed */}
            <OrderCard
              name="Rohan Singh"
              phone="+91 87654 32109"
              type="Delivery"
              typeColor="text-brand-orange bg-brand-orange/20"
              address="Flat 404, Cyber Towers, Gurugram"
              eta="45 mins"
              items={["Chicken Tikka Masala x1 - ₹450", "Butter Naan x2 - ₹100"]}
              paymentStatus="Failed"
              paymentColor="text-brand-burgundy bg-brand-burgundy/20"
            />

          </div>

          {/* EMPTY STATE */}
          <div className="hidden mt-16 text-center">
            <div
              className="w-full max-w-sm mx-auto aspect-video bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHM4W1jCgUAOFTerchIA1Hr7d4nUeUtNCgrKjaluJuGUmgzz0a0UncLiiqSz03GSvSSdLsd0mblUOuYT4X5y96IlrIkzQDi2qGRGrOBUFAyjw7ZgrEhxymresIUJ7OxiJo_A5P8ipr2oGO0hzdP4JYmg6SZHXFCx2m6KuFuIpeMgp8DEOATj8xEdcmTkCxviYuWsQ8oc3F1A5ncXKmVCKAlx45MX7qUGIgOKg4rpLs4d3wI_VebMe3C9uUb2KZVC2j7fagtfZF1YmA')",
              }}
            ></div>

            <h3 className="mt-4 text-xl font-semibold text-brand-text-light dark:text-brand-text-dark">
              No Takeaway or Delivery Orders Right Now
            </h3>
            <p className="mt-2 text-base text-brand-muted-gray">
              Check back soon for new orders.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -----------------------------------------
   REUSABLE CARD
------------------------------------------ */

function OrderCard({
  name,
  phone,
  type,
  typeColor,
  address,
  eta,
  items,
  paymentStatus,
  paymentColor,
}: any) {
  return (
    <div className="flex flex-col rounded-xl shadow-sm bg-background-light dark:bg-brand-surface-dark overflow-hidden">
      <div className="p-5 flex-grow flex flex-col">

        {/* Heading */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-brand-text-light dark:text-brand-text-dark">
              {name}
            </p>
            <p className="text-sm text-brand-muted-gray">{phone}</p>
          </div>

          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${typeColor}`}
          >
            {type}
          </span>
        </div>

        {/* Address */}
        {address && (
          <div className="mt-4 border-t border-brand-surface-light dark:border-brand-surface-dark pt-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-base text-brand-muted-gray mt-0.5">
                location_on
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-muted-gray">
                  Address
                </p>
                <p className="text-sm text-brand-text-light dark:text-brand-text-dark">
                  {address}
                </p>
              </div>
            </div>

            {eta && <p className="mt-2 text-sm font-medium text-brand-orange">ETA: {eta}</p>}
          </div>
        )}

        {/* Items */}
        <div className="mt-4 border-t border-brand-surface-light dark:border-brand-surface-dark pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-muted-gray mb-2">
            Items
          </p>

          <ul className="space-y-1 text-sm text-brand-text-light dark:text-brand-text-dark">
            {items.map((item: string, i: number) => (
              <li
                key={i}
                className={item.includes("+") ? "text-brand-orange cursor-pointer font-medium" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-grow"></div>

        {/* Payment */}
        <div className="mt-4 border-t border-brand-surface-light dark:border-brand-surface-dark pt-4 flex items-center justify-between">
          <p className="text-sm text-brand-muted-gray">Payment Status</p>

          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${paymentColor}`}
          >
            {paymentStatus}
          </span>
        </div>
      </div>

      <button className="w-full bg-brand-orange text-white text-sm font-medium py-3 hover:bg-brand-orange/90 transition-colors">
        Open Order
      </button>
    </div>
  );
}
