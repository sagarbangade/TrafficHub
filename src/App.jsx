import React, { useState } from 'react';
import { ChevronDown, Filter, ArrowLeft, Search } from 'lucide-react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './index.css';

const FoodCategories = () => {
  const navigate = useNavigate();
  const foodItems = [
    { id: 1, name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop' },
    { id: 2, name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop' },
    { id: 3, name: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=400&fit=crop' },
    { id: 4, name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop' },
    { id: 5, name: 'Rolls', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=400&fit=crop' },
    { id: 6, name: 'Cake', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
    { id: 7, name: 'Pakoda', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop' },
    { id: 8, name: 'Dosa', image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop' },
    { id: 9, name: 'Noodles', image: 'https://images.unsplash.com/photo-1634864572865-1c31f05e3f96?w=400&h=400&fit=crop' },
    { id: 10, name: 'Pure Veg', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop' },
    { id: 11, name: 'Pav Bhaji', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop' },
    { id: 12, name: 'Shawarma', image: 'https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?w=400&h=400&fit=crop' }
  ];


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Order our best food options</h1>
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
            onClick={() => navigate(`/restaurants/${item.name.toLowerCase()}`)}
          >
            <div className="relative w-32 h-32 mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <span className="text-center font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: 'Circle Of Crust',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop',
      rating: 4.3,
      deliveryTime: '30-35 mins',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
      location: 'Hinjewadi',
      offer: '60% OFF UPTO ₹150',
      promoted: true,
    },
    {
      id: 2,
      name: 'Crazy Cheesy',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=300&fit=crop',
      rating: 4.1,
      deliveryTime: '35-40 mins',
      cuisines: ['Fast Food', 'Pizzas', 'Snacks', 'Desserts'],
      location: 'Wakad',
      offer: '20% OFF UPTO ₹125',
    },
    {
      id: 3,
      name: 'Eagle Boys Pizzeria And Cafe',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=300&fit=crop',
      rating: 4.1,
      deliveryTime: '35-40 mins',
      cuisines: ['Pizzas', 'Italian', 'American', 'Fast Food'],
      location: 'Wakad',
      offer: 'ITEMS AT ₹59',
      promoted: true,
    },
    {
      id: 4,
      name: 'MOJO Pizza - 2X Toppings',
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&h=300&fit=crop',
      rating: 4.5,
      deliveryTime: '20-30 mins',
      cuisines: ['Pizzas', 'Italian', 'Fast Food', 'Desserts'],
      location: 'Hinjewadi',
      offer: '₹100 OFF ABOVE ₹299',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Categories
        </button>
        <h1 className="text-3xl font-bold mb-2">{category}</h1>
        <p className="text-gray-600">
          {category === 'Pizza' 
            ? 'Cheesilicious pizzas to make every day extraordinary.'
            : `Best ${category} options in your area.`}
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <span>Sort By</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Restaurants to explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="cursor-pointer group"
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            >
              <div className="relative mb-2">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl">
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {restaurant.offer}
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">
                    {restaurant.promoted && (
                      <span className="text-xs bg-gray-100 text-gray-500 px-1 py-0.5 rounded mr-2">
                        Ad
                      </span>
                    )}
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-green-100 px-1 py-0.5 rounded">
                    <span className="text-sm text-green-700">⭐ {restaurant.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>🕒 {restaurant.deliveryTime}</span>
                </div>
                <div className="text-gray-500 text-sm">{restaurant.cuisines.join(', ')}</div>
                <div className="text-gray-500 text-sm">{restaurant.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('order');
  const [selectedFilters, setSelectedFilters] = useState(['veg']);

  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10">
        <div className="p-4 flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-bold text-lg">Circle Of Crust</h1>
            <p className="text-sm text-gray-500">Pizza, Italian</p>
          </div>
        </div>

        <div className="border-b">
          <div className="flex px-4">
            <button 
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'order' 
                  ? 'text-orange-500 border-orange-500' 
                  : 'text-gray-600 border-transparent'
              }`}
              onClick={() => setActiveTab('order')}
            >
              Order Online
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'review' 
                  ? 'text-orange-500 border-orange-500' 
                  : 'text-gray-600 border-transparent'
              }`}
              onClick={() => setActiveTab('review')}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">⭐ 4.3</span>
            <span className="text-xs text-gray-500">(1k+ ratings)</span>
          </div>
          <div className="text-sm text-gray-500">30-35 mins</div>
          <div className="text-sm text-gray-500">₹300 for two</div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
          <div className="flex-none bg-orange-50 rounded-lg p-3">
            <p className="text-orange-500 text-sm font-medium">60% OFF up to ₹150</p>
            <p className="text-orange-500 text-xs">USE WELCOMEORDER</p>
          </div>
          <div className="flex-none bg-orange-50 rounded-lg p-3">
            <p className="text-orange-500 text-sm font-medium">FREE DELIVERY</p>
            <p className="text-orange-500 text-xs">Above ₹199</p>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for dishes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>

        <div className="flex gap-3 mb-6">
          <button 
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedFilters.includes('veg') 
                ? 'border-green-500 text-green-500' 
                : 'border-gray-300'
            }`}
          >
            Veg Only
          </button>
          <button className="px-3 py-1 rounded-full text-sm border border-gray-300">
            Bestseller
          </button>
          <button className="px-3 py-1 rounded-full text-sm border border-gray-300">
            Non Veg
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-lg">Recommended (15)</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 border-2 border-green-500 rounded-full"></div>
                    <h3 className="font-medium">Margherita Pizza</h3>
                  </div>
                  <p className="text-gray-900 mb-1">₹299</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <span>⭐ 4.2</span>
                    <span>(87)</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Classic delight with 100% real mozzarella cheese
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img 
                    src="/api/placeholder/120/120" 
                    alt="Margherita Pizza"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <button className="px-6 py-1 text-green-600 border border-gray-200 rounded">
                    ADD
                  </button>
                  <span className="text-xs text-gray-500">Customizable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FoodCategories />} />
      <Route path="/restaurants/:category" element={<RestaurantList />} />
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
    </Routes>
  );
};

export default App;
