import React, { useContext } from "react"
import { View, TextInput, Button, StyleSheet, Text } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"
import { router } from "expo-router"
import { Picker } from "@react-native-picker/picker"
import { IProperty } from "@/types/property"
import { PropertyContext } from "@/providers/propertyProvider"

const propertySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  soilType: Yup.string().required("Required"),
  mainCrop: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
})

export default function AddPropertyScreen() {
  const { addProperty } = useContext(PropertyContext)

  const handleFormSubmit = (values: IProperty) => {
    addProperty(values)
    router.navigate("/property-details")
  }

  const initialValues: IProperty = { name: "", soilType: "", mainCrop: "", location: "" }

  return (
    <Formik initialValues={initialValues} validationSchema={propertySchema} onSubmit={handleFormSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Add Property</Text>

          <TextInput
            placeholder='Property Name'
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            style={styles.input}
          />
          {errors.name && touched.name && <Text>{errors.name}</Text>}

          <Picker selectedValue={values.soilType} onValueChange={(itemValue) => handleChange(itemValue)} style={styles.picker}>
            <Picker.Item label='Select Soil Type' value='' />
            <Picker.Item label='Sandy' value='Sandy' />
            <Picker.Item label='Clay' value='Clay' />
            <Picker.Item label='Loamy' value='Loamy' />
            <Picker.Item label='Peaty' value='Peaty' />
            <Picker.Item label='Chalky' value='Chalky' />
            <Picker.Item label='Silty' value='Silty' />
          </Picker>
          {errors.soilType && touched.soilType && <Text>{errors.soilType}</Text>}

          <TextInput
            placeholder='Main Crop'
            onChangeText={handleChange("mainCrop")}
            onBlur={handleBlur("mainCrop")}
            value={values.mainCrop}
            style={styles.input}
          />
          {errors.mainCrop && touched.mainCrop && <Text>{errors.mainCrop}</Text>}

          <TextInput
            placeholder='Location'
            onChangeText={handleChange("location")}
            onBlur={handleBlur("location")}
            value={values.location}
            style={styles.input}
          />
          {errors.location && touched.location && <Text>{errors.location}</Text>}

          <Button onPress={() => handleFormSubmit(values)} title='Register Property' />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
  picker: { height: 50, width: "100%", marginBottom: 15, borderWidth: 1 },
})
