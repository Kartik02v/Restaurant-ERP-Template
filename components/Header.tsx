import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <svg
            className="h-8 w-8 text-heading dark:text-highlight"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-xl font-bold uppercase tracking-wider text-heading dark:text-white">
            Gourmet
          </h2>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-bold uppercase tracking-widest text-heading dark:text-gray-300 md:flex">
          <Link
            className="transition-colors hover:text-primary dark:hover:text-highlight"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="transition-colors hover:text-primary dark:hover:text-highlight"
            href="/locations"
          >
            Locations
          </Link>
          <Link
            className="transition-colors hover:text-primary dark:hover:text-highlight"
            href="/reservations"
          >
            Reservations
          </Link>
          <Link
            className="transition-colors hover:text-primary dark:hover:text-highlight"
            href="/about"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-sm font-bold uppercase tracking-widest text-heading transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-highlight md:block"
          >
            Login
          </Link>
          <Link
            href="/order"
            className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <span className="truncate">Order Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
}


