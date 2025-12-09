import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto max-w-7xl px-6 pb-20 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-left">
            <div className="mb-4 inline-block rounded-full bg-highlight/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-highlight">
              20% Off First Online Order
            </div>
            <h1 className="text-5xl font-black uppercase tracking-tight text-heading dark:text-white lg:text-7xl">
              Experience<br />Culinary Excellence
            </h1>
            <p className="mt-6 text-lg text-body dark:text-gray-300">
              Crafted with passion, served with pride. Discover a world of
              flavors where every dish tells a story.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {/* MODIFIED: Changed button to Link and added href="/customer/menu" */}
              <Link
                href="/customer/menu"
                className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-widest text-white shadow-md transition-shadow hover:shadow-xl"
              >
                <span className="truncate">View Full Menu</span>
              </Link>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 px-8 py-4 text-base font-bold uppercase tracking-widest text-heading shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800 dark:text-white">
                <span className="truncate">Reserve a Table</span>
              </button>
            </div>
          </div>
          <div className="relative flex h-80 items-center justify-center lg:h-auto">
            <Image
              className="h-full w-full rounded-lg object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQa3Vmr8h5Az4-aLfZswdTDGx6qAT8DG5fgQfB6li7SujtBxZ2izjupaVEgsuPnwe7V5SZmAnP7LbCNkD4FK181LcTGfwpy15B1nBnx7KRi1ED7DV89caKRBHDsylzS5zAmHtbigvMmqpmJbdpmF0tmhTNKaisEHVlxrBb32PsDT8DDKoBS4-tojLr7CfKkUKowrwV4U-x5lkWpXRaAydmJhbH_7IXmL4iuniJ3HBFB67Jr5HLyZVjv9hD_rJyQCv6FSkLrpoHQ2Yk"
              alt="A beautifully plated dish with fresh vegetables and salmon on a white plate"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}