import React from 'react';

interface OrderingSystemProps {
  restaurantId: string;
  language?: 'fr' | 'en';
}

const OrderingSystem: React.FC<OrderingSystemProps> = ({ restaurantId, language = 'fr' }) => {
  React.useEffect(() => {
    // Injection du script FoodBooking
    const script = document.createElement('script');
    script.src = 'https://www.foodbooking.com/api/js/widget.js';
    script.async = true;
    script.setAttribute('data-restaurant', restaurantId);
    script.setAttribute('data-lang', language);
    script.setAttribute('data-fb-widget', 'addtocart');
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [restaurantId, language]);

  return (
    <div className="foodbooking-container">
      <div id="fb-root"></div>
      <div 
        className="fb-widget-container bg-white rounded-lg shadow-lg p-4" 
        data-restaurant={restaurantId}
      ></div>
    </div>
  );
};

export default OrderingSystem;