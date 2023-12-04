import { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

const useGeolocation = (): Location | null => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }, (error: GeolocationPositionError) => {
        console.log(error.message);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return location;
};

export default useGeolocation;
