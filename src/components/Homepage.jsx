import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const images = {
    staff: 'https://img.lovepik.com/free-png/20210928/lovepik-professionals-png-image_401864255_wh1200.png',  
    visitors: 'https://png.pngitem.com/pimgs/s/464-4646400_transparent-tourists-clipart-tourist-png-png-download.png',  
    events: 'https://png.pngtree.com/png-clipart/20200908/ourmid/pngtree-creative-design-cartoon-emoji-package-event-png-image_2335507.jpg', 
  };

  const handleClick = (componentName) => {
    if (componentName === 'Staff') {
      navigate('/login'); // Navigate to the login page when "Staff" is clicked
    } else {
      alert(`${componentName} clicked!`);
      // You can add more logic here based on the component clicked
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-10">
        {/* Staff Component */}
        <div onClick={() => handleClick('Staff')} className="cursor-pointer">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={images.staff}
              alt="Staff"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-center mt-2 font-semibold text-gray-700">Staff</p>
            </div>
          </div>
        </div>

        {/* Visitors Component */}
        <div onClick={() => handleClick('Visitors')} className="cursor-pointer">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={images.visitors}
              alt="Visitors"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-center mt-2 font-semibold text-gray-700">Visitors</p>
            </div>
          </div>
        </div>

        {/* Events Component */}
        <div onClick={() => handleClick('Events')} className="cursor-pointer">
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={images.events}
              alt="Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-center mt-2 font-semibold text-gray-700">Events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
