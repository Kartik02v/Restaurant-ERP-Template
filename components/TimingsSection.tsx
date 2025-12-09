export default function TimingsSection() {
  return (
    <section className="bg-heading dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-white md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-highlight">
              schedule
            </span>
            <p className="text-base font-bold uppercase tracking-wider">
              Live Timings: Open Daily 11 AM - 11 PM
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-highlight">
              storefront
            </span>
            <p className="text-base font-bold uppercase tracking-wider">
              Downtown: <span className="text-green-400">Open Now</span> • Suburb:{" "}
              <span className="text-green-400">Open Now</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


