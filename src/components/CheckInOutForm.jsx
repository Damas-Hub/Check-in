import React, { useState } from 'react';

const CheckInOutForm = () => {
  const [location, setLocation] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [placeName, setPlaceName] = useState('');

  const handleCheckInOut = (action) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          const currentTime = new Date().toLocaleString();

          setLocation(currentLocation);
          setTimestamp(currentTime);

          fetchPlaceName(currentLocation.latitude, currentLocation.longitude);

          alert(`${action} successful!\nLocation: ${currentLocation.latitude}, ${currentLocation.longitude}\nTime: ${currentTime}`);
        },
        (error) => {
          console.error(error);
          alert('Unable to retrieve location. Please try again.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const fetchPlaceName = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`);
      const data = await response.json();
      if (data && data.address) {
        // Extract the town if available, otherwise fallback to other components
        const town = data.address.town || data.address.suburb || data.address.village || data.address.city || data.address.state || data.address.country;
        const placeName = town ? town : 'Place name not found';
        setPlaceName(placeName);
      } else {
        setPlaceName('Place name not found');
      }
    } catch (error) {
      console.error('Error fetching place name:', error);
      setPlaceName('Error fetching place name');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Staff Check-In/Check-Out</h2>

        <div className="flex justify-between">
          <button
            onClick={() => handleCheckInOut('Check-In')}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Check-In
          </button>

          <button
            onClick={() => handleCheckInOut('Check-Out')}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Check-Out
          </button>
        </div>

        {location && timestamp && (
          <div className="mt-6">
            <p><strong>Last Action:</strong></p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
            <p>Time: {timestamp}</p>
            <p><strong>Place Name:</strong> {placeName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckInOutForm;
