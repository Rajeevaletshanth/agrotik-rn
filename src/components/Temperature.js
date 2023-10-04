import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';

Geocoder.init('AIzaSyAKEUWIuvBpZgDP_bK30haNy1M4_L5Gnx0'); // Replace with your geocoding API key

const Temperature = () => {
  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null);

  const [currentLocation, setCurrentLocation] = useState('Colombo')

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, you can proceed with geolocation.
        getLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getLocation = async () => {
    try {
        Geolocation.getCurrentPosition(
            async(position) => {
                console.log(position)
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              await calculateTemperature(location)
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    //   const position = await Geolocation.getCurrentPosition({
    //     enableHighAccuracy: true,
    //   });
    //   console.log(position);
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await Geocoder.from(latitude, longitude);
      const addressComponent = response.results[0].address_components[0];
      const locationName = addressComponent.long_name;
      return locationName;
    } catch (error) {
      console.error('Error reverse geocoding:', error);
    }
  };

  const calculateTemperature = async (locationName) => {
    await axios.get(`http://api.weatherapi.com/v1/current.json?key=ec09f97288ba4cc3aed105222230410&q=7.243240,80.127490`).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
    
    
    // Replace with your temperature calculation logic or use hard-coded values.
    // You can find approximate temperature data for different locations and seasons.
    return '25°C';
  };

  const getTemperature = async () => {
    await requestLocationPermission();

    if (location) {
      const { latitude, longitude } = location;
      const locationName = await reverseGeocode(latitude, longitude);
      console.log(locationName);
      const temperature = await calculateTemperature(location);
      setTemperature(temperature);
    }else{
        console.log('Location not found!')
    }
  };

  useEffect(() => {
    getTemperature();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{temperature ? `Temperature: ${temperature}` : 'Loading...'}</Text>
      <Button title="Refresh Temperature" onPress={getTemperature} />
    </View>
  );
};

export default Temperature;
