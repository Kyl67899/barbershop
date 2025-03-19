import Image from "next/image"

const galleryImages = [
  { src: "/images/haircut-style-1.jpg", alt: "Haircut style 1" },
  { src: "/images/beard-trim.jpg", alt: "Beard trim" },
  { src: "/images/haircut-style-2.jpg", alt: "Haircut style 2" },
  { src: "/images/barbershop-interior.jpg", alt: "Barbershop interior" },
  { src: "/images/hair-styling.jpg", alt: "Hair styling" },
  { src: "/images/hot-towel-shave.jpg", alt: "Hot towel shave" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our work and the experience we provide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

