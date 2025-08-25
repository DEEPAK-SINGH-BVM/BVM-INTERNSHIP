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
    <div className="bg-white text-center mt-5">
      <h2 className="text-2xl font-bold text-sky-500  tracking-tight text-gray-900">
        Latest news and reviews
      </h2>
      <div className="flex justify-center  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))} */}

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://media.dash.org/wp-content/uploads/DashyQR.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  Dash QR Swaps Are Here for Everyone via LeoDEX
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://media.dash.org/wp-content/uploads/62PdCouTvNPDFdqJorCLnfauvZdwTKWtZntNNHJQanu8qs7PSbCvMhqBqw1JLU8PzopWDBtQTojuQ31tmyRwfdjiuHJc7Rp8MV5mnr6hrPuroJn.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700">
                  We’re Searching for the Killer Dash App
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://media.dash.org/wp-content/uploads/GWfRHDiXcAAwUzA.jpeg "
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
