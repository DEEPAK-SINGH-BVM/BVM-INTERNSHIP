import Span from "../Element/Box/Box";
import BoxModel from "../Element/Box/Box";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/DashyQR.png",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/GgosiusXYAA2cdp.jpeg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 3,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://media.dash.org/wp-content/uploads/62PdCouTvNPDFdqJorCLnfauvZdwTKWtZntNNHJQanu8qs7PSbCvMhqBqw1JLU8PzopWDBtQTojuQ31tmyRwfdjiuHJc7Rp8MV5mnr6hrPuroJn.png",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: "https://media.dash.org/wp-content/uploads/GkKryyxWAAAEwRE.jpeg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
];

export default function Box() {
  return (
    <div className="bg-white text-center mt-30">
      <h2 className="text-4xl font-bold text-sky-500  tracking-tight text-gray-900">
        Latest news and reviews
      </h2>
      {/*  */}
      <div className="max-w-7xl mx-auto px- pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3   gap-6 text-center">
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/DashyQR.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/GgosiusXYAA2cdp.jpeg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/4PYjjVwJ1UdtKm2UoLdRggqmP8si9jxVB4qXcg8PFw3fnYKZchaC1JorCnmHSfDgr5uq9k5aFSEBCtNbJqw8tgF82m4x1ztEEGbbF3NpKVY.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/introducing-dash-evolution-the-future-of-decentralized-applications.jpg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/image-10.png"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
          <BoxModel
            h6={"August 26, 2024"}
            h4={"1 min Read"}
            src="https://media.dash.org/wp-content/uploads/GTgdvkhXkAAkat-.jpeg"
            h5="Dash QR Swaps Are Here for Everyone via LeoDEX"
            p="We’re looking to build the ultimate digital cash experience. And we need your help. TL;DR we’re need your help. TL;DR we’re looking for crypto companies,... "
          />
        </div>
      </div>
    </div>
  );
}
