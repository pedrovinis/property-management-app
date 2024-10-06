import { router } from "expo-router"
import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

export default function LoginScreen() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      router.navigate("/")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Irriga Facil</Text>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder='Username' value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title='Login' onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  header: { fontSize: 32, fontWeight: "700", marginBottom: 32, textAlign: "center" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
})
