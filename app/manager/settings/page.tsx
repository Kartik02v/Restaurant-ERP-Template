"use client";

import React from "react";

export default function SettingsPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">

      {/* HEADER */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-brand-surface-light dark:border-brand-surface-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 md:px-10 lg:px-20 py-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-black tracking-[-0.03em]">Settings</h1>
          <div className="h-1 w-20 bg-brand-gold mt-1"></div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-brand-muted-gray text-sm hidden sm:block">All changes saved</p>

          <button className="h-10 px-4 rounded-lg bg-brand-orange text-white font-bold text-sm">
            Save
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="w-full max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row gap-8">

        {/* LEFT — SETTINGS FORM */}
        <div className="w-full lg:w-[68%]">
          <div className="bg-background-light dark:bg-background-dark/50 border border-brand-surface-light dark:border-brand-surface-dark rounded-xl shadow-sm p-6 md:p-8 space-y-10">

            {/* 🟡 RESTAURANT IDENTITY */}
            <section>
              <h2 className="text-xl font-bold mb-6">Restaurant Identity</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {[
                  { label: "Restaurant Name", placeholder: "The Golden Spoon", value: "The Golden Spoon" },
                  { label: "Contact Phone", placeholder: "+1 (555) 123-4567", value: "+1 (555) 123-4567" },
                  { label: "Support Email", placeholder: "support@goldenspoon.com", value: "support@goldenspoon.com" },
                  { label: "Official Address", placeholder: "123 Culinary Ave, Foodville", value: "123 Culinary Ave, Foodville" },
                ].map((field, i) => (
                  <label key={i} className="flex flex-col">
                    <p className="text-brand-muted-gray text-sm font-medium pb-2">
                      {field.label}
                    </p>
                    <input
                      className="form-input h-12 rounded-lg bg-background-light dark:bg-background-dark border border-brand-surface-light dark:border-brand-surface-dark text-text-light dark:text-text-dark placeholder:text-brand-muted-gray/70 focus:ring-2 focus:ring-brand-orange/50 p-3"
                      placeholder={field.placeholder}
                      defaultValue={field.value}
                    />
                  </label>
                ))}

              </div>
            </section>

            {/* 🟡 OPENING HOURS */}
            <section>
              <h2 className="text-xl font-bold mb-6">Opening Hours</h2>

              <div className="space-y-4">

                {/* DAY ROW (OPEN) */}
                <DayRow
                  day="Monday"
                  isOpen={true}
                  start="09:00"
                  end="22:00"
                />

                {/* DAY ROW (CLOSED) */}
                <DayRow
                  day="Tuesday"
                  isOpen={false}
                />

              </div>
            </section>

            {/* 🟡 PAYMENT MODES */}
            <section>
              <h2 className="text-xl font-bold mb-6">Payment Modes Enabled</h2>

              <div className="space-y-4">

                <ToggleRow label="Cash on Delivery" defaultChecked />
                <ToggleRow label="UPI Payments" defaultChecked />

                {/* Card Payments + sub-form */}
                <div className="border border-brand-surface-light dark:border-brand-surface-dark rounded-lg">
                  <div className="flex items-center justify-between p-4">
                    <span className="font-medium">Card Payments</span>
                    <Switch id="card-toggle" defaultChecked />
                  </div>

                  <div className="border-t border-brand-surface-light dark:border-brand-surface-dark p-4 space-y-4">
                    <p className="text-sm text-brand-muted-gray">
                      Configure your payment gateway integration.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputField label="Publishable Key" value="pk_test_************************" />
                      <InputField label="Secret Key" value="sk_test_************************" type="password" />
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* FORM FOOTER */}
            <div className="pt-6 border-t border-brand-surface-light dark:border-brand-surface-dark flex justify-end gap-4">
              <button className="h-10 px-4 rounded-lg bg-transparent text-brand-muted-gray hover:bg-brand-surface-light/60 dark:hover:bg-brand-surface-dark/40 font-bold text-sm">
                Reset Changes
              </button>
              <button className="h-10 px-4 rounded-lg bg-brand-orange text-white font-bold text-sm">
                Save Settings
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT — QUICK ACTIONS */}
        <aside className="w-full lg:w-[32%] lg:sticky lg:top-28">

          <div className="bg-background-light dark:bg-background-dark/50 border border-brand-surface-light dark:border-brand-surface-dark rounded-xl shadow-sm p-6 space-y-8">

            {/* QUICK TOGGLES */}
            <section>
              <h3 className="text-lg font-bold mb-4">Quick Toggles</h3>
              <div className="space-y-3">
                <ToggleRow label="Accept Online Orders" defaultChecked />
                <ToggleRow label="Auto-Accept Delivery" />
              </div>
            </section>

            {/* PAYMENT QUICK ACTIONS */}
            <section>
              <h3 className="text-lg font-bold mb-4">Payment Quick Actions</h3>

              <div className="space-y-3">
                <QuickAction icon="credit_card" label="Test Payment Gateway" />
                <QuickAction icon="receipt_long" label="View All Transactions" />
              </div>
            </section>

            {/* AUDIT LOG */}
            <section>
              <h3 className="text-lg font-bold mb-4">Audit Log</h3>

              <div className="space-y-4">

                <AuditEntry icon="schedule" text="Admin User updated opening hours for Monday." time="2 hours ago" />

                <AuditEntry icon="toggle_on" text="John Doe enabled Card Payments." time="1 day ago" />

                <AuditEntry icon="edit" text="Admin User changed the Contact Phone." time="3 days ago" />

              </div>
            </section>

          </div>
        </aside>

      </main>
    </div>
  );
}

/* -----------------------------------------
    COMPONENTS
------------------------------------------ */

function DayRow({ day, isOpen, start, end }: any) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-background-light dark:bg-background-dark/30 border border-brand-surface-light dark:border-brand-surface-dark">
      <label className="flex items-center cursor-pointer">
        <Switch defaultChecked={isOpen} />
        <span className="ml-3 font-medium w-20">{day}</span>
      </label>

      {isOpen ? (
        <div className="flex items-center gap-2 flex-1">
          <input className="form-input w-full rounded-md border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark focus:ring-brand-orange/50 text-sm" type="time" defaultValue={start} />
          <span className="text-brand-muted-gray">-</span>
          <input className="form-input w-full rounded-md border-brand-surface-light dark:border-brand-surface-dark bg-background-light dark:bg-background-dark focus:ring-brand-orange/50 text-sm" type="time" defaultValue={end} />
        </div>
      ) : (
        <p className="text-brand-muted-gray opacity-70">Closed</p>
      )}

      <button className="p-2 rounded-md text-brand-muted-gray hover:bg-brand-surface-light/70 dark:hover:bg-brand-surface-dark/40">
        <span className="material-symbols-outlined text-xl">add</span>
      </button>
    </div>
  );
}

function ToggleRow({ label, defaultChecked }: any) {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg border border-brand-surface-light dark:border-brand-surface-dark">
      <span className="font-medium">{label}</span>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}

function Switch({ defaultChecked, id }: any) {
  return (
    <label htmlFor={id} className="cursor-pointer relative inline-flex items-center">
      <input id={id} type="checkbox" className="peer sr-only" defaultChecked={defaultChecked} />
      <div className="block w-12 h-6 rounded-full bg-brand-muted-gray/40 peer-checked:bg-brand-orange dark:bg-brand-muted-gray/40"></div>
      <div className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
    </label>
  );
}

function InputField({ label, value, type = "text" }: any) {
  return (
    <label className="flex flex-col">
      <p className="text-brand-muted-gray text-sm font-medium pb-2">{label}</p>
      <input
        type={type}
        defaultValue={value}
        className="form-input h-12 rounded-lg bg-background-light dark:bg-background-dark border border-brand-surface-light dark:border-brand-surface-dark text-text-light dark:text-text-dark placeholder:text-brand-muted-gray/70 focus:ring-2 focus:ring-brand-orange/50 p-3"
      />
    </label>
  );
}

function QuickAction({ icon, label }: any) {
  return (
    <button className="flex items-center gap-2 text-sm font-medium text-brand-burgundy dark:text-brand-orange hover:underline">
      <span className="material-symbols-outlined text-base">{icon}</span>
      {label}
    </button>
  );
}

function AuditEntry({ icon, text, time }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-brand-surface-light dark:bg-brand-surface-dark/40 mt-1">
        <span className="material-symbols-outlined text-base text-brand-muted-gray">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-sm">{text}</p>
        <p className="text-xs text-brand-muted-gray">{time}</p>
      </div>
    </div>
  );
}
