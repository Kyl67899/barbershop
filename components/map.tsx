"use client"

// Define the props for our Map component
interface MapProps {
  address: string
  lat: number
  lng: number
  zoom?: number
  height?: string
}

export default function Map({ lat, lng, zoom = 15, height = "400px" }: MapProps) {
  // Create a URL for an OpenStreetMap iframe
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&amp;layer=mapnik&amp;marker=${lat}%2C${lng}`

  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ height }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        title="Map location of Elite Cuts Barbershop"
        className="border-0"
      />
      <div className="mt-2 text-sm text-center">
        <a
          href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}//${lat}/${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View Larger Map
        </a>
      </div>
    </div>
  )
}

