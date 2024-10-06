import { router } from "expo-router"
import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, user</Text>

      <Button title='Register a Property' onPress={() => router.navigate("/add-property")} />
      <Button title='View Properties' onPress={() => router.navigate("/")} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  container: { flex: 1, gap: 10, justifyContent: "center", padding: 20 },
})
