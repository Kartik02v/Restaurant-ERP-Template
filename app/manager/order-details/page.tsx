// app/manager/order-details.tsx
"use client";

import React from "react";

export default function OrderDetailsPage() {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark font-display">
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-2xl font-bold text-heading dark:text-brand-gold">
              Order #10234
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              Generate Bill
            </button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
              Assign Delivery Partner
            </button>
            <button className="px-6 py-2 rounded-lg bg-brand-orange text-sm font-semibold text-white shadow-sm hover:bg-opacity-90">
              Send to Kitchen
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left side — Items + Bill Summary */}
          <div className="flex flex-col gap-6 lg:col-span-2">

            {/* Itemized List */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-heading dark:text-brand-gold">
                  Itemized List
                </h2>
              </div>

              <div className="p-5 divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  {
                    name: "Paneer Tikka",
                    details: "Add-on: Extra Spicy",
                    qty: 2,
                    price: 240,
                    total: 480,
                  },
                  { name: "Garlic Naan", qty: 4, price: 50, total: 200 },
                  {
                    name: "Dal Makhani",
                    details: "Add-on: Extra Butter",
                    qty: 1,
                    price: 350,
                    total: 350,
                  },
                  { name: "Gulab Jamun", qty: 2, price: 75, total: 150 },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between py-4">
                    <div>
                      <p className="font-semibold text-heading dark:text-gray-100">
                        {item.name}
                      </p>
                      {item.details && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.details}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.qty} × ₹{item.price.toFixed(2)}
                      </p>
                      <p className="w-20 text-right font-semibold text-heading dark:text-gray-100">
                        ₹{item.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bill Summary */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-heading dark:text-brand-gold">
                  Bill Summary
                </h2>
              </div>

              <div className="p-5 space-y-3">
                <SummaryRow label="Subtotal" amount="₹1180.00" />
                <SummaryRow label="Packaging Fees" amount="₹40.00" />
                <SummaryRow label="Delivery Charges" amount="₹50.00" />
                <SummaryRow label="Taxes (GST)" amount="₹63.50" />
                <SummaryRow
                  label="Discount (WELCOME10)"
                  amount="-₹118.00"
                  highlight
                />

                <div className="border-t border-gray-200 dark:border-gray-700 my-3" />

                <div className="flex justify-between text-base font-bold text-heading dark:text-white">
                  <span>Grand Total</span>
                  <span>₹1215.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Customer + Payment + Timeline */}
          <div className="flex flex-col gap-6">

            {/* Customer Information */}
            <InfoCard title="Customer Information">
              <InfoField label="Name" value="Aarav Sharma" />
              <InfoField label="Phone" value="+91 98765 43210" />
              <InfoField
                label="Delivery Address"
                value="123, B-Wing, Royal Apartments, Bandra West, Mumbai, Maharashtra 400050"
              />
            </InfoCard>

            {/* Payment Status */}
            <InfoCard title="Payment Status">
              <div className="flex justify-between mb-4">
                <p className="text-heading dark:text-gray-100">Online Payment</p>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                  Paid
                </span>
              </div>

              <InfoField
                label="Transaction ID"
                value="pay_Nskg934kHGFdsh3"
              />
            </InfoCard>

            {/* Order Status Timeline */}
            <InfoCard title="Order Status">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <TimelineStep
                  title="Order Placed"
                  time="10:30 AM, 18 Aug 2023"
                  color="brand-orange"
                  done
                />
                <TimelineStep
                  title="In Kitchen"
                  time="10:32 AM, 18 Aug 2023"
                  color="brand-orange"
                  done
                />
                <TimelineStep
                  title="Out for Delivery"
                  time="10:55 AM, 18 Aug 2023"
                  color="brand-gold"
                />
                <TimelineStep title="Delivered" disabled />
              </ol>
            </InfoCard>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function SummaryRow({
  label,
  amount,
  highlight,
}: {
  label: string;
  amount: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between text-sm ${
        highlight
          ? "text-brand-burgundy dark:text-brand-gold font-medium"
          : "text-gray-600 dark:text-gray-300"
      }`}
    >
      <span>{label}</span>
      <span>{amount}</span>
    </div>
  );
}

function InfoCard({ title, children }: any) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-heading dark:text-brand-gold">
          {title}
        </h2>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  );
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-heading dark:text-gray-100">{value}</p>
    </div>
  );
}

function TimelineStep({
  title,
  time,
  color = "gray-300",
  done,
  disabled,
}: any) {
  return (
    <li className="mb-6 ml-6">
      <span
        className={`absolute -left-[10.5px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white dark:ring-gray-900 ${
          disabled
            ? "bg-gray-200 dark:bg-gray-700"
            : done
            ? `bg-brand-orange`
            : `bg-${color}`
        }`}
      >
        {!disabled && done && (
          <span className="material-symbols-outlined text-sm text-white">
            done
          </span>
        )}
      </span>

      <h3
        className={`font-semibold ${
          disabled
            ? "text-gray-500 dark:text-gray-400"
            : "text-heading dark:text-brand-gold"
        }`}
      >
        {title}
      </h3>

      {!disabled && (
        <time className="block text-xs text-gray-400 dark:text-gray-500">
          {time}
        </time>
      )}
    </li>
  );
}
