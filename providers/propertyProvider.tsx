import { IProperty } from "@/types/property"
import React, { useState, ReactNode, createContext } from "react"

interface PropertyContextType {
  properties: IProperty[]
  addProperty: (property: IProperty) => void
}

export const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  addProperty: () => {},
})

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<IProperty[]>([])

  const addProperty = (property: IProperty) => {
    setProperties((prevProperties) => [...prevProperties, property])
  }

  return <PropertyContext.Provider value={{ properties, addProperty }}>{children}</PropertyContext.Provider>
}
