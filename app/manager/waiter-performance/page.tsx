"use client";

import React from "react";

export default function WaiterPerformancePage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm border-b border-brand-surface-light dark:border-brand-surface-dark">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold text-brand-burgundy dark:text-brand-gold">
              Waiter Performance
            </h1>

            {/* Day/Week/Month Filter */}
            <div className="flex items-center gap-2 rounded-full bg-background-light dark:bg-background-dark p-1 text-sm font-medium border border-brand-surface-light dark:border-brand-surface-dark">
              <button className="rounded-full px-3 py-1 text-brand-burgundy dark:text-text-dark hover:bg-brand-light-bg/60 dark:hover:bg-brand-surface-dark/60">
                Day
              </button>
              <button className="rounded-full bg-brand-orange px-3 py-1 font-semibold text-white shadow-sm">
                Week
              </button>
              <button className="rounded-full px-3 py-1 text-brand-burgundy dark:text-text-dark hover:bg-brand-light-bg/60 dark:hover:bg-brand-surface-dark/60">
                Month
              </button>
            </div>
          </div>
        </div>

        <div className="h-0.5 w-full bg-brand-gold" />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-8 lg:flex-row">

          {/* LEFT AREA */}
          <div className="flex-1">

            {/* Stats */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatCard label="Total Waiters" value="12" />
              <StatCard label="Total Tables Served" value="1,204" />
              <StatCard label="Total Order Value" value="$150,230.75" />
            </div>

            {/* Waiter Cards */}
            <div className="flex flex-col gap-3">
              <WaiterCard
                name="Alex Martinez"
                tables="32"
                value="$3,120.50"
                buttonColor="brand-orange"
              />
              <WaiterCard
                name="Samantha Lee"
                tables="28"
                value="$2,890.00"
                buttonColor="brand-burgundy"
              />
              <WaiterCard
                name="David Chen"
                tables="25"
                value="$2,543.75"
                buttonColor="brand-burgundy"
              />
            </div>
          </div>

          {/* RIGHT AREA */}
          <div className="w-full lg:max-w-md xl:max-w-lg">
            <div className="sticky top-24 flex flex-col gap-6 rounded-xl border border-brand-orange bg-background-light dark:bg-background-dark/50 p-6">

              {/* Profile */}
              <div className="text-center">
                <h2 className="text-3xl font-black text-brand-burgundy dark:text-brand-gold">
                  Alex Martinez
                </h2>
                <p className="text-brand-muted-gray">Evening Shift (5pm - 11pm)</p>
              </div>

              {/* Small Stats */}
              <div className="grid grid-cols-2 gap-4">
                <SmallStat label="Tables Served" value="32" />
                <SmallStat label="Total Value" value="$3,120.50" />
              </div>

              {/* History */}
              <Section title="Recent History">
                <HistoryItem time="9:45 PM" table="Table 12" amount="$120.50" />
                <HistoryItem time="9:15 PM" table="Table 7" amount="$85.00" />
                <HistoryItem time="8:30 PM" table="Table 15" amount="$210.00" />
              </Section>

              {/* Pending */}
              <Section title="Outstanding / Pending Orders">
                <div className="flex flex-col items-center justify-center rounded-lg bg-brand-success/10 py-6 text-center border border-brand-success/30">
                  <span className="material-symbols-outlined text-3xl text-brand-success">
                    task_alt
                  </span>
                  <p className="mt-1 font-semibold text-brand-success">All Clear!</p>
                  <p className="text-sm text-brand-success/80">
                    No pending orders.
                  </p>
                </div>
              </Section>

              {/* Actions */}
              <Section title="Actions">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <ActionButton
                    label="Export History"
                    icon="download"
                    color="brand-burgundy"
                  />
                  <ActionButton
                    label="Reset Counters"
                    icon="refresh"
                    color="brand-orange"
                  />
                </div>
              </Section>

            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

/* ----------------------------
   COMPONENTS
----------------------------- */

const StatCard = ({ label, value }: any) => (
  <div className="rounded-lg border border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark p-4 shadow-sm">
    <p className="text-sm font-medium text-brand-muted-gray">{label}</p>
    <p className="text-2xl font-bold text-brand-burgundy dark:text-white">{value}</p>
  </div>
);

const WaiterCard = ({ name, tables, value, buttonColor }: any) => (
  <div className="flex flex-col items-start gap-3 rounded-lg border border-brand-surface-light dark:border-brand-surface-dark p-4 hover:shadow-md hover:border-brand-orange transition-all sm:flex-row sm:items-center">
    <div className="flex-grow">
      <h3 className="text-lg font-bold text-brand-burgundy dark:text-white">{name}</h3>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Badge label={`Tables served: ${tables}`} />
        <Badge label={`Order value: ${value}`} />
      </div>
    </div>

    <button
      className={`flex w-full sm:w-auto min-w-[120px] items-center justify-center gap-2 rounded-lg h-10 px-4 bg-${buttonColor} text-white text-sm font-bold`}
    >
      <span>View Details</span>
      <span className="material-symbols-outlined !text-base">arrow_forward</span>
    </button>
  </div>
);

const Badge = ({ label }: any) => (
  <div className="rounded-full bg-brand-burgundy/10 dark:bg-brand-burgundy/40 px-3 py-1 text-xs font-semibold text-brand-burgundy dark:text-brand-gold">
    {label}
  </div>
);

const SmallStat = ({ label, value }: any) => (
  <div className="rounded-lg bg-background-light dark:bg-background-dark p-4 text-center shadow-sm border border-brand-surface-light dark:border-brand-surface-dark">
    <p className="text-sm font-medium text-brand-muted-gray">{label}</p>
    <p className="text-2xl font-bold text-brand-burgundy dark:text-white">{value}</p>
  </div>
);

const Section = ({ title, children }: any) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-bold text-brand-burgundy dark:text-white">{title}</h3>
    {children}
  </div>
);

const HistoryItem = ({ table, time, amount }: any) => (
  <li className="flex justify-between rounded p-2 hover:bg-brand-surface-light dark:hover:bg-brand-surface-dark text-sm transition">
    <span>
      {table} — {time}
    </span>
    <span className="font-semibold text-brand-burgundy dark:text-brand-gold">
      {amount}
    </span>
  </li>
);

const ActionButton = ({ label, icon, color }: any) => (
  <button
    className={`flex flex-1 items-center justify-center gap-2 rounded-lg border border-${color} px-4 py-2 bg-background-light dark:bg-background-dark text-sm font-semibold text-${color}`}
  >
    <span className="material-symbols-outlined !text-base">{icon}</span>
    {label}
  </button>
);
