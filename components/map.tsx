"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Define the props for our Map component
interface MapProps {
  address: string
  lat: number
  lng: number
  zoom?: number
  height?: string
}

export default function Map({ lat, lng, zoom = 15, height = "100%" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Only create the map if it doesn't exist yet
    if (!mapInstanceRef.current && mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([lat, lng], zoom)

      // Add the tile layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      // Create a custom icon for the marker
      const customIcon = L.divIcon({
        html: `<div class="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>`,
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      })

      // Add a marker at the specified location
      L.marker([lat, lng], { icon: customIcon })
        .addTo(map)
        .bindPopup("<strong>Elite Cuts Barbershop</strong><br>123 Barber Street<br>New York, NY 10001")
        .openPopup()

      // Store the map instance for cleanup
      mapInstanceRef.current = map

      // Ensure the map renders correctly by triggering a resize after it's visible
      setTimeout(() => {
        map.invalidateSize()
      }, 100)
    }

    // Cleanup function to destroy the map when the component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [lat, lng, zoom]) // Re-initialize if these props change

  return <div ref={mapRef} style={{ height, width: "100%" }} className="rounded-lg overflow-hidden z-0" />
}

