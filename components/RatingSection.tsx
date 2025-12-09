import Image from "next/image";

export default function RatingSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-baseline">
              <span className="text-7xl font-black text-heading dark:text-white">
                4.8
              </span>
              <span className="text-2xl font-bold text-gray-500">/ 5</span>
            </div>
            <div className="mt-2 flex items-center text-highlight">
              <span className="material-symbols-outlined !text-4xl">star</span>
              <span className="material-symbols-outlined !text-4xl">star</span>
              <span className="material-symbols-outlined !text-4xl">star</span>
              <span className="material-symbols-outlined !text-4xl">star</span>
              <span className="material-symbols-outlined !text-4xl">
                star_half
              </span>
            </div>
            <p className="mt-2 text-lg font-medium text-body dark:text-gray-300">
              Based on 1,200+ Google Reviews
            </p>
          </div>
          <div className="h-32 w-px bg-gray-200 dark:bg-gray-700 hidden lg:block"></div>
          <div className="flex items-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                className="h-24 w-24"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwtMN8wKOGpQK-8gl0IdTEidhvVV1ENo4gGNIVhdI3zfK82Plse75UeLtqaxlW6MVKpMljoH_WTIGSZQTSkQTjH2H1__mOGgMaUyJRqXWNY0QlpbkO2HuVDVGyEsatvgIp1Pi3KkXGkhxM8kfBGh7vdkasIajBzkIAUklSuNf-gjXyEf6DCW5SWPcWdzJ9bibJkOsjRYPHWOploOiX73iUnZ4jksbURJmuALYMqnUYSpV2z6-GaI3DYmspcZM17aMwV1ROGSi_fCmL"
                alt="Food safety certification badge"
                width={96}
                height={96}
              />
              <p className="font-bold uppercase tracking-wider text-heading dark:text-gray-300">
                Certified Food Safety
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <Image
                className="h-24 w-24"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtqsZKA4RlVDN-rgHP_O_ecwnf_7GKmGXQC0L8SE14nrXcnkv_ZOv5Mn_0ZriyvLpujE9xuicyVsNBgi_SmqquGv29BBLCxlv-bemquBrkwP-miWIFXLi2JJtGXFLc2J1UwhmoubhJB7abkNNKMeN_3E_E_ZwK9kkoMX8YzBRjWuTpz7uYPHlTt8vwo0MZ6CCLmDSsBt8KHZLIWFlqQCxN9SpzCgBaidkvCeo3rW_ZYuK1vpjxcAKiriCX1otxWz8zTHBPV9aQslrs"
                alt="Hygiene standards badge"
                width={96}
                height={96}
              />
              <p className="font-bold uppercase tracking-wider text-heading dark:text-gray-300">
                A+ Hygiene Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


