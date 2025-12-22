import React, { useState } from "react";
import { Search, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { initiatePayment } from "../utils/paymentUtils";
import { useNavigate } from "react-router-dom";

const FoodMenu = () => {
  const [isVeg, setIsVeg] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  const foodData = {
    appetizers: [
      {
        name: "Crispy Samosa",
        description: "Golden fried pastry filled with spiced potatoes and peas",
        price: "₹40",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
      },
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese cubes grilled to perfection",
        price: "₹160",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&q=80",
      },
      {
        name: "Spring Rolls",
        description: "Crispy rolls filled with stir-fried vegetables",
        price: "₹120",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1544025162-d76690b67f61?w=500&q=80",
      },
      {
        name: "French Fries",
        description: "Crispy golden salted fries",
        price: "₹90",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1518013431117-e595ed537965?w=500&q=80",
      },
      {
        name: "Chicken 65",
        description: "Spicy, deep-fried chicken dish from Chennai",
        price: "₹200",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80",
      },
      {
        name: "Fish Fingers",
        description: "Crispy breaded fish strips with tartar sauce",
        price: "₹180",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1626703411326-27e8a83bdadb?w=500&q=80",
      },
    ],
    soups: [
      {
        name: "Tomato Soup",
        description: "Classic creamy tomato soup with croutons",
        price: "₹80",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80",
      },
      {
        name: "Sweet Corn Soup",
        description: "Indo-Chinese style soup with sweet corn and veggies",
        price: "₹90",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=500&q=80",
      },
      {
        name: "Manchow Soup",
        description: "Spicy soup with vegetables and fried noodles",
        price: "₹100",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80",
      },
      {
        name: "Chicken Clear Soup",
        description: "Light and flavorful chicken broth",
        price: "₹120",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=500&q=80",
      },
    ],
    salads: [
      {
        name: "Garden Fresh Salad",
        description: "Sliced cucumbers, tomatoes, carrots, and onions",
        price: "₹80",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
      },
      {
        name: "Caesar Salad",
        description:
          "Crisp lettuce with parmesan, croutons and caesar dressing",
        price: "₹140",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
      },
      {
        name: "Grilled Chicken Salad",
        description: "Salad greens topped with grilled chicken breast",
        price: "₹180",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&q=80",
      },
    ],
    mainCourses: [
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes in rich creamy tomato gravy",
        price: "₹220",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
      },
      {
        name: "Dal Makhani",
        description: "Whole black lentils cooked with butter and cream",
        price: "₹180",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
      },
      {
        name: "Chana Masala",
        description: "Spicy white chickpeas curry",
        price: "₹160",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80",
      },
      {
        name: "Veg Biryani",
        description: "Aromatic rice cooked with mixed vegetables and spices",
        price: "₹200",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80",
      },
      {
        name: "Butter Chicken",
        description: "Chicken cooked in a mildly spiced tomato sauce",
        price: "₹280",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80",
      },
      {
        name: "Chicken Biryani",
        description: "Layered rice dish with spiced chicken",
        price: "₹250",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80",
      },
      {
        name: "Mutton Rogan Josh",
        description: "Aromatic lamb dish of Persian origin",
        price: "₹350",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80",
      },
    ],
    sideDishes: [
      {
        name: "Butter Naan",
        description: "Soft leavened bread cooked in tandoor",
        price: "₹40",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&q=80",
      },
      {
        name: "Tandoori Roti",
        description: "Whole wheat bread cooked in clay oven",
        price: "₹30",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&q=80",
      },
      {
        name: "Jeera Rice",
        description: "Basmati rice flavored with cumin seeds",
        price: "₹120",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&q=80",
      },
      {
        name: "Mixed Raita",
        description: "Yogurt with cucumber, tomato and spices",
        price: "₹60",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&q=80",
      },
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Deep-fried dough balls soaked in sugar syrup",
        price: "₹60",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1606313564559-46950d3bc2ee?w=500&q=80",
      },
      {
        name: "Rasgulla",
        description: "Ball-shaped dumplings of chhena and semolina",
        price: "₹60",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1589119908688-c87898fb50b7?w=500&q=80",
      },
      {
        name: "Choice of Ice Cream",
        description: "Vanilla, Chocolate, or Strawberry",
        price: "₹80",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80",
      },
      {
        name: "Chocolate Brownie",
        description: "Rich chocolate brownie with walnuts",
        price: "₹100",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500&q=80",
      },
    ],
    beverages: [
      {
        name: "Masala Chai",
        description: "Indian spiced tea with milk",
        price: "₹30",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=500&q=80",
      },
      {
        name: "Filter Coffee",
        description: "Strong South Indian coffee",
        price: "₹40",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
      },
      {
        name: "Sweet Lassi",
        description: "Yogurt-based sweet drink",
        price: "₹70",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80",
      },
      {
        name: "Fresh Fruit Juice",
        description: "Seasonal fresh fruit juice",
        price: "₹80",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
      },
    ],
    specials: [
      {
        name: "Special Veg Thali",
        description: "Rice, Dal, 2 Sabzi, Roti, Raita, Sweet, Papad",
        price: "₹250",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80",
      },
      {
        name: "Chicken Thali",
        description: "Rice, Dal, Chicken Curry, Roti, Raita, Sweet",
        price: "₹320",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=500&q=80",
      },
      {
        name: "Veg Supreme Pizza",
        description: "Topped with onion, capsicum, mushroom, corn",
        price: "₹350",
        type: "veg",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
      },
      {
        name: "Classic Chicken Burger",
        description: "Grilled chicken patty with cheese and veggies",
        price: "₹180",
        type: "non-veg",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
      },
    ],
  };

  const handleCheckout = async () => {
      const subtotal = getTotalPrice();
      const deliveryCharge = 50;
      const gst = Math.round((subtotal + deliveryCharge) * 0.05);
      const totalAmount = subtotal + deliveryCharge + gst;

      const bookingData = {
        pnr: "PNR123456789",
        trainNumber: "12345",
        trainName: "Express Train",
        deliveryDetails: {
          stationCode: "NDLS",
          stationName: "New Delhi",
          coach: "A1",
          seat: "25",
          deliveryTime: new Date(),
        },
        items: cart.map((item) => ({
          name: item.name,
          restaurant: "RailSync Kitchen",
          quantity: item.quantity,
          price: parseInt(item.price.replace("₹", "")),
        })),
        contactPhone: "9876543210",
        subtotal,
        deliveryCharge,
        gst,
        totalAmount,
      };

      const userDetails = {
        name: "User",
        email: "user@example.com",
        phone: "9876543210",
      };

      await initiatePayment(
        "food",
        bookingData,
        userDetails,
        (response) => {
          setCart([]);
          setShowCart(false);
          navigate("/dashboard", { state: { section: "history" } });
        },
        (error) => console.error(error)
      );
    };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    const existingItem = cart.find((cartItem) => cartItem.name === itemName);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.name !== itemName));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === itemName
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace("₹", ""));
      return total + price * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const VegIndicator = () => (
    <span className="inline-block w-4 h-4 border-2 border-green-600 relative mr-2 align-middle rounded-sm">
      <span className="absolute w-2 h-2 bg-green-600 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    </span>
  );

  const NonVegIndicator = () => (
    <span className="inline-block w-4 h-4 border-2 border-red-600 relative mr-2 align-middle rounded-sm">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-8 border-b-red-600"></span>
    </span>
  );

  const FoodCard = ({ item }) => {
    const isInCart = cart.find((cartItem) => cartItem.name === item.name);

    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#008BD0] transition-all duration-300 group">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            {item.type === "veg" ? <VegIndicator /> : <NonVegIndicator />}
          </div>
        </div>
        <div className="p-4">
          <div className="text-lg font-semibold text-[#1C335C] mb-1">
            {item.name}
          </div>
          <div className="text-gray-600 text-sm leading-relaxed mb-3 h-10 overflow-hidden">
            {item.description}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-[#008BD0]">{item.price}</div>
            <button
              onClick={() => addToCart(item)}
              className="bg-[#008BD0] hover:bg-[#006BA0] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-1"
            >
              <Plus size={16} />
              Add
            </button>
          </div>
          {isInCart && (
            <div className="mt-2 text-xs text-green-600 font-semibold">
              {isInCart.quantity} in cart
            </div>
          )}
        </div>
      </div>
    );
  };

  const CategorySection = ({ title, items }) => {
    const filteredItems = items.filter((item) => {
      const matchesType = item.type === (isVeg ? "veg" : "non-veg");
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });

    if (filteredItems.length === 0) return null;

    

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-[#1C335C] mb-4 flex items-center gap-2">
          {title}
          <span className="text-sm font-normal text-gray-500">
            ({filteredItems.length})
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#1C335C]">
                Food Services
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Browse our curated menu for your journey
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
              <span
                className={`text-sm font-semibold ${
                  isVeg ? "text-green-700" : "text-gray-700"
                }`}
              >
                Veg
              </span>
              <button
                onClick={() => setIsVeg(!isVeg)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                  isVeg ? "bg-green-500" : "bg-red-500"
                }`}
                aria-label="Toggle veg/non-veg"
                aria-pressed={isVeg}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    isVeg ? "translate-x-0" : "translate-x-7"
                  }`}
                ></span>
              </button>
              <span
                className={`text-sm font-semibold ${
                  !isVeg ? "text-red-700" : "text-gray-700"
                }`}
              >
                Non-Veg
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008BD0] focus:border-transparent"
            />
          </div>
        </div>

        {/* Food Categories */}
        <CategorySection title="Appetizers" items={foodData.appetizers} />
        <CategorySection title="Soups" items={foodData.soups} />
        <CategorySection title="Salads" items={foodData.salads} />
        <CategorySection title="Main Courses" items={foodData.mainCourses} />
        <CategorySection title="Side Dishes" items={foodData.sideDishes} />
        <CategorySection title="Desserts" items={foodData.desserts} />
        <CategorySection title="Beverages" items={foodData.beverages} />
        <CategorySection title="Specials" items={foodData.specials} />
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 bg-[#008BD0] hover:bg-[#006BA0] text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center gap-2 z-50"
        >
          <ShoppingCart size={24} />
          <span className="font-semibold">{getTotalItems()}</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cart.length}
          </span>
        </button>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setShowCart(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#1C335C]">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-[#1C335C] flex items-center gap-1">
                              {item.type === "veg" ? (
                                <VegIndicator />
                              ) : (
                                <NonVegIndicator />
                              )}
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="bg-white border border-gray-300 rounded-lg p-1 hover:bg-gray-100 transition"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold text-[#1C335C] w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-white border border-gray-300 rounded-lg p-1 hover:bg-gray-100 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-[#1C335C]">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-[#008BD0]">
                    ₹{getTotalPrice()}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#008BD0] hover:bg-[#006BA0] text-white py-3 rounded-lg font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodMenu;
