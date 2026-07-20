import { Heart, Minus, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.png'
import { FetchData } from "../api/FetchData";

  const images = [img1, img2, img3, img4];

  const products = [
    {
      id: 1,
      name: "Beach Spider Lily",
      price: "$129.00",
      image: img1,
    },
    {
      id: 2,
      name: "Blushing Bromeliad",
      price: "$139.00",
      image: img2,
    },
    {
      id: 3,
      name: "Aluminum Plant",
      price: "$179.00",
      image: img3,
    },
    {
      id: 4,
      name: "Bird's Nest Fern",
      price: "$99.00",
      image: img4,
    },
    {
      id: 5,
      name: "Chinese Evergreen",
      price: "$39.00",
      image: img5,
    },
  ];

  const sizes = ["S", "M", "L", "XL"];

  export function ProductPage() {
    const { id } = useParams();
    console.log(id);

  const [product, setProduct] = useState(null);


    useEffect(()=>{
    async function loadProducts() {
      const products = await FetchData();
      const found = products.find((e)=> Number(e.id) === Number(id));

      setProduct(found);
    }
    loadProducts();
  },[id])
    

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedSize, setSelectedSize] = useState("S");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    return (
      <>
        <section>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-sm text-gray-500 mb-8">
              Home <span className="mx-2">/</span> Shop
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <div className="flex flex-col gap-4 shrink-0">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`w-40 h-40 rounded border overflow-hidden transition ${
                        selectedImage === img
                          ? "border-green-500"
                          : "border-gray-200"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div className="relative flex-1">
                  <button className="absolute top-5 right-5">
                    <Search size={18} className="text-gray-500" />
                  </button>

                  <img
                    src={product?.image}
                    alt="Product"
                    className="w-full h-[700px] object-contain "
                  />
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-semibold">{product?.name}</h1>

                <p className="text-3xl font-bold text-green-600 mt-3">${product?.price}</p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="text-yellow-400">★★★★★</div>
                  <span className="text-sm text-gray-500">
                    19 Customer Reviews
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold">Short Description:</h3>

                  <p className="text-gray-500 mt-2 leading-7">
                    The ceramic cylinder planters come with a wooden stand to help
                    elevate your plants off the ground. The ceramic cylinder planters
                    come with a wooden stand to help elevate your plants off the
                    ground.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">Size:</h3>

                  <div className="flex gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-full border transition ${
                          selectedSize === size
                            ? "border-green-500 text-green-600 font-semibold"
                            : "border-gray-300"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        setQuantity((q) => Math.max(1, q - 1))
                      }
                      className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold text-lg">{quantity}</span>

                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700"
                    onClick={() =>
                      navigate("/checkout", {
                        state: {
                          product: {
                            id: 1,
                            name: "Barberton Daisy",
                            price: 119,
                            quantity,
                            size: selectedSize,
                            image: selectedImage,
                          },
                        },
                      })}>

                    BUY NOW
                  </button>

                  <button className="border border-green-600 text-green-600 px-8 py-3 rounded hover:bg-green-50">
                    ADD TO CART
                  </button>

                  <button className="w-12 h-12 rounded border border-green-500 flex items-center justify-center">
                    <Heart size={20} className="text-green-600" />
                  </button>
                </div>

                <div className="mt-10 space-y-2 text-sm text-gray-500">
                  <p>
                    <span className="font-medium text-gray-700">SKU:</span>{" "}
                    1995751877966
                  </p>

                  <p>
                    <span className="font-medium text-gray-700">Categories:</span>{" "}
                    Potter Plants
                  </p>

                  <p>
                    <span className="font-medium text-gray-700">Tags:</span> Home,
                    Garden, Plants
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <span className="font-medium">Share this product:</span>

                  <div className="flex gap-4 text-gray-600">
                    <span>f</span>
                    <span>𝕏</span>
                    <span>in</span>
                    <span>✉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto mt-16">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-4 text-sm font-medium transition ${
                    activeTab === "description"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500"
                  }`}
                >
                  Product Description
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-4 text-sm font-medium transition ${
                    activeTab === "reviews"
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-500"
                  }`}
                >
                  Reviews (19)
                </button>
              </div>
            </div>

            <div className="py-8 text-gray-500 text-sm leading-7 space-y-6">
              {activeTab === "description" ? (
                <>
                  <p>
                    The ceramic cylinder planters come with a wooden stand to help
                    elevate your plants off the ground. The ceramic cylinder planters
                    come with a wooden stand to help elevate your plants off the
                    ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum.
                  </p>

                  <p>
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                    feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                    tempus ante. Fusce ultricies massa massa, nec feugiat nisl
                    vulputate ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Living Room:
                    </h3>
                    <p>
                      The ceramic cylinder planters come with a wooden stand to help
                      elevate your plants off the ground. The ceramic cylinder
                      planters come with a wooden stand to help elevate your plants
                      off the ground.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Dining Room:
                    </h3>
                    <p>
                      The benefits of houseplants are endless. In addition to cleaning
                      the air of harmful toxins, they can help improve your mood,
                      reduce stress and provide you with better sleep.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Office:
                    </h3>
                    <p>
                      The ceramic cylinder planters come with a wooden stand to help
                      elevate your plants off the ground. The ceramic cylinder
                      planters come with a wooden stand to help elevate your plants
                      off the ground.
                    </p>
                  </div>
                </>
              ) : (
                <div className="py-10 text-center text-gray-500">
                  No reviews yet.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-green-600 font-semibold whitespace-nowrap">
              Related Products
            </h2>

            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-gray-50 h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-green-600 font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <span className="w-2 h-2 rounded-full border border-green-500"></span>

            <span className="w-2 h-2 rounded-full bg-green-500"></span>

            <span className="w-2 h-2 rounded-full border border-green-500"></span>
          </div>
        </section>
      </>
    );
  }