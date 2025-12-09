import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-background-dark dark:border-t dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="border-t-4 border-highlight pt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
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
              </div>
              <p className="mt-4 text-body dark:text-gray-400">
                The finest ingredients, prepared by world-class chefs. Welcome to
                an unforgettable dining experience.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading dark:text-gray-200">
                  Links
                </h3>
                <nav className="mt-4 flex flex-col gap-2">
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    Menu
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    Reservations
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    Catering
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    About Us
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading dark:text-gray-200">
                  Contact
                </h3>
                <div className="mt-4 flex flex-col gap-2 text-body dark:text-gray-400">
                  <p>
                    123 Luxury Lane,<br />
                    Gourmet City, 45678
                  </p>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading dark:text-gray-200">
                  Legal
                </h3>
                <nav className="mt-4 flex flex-col gap-2">
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    Terms of Service
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-heading dark:text-gray-200">
                  Follow Us
                </h3>
                <div className="mt-4 flex gap-4">
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    className="text-body transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-highlight"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-1.11a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <p className="text-center text-sm text-body dark:text-gray-500">
              © 2024 Gourmet Restaurant. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


