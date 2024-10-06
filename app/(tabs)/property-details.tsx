import { router } from "expo-router"
import React, { useState } from "react"
import { View, Text, Button, Switch, StyleSheet } from "react-native"
import Slider from "@react-native-community/slider"

const PropertyDetailsScreen = () => {
  const property = {
    name: "1",
    soilType: "Sandy",
    mainCrop: "Milho",
    location: "abc",
  }
  const [isAutomatic, setIsAutomatic] = useState(false)
  const [humidity, setHumidity] = useState(30)

  const onSave = () => {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Property Details</Text>
      <Text>Name: {property.name}</Text>
      <Text>Soil Type: {property.soilType}</Text>
      <Text>Main Crop: {property.mainCrop}</Text>
      <Text>Location: {property.location}</Text>

      <Text>Temperature: 25°C</Text>

      <Text style={styles.sectionTitle}>Irrigation Control</Text>
      <View style={styles.switchRow}>
        <Text>Automatic</Text>
        <Switch value={isAutomatic} onValueChange={setIsAutomatic} />
      </View>

      {isAutomatic && (
        <View style={styles.sliderContainer}>
          <Text>Minimum Humidity: {humidity}%</Text>
          <Slider style={styles.slider} minimumValue={0} maximumValue={100} step={1} value={humidity} onValueChange={setHumidity} />
        </View>
      )}

      <Button title='Save' onPress={onSave} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { marginTop: 20, fontSize: 18, fontWeight: "bold" },
  switchRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
  sliderContainer: { marginTop: 20 },
  slider: { width: "100%", height: 40 },
})

export default PropertyDetailsScreen
