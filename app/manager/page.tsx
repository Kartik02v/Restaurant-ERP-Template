"use client";

import React from "react";
import Link from "next/link";

export default function ManagerPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen w-full flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-heading dark:text-text-dark">Manager Dashboard</h1>

          <div className="flex items-center gap-1.5">
            <div className="size-2 animate-pulse rounded-full bg-brand-success"></div>
            <span className="text-sm font-medium text-brand-success">Live</span>
          </div>
        </div>

        <div className="flex items-center gap-4">

          {/* Date */}
          <button className="flex h-10 items-center gap-2 rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark px-4 text-sm font-medium text-heading dark:text-text-dark">
            <span className="material-symbols-outlined">calendar_today</span>
            Oct 26, 2023
          </button>

          {/* Search */}
          <label className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex items-center h-full w-full rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark">
              <div className="flex items-center pl-3 text-brand-muted-gray">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                placeholder="Search by Order ID, Table..."
                className="flex w-full bg-transparent px-2 text-sm text-heading dark:text-text-dark placeholder:text-brand-muted-gray outline-none"
              />
            </div>
          </label>

          {/* Notifications */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark text-heading dark:text-text-dark">
            <span className="material-symbols-outlined">notifications</span>
            <div className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-brand-orange"></div>
          </button>

          {/* Profile Image */}
          <div
            className="bg-center bg-cover rounded-full size-10 border border-brand-surface-light dark:border-brand-surface-dark"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL64fhj5HCnWsy3L3CRv2uJiBNqIQMGBHNdnkbeqvBYAofYE5HAz-nyJ323KDOOFja_6Ny0G_xW9pXZQeAZzKtEtowZ2dSIEBH9rmEQ5jQaSz59yupVrdNmrpnRWnCjY5e-twvyp-W3MSvlsO22NNOal1nkvRpjDhkwt0oGqwibWJ84sIryZFQ_zsDAlzvdDy2pF_PG8MfEn25ODqK35lwAFKdBzzTE00PW4hIETpIVQJKNMDwd6O5SeadrwDKz_jOVKApX64s6SC0")',
            }}
          ></div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto w-full max-w-[1400px] flex-1 px-6 lg:px-10 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[65%] flex flex-col gap-6">

            {/* NAVIGATION LINKS TO OTHER PAGES */}
            <div className="flex flex-wrap gap-3 mb-2">
              <Link href="/manager/takeaway">
                <button className="px-4 py-2 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange/80">
                  Takeaway / Delivery
                </button>
              </Link>

              <Link href="/manager/menu-management">
                <button className="px-4 py-2 rounded-lg bg-brand-burgundy text-white font-semibold hover:bg-brand-burgundy/80">
                  Menu Management
                </button>
              </Link>

              <Link href="/manager/waiter-performance">
                <button className="px-4 py-2 rounded-lg bg-brand-success text-white font-semibold hover:bg-brand-success/80">
                  Waiter Performance
                </button>
              </Link>

              <Link href="/manager/settings">
                <button className="px-4 py-2 rounded-lg bg-brand-gold text-heading font-semibold hover:bg-brand-gold/80">
                  Settings
                </button>
              </Link>
            </div>

            {/* LIVE ORDERS TITLE */}
            <div className="border-b-2 border-brand-gold pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-xl font-bold text-heading dark:text-text-dark">Live Orders</h2>

                <div className="flex gap-2 flex-wrap">
                  <FilterChip active label="All" />
                  <FilterChip label="Dine-In" />
                  <FilterChip label="Takeaway" />
                  <FilterChip label="Delivery" />
                </div>
              </div>
            </div>

            {/* ORDERS TABLE */}
            <div className="rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark overflow-hidden">
              <table className="w-full">
                <tbody>
                  <OrderRow
                    id="#1028"
                    type="Dine-In"
                    waiter="Waiter: John S."
                    items="3 items: Steak Frites, Caesar Salad..."
                    more="+2 more"
                    status="In-Preparation"
                    statusBg="bg-takeaway-blue/20"
                    statusText="text-takeaway-blue"
                    progressColor="bg-takeaway-blue"
                    progress="50%"
                    time="12 mins ago"
                    total="$82.10"
                  />

                  <OrderRow
                    id="#1027"
                    type="Takeaway"
                    waiter="Awaiting Pickup"
                    items="2 items: Classic Burger, Fries"
                    more="+1 more"
                    status="Ready"
                    statusBg="bg-brand-success/20"
                    statusText="text-brand-success"
                    progressColor="bg-brand-success"
                    progress="100%"
                    time="5 mins ago"
                    total="$25.50"
                    highlight
                  />

                  <OrderRow
                    id="#1025"
                    type="Delivery"
                    waiter="Uber Eats"
                    items="1 item: Salmon Nicoise Salad"
                    status="New"
                    statusBg="bg-takeaway-red/20"
                    statusText="text-takeaway-red"
                    progressColor="bg-takeaway-red"
                    progress="10%"
                    time="30 secs ago"
                    total="$32.00"
                  />
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[35%]">
            <div className="sticky top-28 flex flex-col gap-8">

              {/* Stats Summary */}
              <StatsSummary />

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-heading dark:text-text-dark">Quick Actions</h3>

                <div className="flex flex-col gap-3">
                  <ActionBtn label="Generate Bill" color="bg-brand-orange text-white" />
                  <ActionBtn label="View History" color="bg-brand-light-bg text-heading dark:bg-background-dark dark:text-text-dark" />
                  <Link href="/manager/menu-management">
                    <ActionBtn label="Manage Menu" color="bg-brand-light-bg text-heading dark:bg-background-dark dark:text-text-dark" />
                  </Link>
                  <ActionBtn label="Printer Settings" color="bg-brand-light-bg text-heading dark:bg-background-dark dark:text-text-dark" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */

function FilterChip({ label, active = false }: any) {
  return (
    <div
      className={`flex h-8 items-center rounded-lg px-4 cursor-pointer ${
        active
          ? "bg-brand-burgundy text-white"
          : "bg-brand-surface-light dark:bg-brand-surface-dark text-brand-muted-gray"
      }`}
    >
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

function StatsSummary() {
  const stats = [
    ["Total Orders", "152"],
    ["Total Revenue", "$12,480"],
    ["Active Tables", "14"],
    ["Pending Bills", "8"],
    ["Avg. Order Value", "$82.10"],
    ["Discounts", "$250"],
  ];

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-heading dark:text-text-dark">Stats Summary</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {stats.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 rounded-lg p-4 border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark">
            <p className="text-sm text-brand-muted-gray">{label}</p>
            <p className="text-2xl font-bold text-heading dark:text-text-dark">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderRow({
  id,
  type,
  waiter,
  items,
  more,
  status,
  statusBg,
  statusText,
  progress,
  progressColor,
  time,
  total,
  highlight,
}: any) {
  return (
    <tr
      className={`grid grid-cols-1 md:table-row ${
        highlight ? "bg-brand-success/10" : "hover:bg-brand-surface-light/40 dark:hover:bg-brand-surface-dark/40"
      } border-b border-brand-surface-light dark:border-brand-surface-dark`}
    >
      <td className="px-4 py-4">
        <p className="font-bold text-heading dark:text-text-dark">
          {id} | {type}
        </p>
        <p className="text-sm text-brand-muted-gray">{waiter}</p>
      </td>

      <td className="px-4 py-4">
        <p className="text-sm text-heading dark:text-text-dark">{items}</p>
        {more && <p className="text-xs text-primary">{more}</p>}
      </td>

      <td className="px-4 py-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBg} ${statusText}`}
        >
          {status}
        </span>

        <div className="mt-2 h-1.5 w-full bg-brand-surface-light dark:bg-brand-surface-dark rounded-full overflow-hidden">
          <div className={`h-1.5 ${progressColor}`} style={{ width: progress }}></div>
        </div>

        <span className="text-xs text-brand-muted-gray">{time}</span>
      </td>

      <td className="px-4 py-4 flex flex-col md:flex-row md:justify-end gap-2">
        <span className="font-bold text-lg text-highlight">{total}</span>

        <button className="border border-brand-muted-gray rounded-md px-3 h-8 text-xs font-bold text-brand-muted-gray hover:bg-brand-surface-light dark:hover:bg-brand-surface-dark">
          Open Order
        </button>

        <button className="bg-primary text-white rounded-md px-3 h-8 text-xs font-bold hover:bg-opacity-90">
          Generate Bill
        </button>
      </td>
    </tr>
  );
}

function ActionBtn({ label, color }: any) {
  return (
    <button
      className={`h-12 w-full rounded-lg font-bold ${color} hover:bg-opacity-90`}
    >
      {label}
    </button>
  );
}
