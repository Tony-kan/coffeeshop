import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  const latitude = -13.9669;
  const longitude = 33.7873;
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      // userInterfaceStyle="light"
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{
        marginTop: 20,
        width: "100%",
        height: "80%",
        borderRadius: 12,
      }}
    >
      <Text>Map</Text>
      {/* <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                image={icons.location}
                title="Its located here"
                className="h-12 w-12"
              /> */}
    </MapView>
  );
};

export default Map;
