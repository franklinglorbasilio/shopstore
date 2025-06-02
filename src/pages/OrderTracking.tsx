
import { useParams, Link } from "react-router-dom";
import { Package, Truck, MapPin, CheckCircle, Clock } from "lucide-react";
import Header from "../components/Header";

const OrderTracking = () => {
  const { orderNumber } = useParams();

  const orderStatus = {
    orderPlaced: { completed: true, date: "Dec 15, 2024 2:30 PM" },
    processing: { completed: true, date: "Dec 15, 2024 4:15 PM" },
    shipped: { completed: true, date: "Dec 16, 2024 9:00 AM" },
    outForDelivery: { completed: false, date: "Dec 17, 2024 (Expected)" },
    delivered: { completed: false, date: "Dec 17, 2024 (Expected)" }
  };

  const orderItems = [
    {
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
      name: "Smart Fitness Watch",
      price: 199.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
    }
  ];

  const trackingSteps = [
    {
      title: "Order Placed",
      description: "Your order has been confirmed",
      icon: CheckCircle,
      completed: orderStatus.orderPlaced.completed,
      date: orderStatus.orderPlaced.date
    },
    {
      title: "Processing",
      description: "Your order is being prepared",
      icon: Package,
      completed: orderStatus.processing.completed,
      date: orderStatus.processing.date
    },
    {
      title: "Shipped",
      description: "Your order is on its way",
      icon: Truck,
      completed: orderStatus.shipped.completed,
      date: orderStatus.shipped.date
    },
    {
      title: "Out for Delivery",
      description: "Your order is out for delivery",
      icon: MapPin,
      completed: orderStatus.outForDelivery.completed,
      date: orderStatus.outForDelivery.date
    },
    {
      title: "Delivered",
      description: "Your order has been delivered",
      icon: CheckCircle,
      completed: orderStatus.delivered.completed,
      date: orderStatus.delivered.date
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={0} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
          <p className="text-lg text-gray-600">Order #{orderNumber}</p>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tracking Progress</h2>
          
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200"></div>
            <div 
              className="absolute left-8 top-8 w-0.5 bg-purple-600 transition-all duration-1000"
              style={{ height: `${(trackingSteps.filter(step => step.completed).length - 1) * 25}%` }}
            ></div>

            <div className="space-y-8">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex items-start">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      step.completed 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-400'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            step.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          {step.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          ) : (
                            <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          )}
                          {step.date}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
          
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">$489.97</span>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
              <p className="text-gray-600">
                John Doe<br />
                123 Main Street<br />
                San Francisco, CA 94102
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Estimated Delivery</h3>
              <p className="text-gray-600">December 17, 2024</p>
              <p className="text-sm text-gray-500 mt-1">Standard shipping (3-5 business days)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
          >
            Continue Shopping
          </Link>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
