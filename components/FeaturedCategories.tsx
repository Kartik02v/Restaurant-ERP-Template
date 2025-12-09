import Image from "next/image";

const categories = [
  {
    name: "Soups",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAn2W99NsOewHbnYLDbYjd5BxCh6dhmH7q04aiMuofELdVlsH0-jH3erzojRq9v4OfbrkFN3EPTzJN7ZwIRkFxw8JyjhYqKQoQTepd04z3vdOKsQ0KoBk4vhZKLLXB8y5ByBMzrXnj5Dxrsi5GAYR57jf1gHN4h5aNw5B-pmDokUyFFzDMow-mduW10mmTQC-mLV2r8UeFS0fQpqgN5z87YC3bdLIxp3LhTqQCQK2lfuRo2NjGxlTkgovBZDyWkJsFMW2pYicjhHpdw",
    alt: "A warm bowl of soup",
  },
  {
    name: "Seafood",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANQtNXnPuI61f1x1bJwEKD4_6FVsQkdrp4-NBGOW8Gqp2eCPe_8eBkDmvjEsCE5Q2iERUlB3OTeEZJkULYYmf7f3kSst57_2mndnlMFBLopoIiKfmNuVl8fB98w5MTyk_rwNROzIk-ulCR7d7dHpmc8E6VubBINB2xq_4uZbAadp679DedftC5LYPLAVH1bDtQS1ZsRPBCx0Tlt3WeUzXlyFddGPVdrEFaxo2aHxB2E8rSkeDhf13F_tPM1b3gUF_qHYOJ4DPcNDa1",
    alt: "Grilled seafood platter with lemon",
  },
  {
    name: "Desserts",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKYgiPuYg0ke7vpmEc5l_veo_vChJq0y3IsywC67OYHQ2fhu0wY5K1e9_HM2fkEHG6o9bDl5CyIe_UsnENnxVSHvv7RD5grbNDZtyaF0l85Vloux-piBDC9l4XbXIpb-Aor8uwUOdH42T9wUaqGZq25ycUaq_Fmr7g8QmzFnyNp75b9YNO-1mQ-Wk8Gf4XB2inTNL05rsZh5I4679CdvVGfZqIdIWXXUgGge2zh4AFgkTcZSLHgrPnGq6EeH2zgTLYysZNXjBk8BUB",
    alt: "A slice of chocolate cake",
  },
  {
    name: "Beverages",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrr-_AiVeVFzfnpLSxdiylQFhdfTdNXKlt4NDyoTw4bZ0fxLTlxxf20z3O8ZnYT-cbeZPGyfrn2xK24zrSxHtqWe2ZURUv44NulODdWhwLbX4jq2WexkpX4XtEg2u6zkHsPw_OoURAOR2oc_sOWR8FdqudngEdZesBbSPnciy1NdK6Y0h-Ocq8-RF_k8HwWT2eUZS87ZMijYzIAY5ITR9yhRKltdW0Mpc2-D0zFaAddOPTOScZ4YbsVHFT0MG-1-w-kl4NdF-3liQZ",
    alt: "Colorful cocktails on a bar counter",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-widest text-heading dark:text-white">
          Featured Categories
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group flex flex-col items-center gap-4 rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800/50"
            >
              <Image
                className="h-32 w-32 rounded-full object-cover ring-4 ring-white/50 transition-transform group-hover:scale-105 dark:ring-gray-900/50"
                src={category.image}
                alt={category.alt}
                width={128}
                height={128}
              />
              <p className="text-base font-bold uppercase tracking-wider text-heading dark:text-gray-300">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


