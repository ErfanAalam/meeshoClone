import React from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import { CircleCheck, MapPin, MoveRight, Trash2 } from "lucide-react";

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (sum, item) => sum + Number(item.price.replace("₹", "")) * item.quantity,
    0
  );

  return (
    <div
      style={{
        background: "#faf9fb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Progress Bar */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "12px 0 0 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 18px",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 18 }}>CART</span>
        </div>
        {/* Progress Bar with connecting line */}
        <div
          style={{
            position: "relative",
            padding: "24px 18px 0 18px",
            height: 40,
          }}
        >
          {/* Horizontal line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "70px",
              right: "10px",
              height: 2,
              background: "#e0e0e0",
              zIndex: 0,
              transform: "translateY(-50%)",
              width: "65%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {["Cart", "Address", "Payment", "Summary"].map((step, idx) => (
              <div key={step} style={{ textAlign: "center", flex: 1 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    borderColor: idx === 0 ? "#5585F8" : "#888",
                    padding: 2,
                    borderWidth: 2,
                    borderStyle: "solid",
                    color: idx === 0 ? "#5585F8" : "#888",
                    background: "#fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    marginBottom: 2,
                    fontWeight: 700,
                  }}
                >
                  {idx + 1}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: idx === 0 ? "#5585F8" : "#888",
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cart Items */}
      <div
        style={{ background: "#fff", margin: "12px 0", padding: "0 0 12px 0" }}
      >
        {cart.map((item) => (
          <div
            key={item.id + item.size}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 16,
              borderBottom: "1px solid #f2f2f2",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: 100, height: 200, objectFit: "cover" }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>
                  {item.name}
                </div>
                <Trash2
                  onClick={() => removeFromCart(item.id, item.size)}
                  style={{ color: "#888", fontSize: 20, cursor: "pointer" }}
                  title="Remove"
                  size={20}
                />
              </div>
              <div style={{ color: "gray", fontWeight: 600, fontSize: 15 }}>
                ₹{item.price.replace("₹", "")}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ color: "#444", fontSize: 14 }}>
                  Size: {item.size}
                </div>
                <div style={{ color: "#444", fontSize: 14 }}>
                  Qty: {item.quantity.toString().padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Section */}
      <div
        style={{
          background: "#fff",
          margin: "0 0 12px 0",
          padding: "12px 18px",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span>Shipping:</span>
          <span style={{ color: "#038D63", fontWeight: 600 }}>FREE</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <span>Total Product Price:</span>
          <span style={{}}>₹{cartTotal.toFixed(2)}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            fontWeight: 600,
          }}
        >
          <span>Order Total:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
      </div>
      {/* Meehso Safe Section */}
      <div
        style={{
          background: "#fff",
          margin: "0 0 12px 0",
          padding: "12px 18px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <img
          src="https://images.meesho.com/images/marketing/1588578650850.webp"
          alt="Meehso Safe"
          style={{ width: 90, height: 60, objectFit: "contain" }}
        />
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              color: "#a020f0",
              marginBottom: 2,
            }}
          >
            Your Safety, Our Priority
          </div>
          <div style={{ color: "#444", fontSize: 13 }}>
            We make sure that your package is safe at every point of contact.
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "90%",
          background: "#fff",
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 18px",
          zIndex: 100,
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            ₹{cartTotal.toFixed(2)}
          </div>
          <div
            style={{
              color: "#a020f0",
              fontSize: 13,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            VIEW PRICE DETAILS
          </div>
        </div>
        <button
          style={{
            background: "#a020f0",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={() => navigate("/address")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function AddressPage() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    fullName: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "Andhra Pradesh",
    house: "",
    road: "",
  });
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save address logic here
    // navigate("/payment");
    alert("Address saved");
  };
  return (
    <div style={{ background: "#faf9fb", minHeight: "100vh",width: "98%" }}>
      {/* Progress Bar */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "12px 0 0 0",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", padding: "0 18px" }}
        >
          <span
            style={{ fontWeight: 700, fontSize: 16, cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            &lt;
          </span>
          <span style={{ fontWeight: 700, fontSize: 16, marginLeft: 12 }}>
            ADD DELIVERY ADDRESS
          </span>
        </div>
        <div
          style={{
            position: "relative",
            padding: "24px 18px 0 18px",
            height: 40,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "56%",
              left: "70px",
              right: "10px",
              height: 2,
              background: "#e0e0e0",
              zIndex: 0,
              transform: "translateY(-50%)",
              width: "65%",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {["Cart", "Address", "Payment", "Summary"].map((step, idx) => (
              <div key={step} style={{ textAlign: "center", flex: 1 }}>
                  {idx === 0 ? <CircleCheck size={20} color="#5585F8" /> : (
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        borderColor: "#888",
                        padding: 2,
                        borderWidth: 2,
                        borderStyle: "solid",
                        color: "#888",
                        background: "#fff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                    {idx + 1}
                  </div>
                  )}
                <div
                  style={{
                    fontSize: 13,
                    color: idx === 1 ? "black" : "#888",
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Address Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          margin: "12px 0",
          padding: "0 0 12px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "18px 18px 0 18px",
          }}
        >
          <MapPin size={20} color="#5585F8" />
          Address
        </div>
        <div style={{ padding: "12px" }}>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            style={{
              width: "95%",
              marginBottom: 12,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 15,
            }}
            required
          />
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile number"
            style={{
              width: "95%",
              marginBottom: 12,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 15,
            }}
            required
          />
          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            style={{
              width: "95%",
              marginBottom: 12,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 15,
            }}
            required
          />
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ddd",
                fontSize: 15,
                width: "100%",
              }}
              required
            />
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ddd",
                background: "#fff",
                fontSize: 15,
                width: "100%",
              }}
              required
            >
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <input
            name="house"
            value={form.house}
            onChange={handleChange}
            placeholder="House No., Building Name"
            style={{
              width: "95%",
              marginBottom: 12,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 15,
            }}
            required
          />
          <input
            name="road"
            value={form.road}
            onChange={handleChange}
            placeholder="Road name, Area, Colony"
            style={{
              width: "95%",
              marginBottom: 12,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              fontSize: 15,
            }}
            required
          />
        </div>
        <div style={{ padding: "0 18px 18px 18px" }}>
          <button
            type="submit"
            style={{
              width: "90%",
              background: "#a020f0",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "14px 0",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              position: "fixed",
              bottom: 30,
            }}
            onClick={handleSubmit}
          >
            Save Address and Continue
          </button>
        </div>
      </form>
    </div>
  );
}
