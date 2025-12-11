"use client";

import React from "react";

export default function LiveOrdersPage() {
  return (
    <div className="font-display bg-brand-light-bg text-body dark:bg-background-dark min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="sticky top-0 z-10 bg-white/80 py-4 backdrop-blur-sm dark:bg-background-dark/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-3xl font-black text-heading dark:text-white">
                Live Orders
              </h1>
              <p className="text-base text-brand-muted-gray dark:text-gray-400">
                Manage and track all incoming orders in real-time.
              </p>
            </div>

            {/* Top-right buttons */}
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-brand-muted-gray hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">refresh</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-brand-muted-gray hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <div className="flex flex-1 flex-wrap items-center gap-2">
              <button className="h-9 rounded-full bg-brand-burgundy px-4 text-sm font-medium text-white">
                All
              </button>

              {["Dine-In", "Takeaway", "Delivery", "Unpaid"].map((item) => (
                <button
                  key={item}
                  className="h-9 rounded-full border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {item}
                </button>
              ))}

              {/* Urgent */}
              <button className="h-9 rounded-full border border-brand-orange bg-brand-orange/10 px-4 text-sm font-medium text-brand-orange hover:bg-brand-orange/20">
                Urgent
              </button>
            </div>

            {/* Search + Select */}
            <div className="flex w-full flex-wrap gap-4 md:w-auto">
              <label className="flex flex-1 flex-col min-w-40">
                <div className="relative flex h-10 w-full items-stretch">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted-gray">
                    search
                  </span>
                  <input
                    placeholder="Search orders..."
                    className="form-input h-full w-full rounded-lg border border-gray-300 bg-white pl-10 text-gray-900 placeholder:text-brand-muted-gray focus:border-brand-orange focus:ring-brand-orange dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </label>

              <label className="flex flex-1 flex-col min-w-40">
                <select className="form-select h-10 w-full rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-brand-orange focus:ring-brand-orange dark:border-gray-600 dark:bg-gray-800 dark:text-white">
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>Last 7 days</option>
                  <option>Custom Range</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* TABLE WRAPPER */}
        <div className="mt-6 flex flex-col gap-3">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">

            {/* TABLE HEADER */}
            <div className="grid grid-cols-12 items-center gap-4 px-4 py-3">
              <div className="col-span-3 flex items-center gap-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 rounded border-gray-300 text-brand-burgundy dark:border-gray-600" />
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Meta</p>
              </div>

              <p className="col-span-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Details</p>
              <p className="col-span-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</p>
              <p className="col-span-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</p>
            </div>

            {/* ORDER ROW — 1 */}
            <OrderRow
              id="#1024"
              time="5 mins ago"
              icon="restaurant"
              iconBg="bg-brand-burgundy/10"
              detailsTitle="Table 5"
              details="1x Burger, 2x Fries, 1x Coke..."
              status="In-Preparation"
              statusColor="text-brand-orange bg-brand-orange/10"
              progress={50}
              price="$54.50"
            />

            {/* ORDER DETAILS EXPANDED */}
            <OrderDetails />

            {/* ROW 2 */}
            <OrderRow
              id="#1023"
              time="12 mins ago"
              icon="delivery_dining"
              iconBg="bg-brand-orange/10"
              detailsTitle="Jane Doe"
              details="2x Pizza Slices, 1x Salad..."
              status="Ready"
              statusColor="text-brand-success bg-brand-success/10"
              progress={100}
              price="$28.00"
              showOpen
            />

            {/* ROW 3 */}
            <OrderRow
              id="#1022"
              time="25 mins ago"
              icon="shopping_bag"
              iconBg="bg-gray-500/10"
              detailsTitle="Takeaway Customer"
              details="1x Coffee, 1x Croissant"
              status="Served"
              statusColor="text-gray-700 bg-gray-200"
              progress={100}
              price="$9.50"
              showOpen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========== COMPONENTS ========== */

function OrderRow({
  id,
  time,
  icon,
  iconBg,
  detailsTitle,
  details,
  status,
  statusColor,
  progress,
  price,
  showOpen = false,
}: any) {
  return (
    <div className="group border-t border-gray-200 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-white/5">
      <div className="grid grid-cols-12 cursor-pointer items-center gap-4 px-4 py-4">
        <div className="col-span-3 flex items-center gap-3">
          <input type="checkbox" className="form-checkbox h-5 w-5 rounded border-gray-300 text-brand-burgundy dark:border-gray-600 dark:bg-gray-900" />

          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>
              <span className="material-symbols-outlined text-base">{icon}</span>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{id}</p>
              <p className="text-xs text-brand-muted-gray">{time}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="font-semibold text-gray-800 dark:text-gray-200">{detailsTitle}</p>
          <p className="truncate text-sm text-brand-muted-gray">{details}</p>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColor}`}>
                {status}
              </span>
              <p className="text-xs font-medium text-brand-muted-gray">00:05:12</p>
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full bg-brand-orange" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex items-center justify-between">
          <p className="text-lg font-bold text-brand-gold">{price}</p>

          {showOpen ? (
            <button className="rounded-lg bg-brand-orange px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-orange/90">
              Open Order
            </button>
          ) : (
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <IconBtn icon="print" />
              <IconBtn icon="payments" />
              <IconBtn icon="more_vert" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OrderDetails() {
  return (
    <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/50">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            Order Items (3)
          </h4>

          <ul className="mt-2 space-y-2 text-sm">
            <Item name="Classic Burger" price="$15.00" qty="1x" />
            <Item name="Large Fries" price="$12.00" qty="2x" />
            <Item name="Coca-Cola" price="$3.50" qty="1x" />
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            Billing
          </h4>

          <div className="mt-2 space-y-1 text-sm">
            <BillItem label="Subtotal" value="$30.50" />
            <BillItem label="Tax (10%)" value="$3.05" />
            <BillItem label="Total" value="$33.55" bold />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button className="flex h-9 flex-1 items-center justify-center rounded-lg bg-brand-success px-4 text-sm font-medium text-white hover:bg-brand-success/90">
              Mark as Ready
            </button>

            <button className="flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
              Finalize Bill
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ name, price, qty }: any) {
  return (
    <li className="flex justify-between text-gray-600 dark:text-gray-400">
      <span>{qty} {name}</span>
      <span>{price}</span>
    </li>
  );
}

function BillItem({ label, value, bold }: any) {
  return (
    <div className={`flex justify-between ${bold ? "font-semibold text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function IconBtn({ icon }: any) {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-muted-gray hover:bg-gray-200 dark:hover:bg-gray-700">
      <span className="material-symbols-outlined text-xl">{icon}</span>
    </button>
  );
}
