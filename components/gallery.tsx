import Image from "next/image"

const galleryImages = [
  { src: "https://th.bing.com/th/id/OIP.C4AUyum7smjzaf1tjSEJwwHaE8?rs=1&pid=ImgDetMain", alt: "Haircut style 1" },
  { src: "https://th.bing.com/th/id/R.c11c63a1a3a39130c794ad192b382b61?rik=cNJ%2bXnQlIhVhAg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1598887142487-3c854d51eabb%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8MXx8YmFyYmVyJTIwc2hvcHx8MHx8fHwxNjE1NTc4Mzg0%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=Bu%2fM%2f6KBmJ7cZ8MeLjfDuABx31wVlDgwmFNxcPk5W08%3d&risl=&pid=ImgRaw&r=0", alt: "Beard trim" },
  { src: "https://th.bing.com/th/id/OIP.I6buV9fcogmgKV8rEcmnHwHaE8?rs=1&pid=ImgDetMain", alt: "Haircut style 2" },
  { src: "https://th.bing.com/th/id/R.63f936ebc5af3158d4225900fdcfdfef?rik=t3n2RwM%2flVXMAw&pid=ImgRaw&r=0", alt: "Barbershop interior" },
  { src: "https://th.bing.com/th/id/R.2edf10cd345e0d5d0d1c9b1e082da237?rik=eXlDo9k7bybO8A&pid=ImgRaw&r=0", alt: "Hair styling" },
  { src: "https://images.pexels.com/photos/2521978/pexels-photo-2521978.jpeg?cs=srgb&dl=pexels-thgusstavo-2521978.jpg&fm=jpg", alt: "Hot towel shave" },
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

