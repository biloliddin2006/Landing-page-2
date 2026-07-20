import { useState } from "react";
import Barberton from '../assets/Barberton Daisy.png'
import Blushing from '../assets/Blushing Bromeliad.png'
import Aluminium from '../assets/Aluminum Plant.png'

const products = [
  {
    id: 1,
    name: "Barberton Daisy",
    qty: 2,
    price: 238,
    image: Barberton,
  },
  {
    id: 2,
    name: "Blushing Bromeliad",
    qty: 4,
    price: 834,
    image: Blushing,
  },
  {
    id: 3,
    name: "Aluminum Plant",
    qty: 6,
    price: 1611,
    image: Aluminium,
  },
];

export function Checkout() {
  const [payment, setPayment] = useState("cod");

  const subtotal = products.reduce((acc, item) => acc + item.price, 0);
  const shipping = 16;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-sm text-gray-500 mb-8">
        Home / Shop / <span className="text-black">Checkout</span>
      </p>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left */}
        <div className="lg:col-span-2">
          <h2 className="font-semibold text-xl mb-6">Billing Address</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <Input label="First Name *" />
            <Input label="Last Name *" />

            <Select label="Country / Region *" />
            <Input label="Town / City *"/>

            <Input
              label="Street Address *"
              placeholder="House number and street name"
            />
            <Input placeholder="Apartment, suite, unit, etc. (optional)"/>

            <Select label="State *" />
            <Input label="Zip *" />

            <Input
              label="Email Address *"
              type="email"
            />

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number *
              </label>

              <div className="flex">
                <select className="border rounded-l-md px-3 bg-white">
                  <option>+966</option>
                </select>

                <input
                  className="w-full border border-l-0 rounded-r-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>

          <label className="flex items-center gap-2 mt-6 text-sm">
            <input type="checkbox" />
            Ship to a different address?
          </label>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">
              Order notes (optional)
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <h2 className="font-semibold text-xl mb-6">Your Order</h2>

          <div className="space-y-5">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded object-cover"
                />

                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>

                  <p className="text-xs text-gray-500">
                    SKU: 199575187796
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    (x {item.qty})
                  </p>

                  <p className="font-semibold text-green-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 text-sm">
            <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />

            <Row label="Coupon Discount" value="(-) $0.00" />

            <Row label="Shipping" value={`$${shipping.toFixed(2)}`} />

            <hr />

            <Row
              label="Total"
              value={`$${total.toFixed(2)}`}
              bold
            />
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">
              Payment Method
            </h3>

            <div className="space-y-3">
              <PaymentOption
                checked={payment === "card"}
                onChange={() => setPayment("card")}
                label="PayPal / Credit Card"
              />

              <PaymentOption
                checked={payment === "bank"}
                onChange={() => setPayment("bank")}
                label="Direct Bank Transfer"
              />

              <PaymentOption
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
                label="Cash on Delivery"
              />
            </div>

            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder = "",
  type = "text",
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium mb-2">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <select className="w-full border rounded-md px-3 py-2 bg-white outline-none focus:ring-2 focus:ring-green-500">
        <option>Select</option>
      </select>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div
      className={`flex justify-between ${
        bold ? "font-semibold text-lg" : ""
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function PaymentOption({
  checked,
  onChange,
  label,
}) {
  return (
    <label
      className={`flex items-center gap-3 border rounded-md p-3 cursor-pointer ${
        checked ? "border-green-500" : ""
      }`}
    >
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
}