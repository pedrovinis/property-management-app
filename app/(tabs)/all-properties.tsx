import React, { useContext } from "react"
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import { PropertyContext } from "@/providers/propertyProvider"
import { IProperty } from "@/types/property"

export default function AllPropertiesScreen() {
  const { properties } = useContext(PropertyContext)
  console.log(properties)

  const renderPropertyItem = ({ item }: { item: IProperty }) => (
    <TouchableOpacity style={styles.propertyItem} onPress={() => router.navigate("/(tabs)/property-details")}>
      <Text style={styles.propertyName}>{item.name}</Text>
      <Text>Soil Type: {item.soilType}</Text>
      <Text>Main Crop: {item.mainCrop}</Text>
      <Text>Location: {item.location}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Registered Properties</Text>

      {properties.length === 0 ? (
        <Text>No properties registered yet.</Text>
      ) : (
        <FlatList data={properties} keyExtractor={(item, index) => index.toString()} renderItem={renderPropertyItem} />
      )}

      <Button title='Register New Property' onPress={() => router.navigate("/(tabs)/add-property")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  propertyItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    borderRadius: 5,
  },
  propertyName: { fontWeight: "bold", fontSize: 18 },
})
