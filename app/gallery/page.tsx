import type { Metadata } from "next"
import Image from "next/image"
import Gallery from "@/components/gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery | Elite Cuts Barbershop",
  description: "Browse our gallery of haircuts, beard trims, and styling work at Elite Cuts Barbershop.",
}

// const galleryImages = [
//   { src: "", alt: "Haircut style 1" },
//   { src: "", alt: "Beard trim" },
//   { src: "", alt: "Haircut style 2" },
//   { src: "", alt: "Barbershop interior" },
//   { src: "", alt: "Hair styling" },
//   { src: "", alt: "Hot towel shave" },
// ]

const haircutImages = [
  { src: "https://th.bing.com/th/id/R.f07ff588bf0b80c119ca60be35c1fe3a?rik=bgPENhdbU0CECA&riu=http%3a%2f%2fmens-club.online%2fwp-content%2fuploads%2f2023%2f07%2fbec4ad43455607177b58962127116d9c.jpg&ehk=I9cgx9BrqESLyuYzlAcStGTk6KtG1jvuSEzZ864ZLbE%3d&risl=&pid=ImgRaw&r=0", alt: "Haircut style 1" },
  { src: "https://hairstylesfeed.com/wp-content/uploads/2022/01/Designed-Sides-Hairstyle.webp", alt: "Haircut style 2" },
  { src: "https://th.bing.com/th/id/R.26604605fd23a1e93a29fa845c135dd9?rik=v%2fcHa6RK%2fOknBA&pid=ImgRaw&r=0", alt: "Haircut style 3" },
  { src: "https://www.menshairstylestoday.com/wp-content/uploads/2016/12/Shape-Up-Hairstyles-High-Skin-Fade-Hard-Side-Part.jpg", alt: "Haircut style 4" },
  { src: "https://th.bing.com/th/id/R.4ee8256a2d978512c3bbb46f2a624b60?rik=8xZJqJJAS80y3w&pid=ImgRaw&r=0", alt: "Haircut style 5" },
  { src: "https://img.freepik.com/premium-photo/barber-trimming-hair-man-barbershop_126745-4012.jpg", alt: "Haircut style 6" },
]

const beardTrimImages = [
  { src: "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.healthandlifemags.com/content/uploads/2021/11/o/w/2-barbers2.jpg", alt: "Beard trim 1" },
  { src: "https://www.robertjohnhair.co.uk/wp-content/uploads/2018/06/new_barbwr-600x600.jpg", alt: "Beard trim 2" },
  { src: "https://th.bing.com/th/id/R.ced5f49c6987e4b53ad30035bf43ad9a?rik=rrGnx2OyCih3Mw&pid=ImgRaw&r=0", alt: "Hot towel shave" },
  { src: "https://evoke.ie/wp-content/uploads/2017/09/shutterstock_556486588-barber-feat.jpg", alt: "Beard trim 3" },
  { src: "https://luxurymobilebarbershop.com/wp-content/uploads/2018/10/IMG_9338-1024x683-640x480_c.jpg", alt: "Hot towel shave" },
  { src: "https://images.squarespace-cdn.com/content/v1/5f53c1f998bf2728f8ed3646/78217bd2-814e-4a5c-a41d-2cb7d9db1ed6/Screen+Shot+2023-08-18+at+10.37.57+AM.png", alt: "Beard trim 4" },
]

const stylingImage = [
  { src: "https://th.bing.com/th/id/OIP.7GWntjPqWmff0Y4Jg3f1agHaF2?rs=1&pid=ImgDetMain", alt: "Hair styling" },
  { src: "https://th.bing.com/th/id/R.f07ff588bf0b80c119ca60be35c1fe3a?rik=bgPENhdbU0CECA&riu=http%3a%2f%2fmens-club.online%2fwp-content%2fuploads%2f2023%2f07%2fbec4ad43455607177b58962127116d9c.jpg&ehk=I9cgx9BrqESLyuYzlAcStGTk6KtG1jvuSEzZ864ZLbE%3d&risl=&pid=ImgRaw&r=0", alt: "Haircut style 1" },
  { src: "https://luxurymobilebarbershop.com/wp-content/uploads/2018/10/IMG_9338-1024x683-640x480_c.jpg", alt: "Beard trim" },
  { src: "https://th.bing.com/th/id/OIP.RTk1rm8F2FEAU8iQUPtuVgHaE7?w=626&h=417&rs=1&pid=ImgDetMain", alt: "Hair styling" },
  { src: "https://media.timeout.com/images/100663889/630/472/image.jpg", alt: "Hot towel shave" },
  { src: "https://img.freepik.com/premium-photo/barber-shop-hairdresser-man-washes-client-head-barbershop-high-quality-photography_56854-4407.jpg", alt: "Hair styling" },
  { src: "https://th.bing.com/th/id/R.ced5f49c6987e4b53ad30035bf43ad9a?rik=rrGnx2OyCih3Mw&pid=ImgRaw&r=0", alt: "Hot towel shave" },
  { src: "https://img.freepik.com/free-photo/close-up-image-female-hairdresser-washing-bearded-men-s-hair-before-haircut-saloon_613910-5463.jpg", alt: "Hair styling" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse through our portfolio of premium cuts and styles
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="haircuts">Haircuts</TabsTrigger>
                <TabsTrigger value="beards">Beard Trims</TabsTrigger>
                <TabsTrigger value="styling">Styling</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <Gallery />
            </TabsContent>

            <TabsContent value="haircuts">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {haircutImages.map((image, index) => (
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
            </TabsContent>

            <TabsContent value="beards">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {beardTrimImages.map((image, index) => (
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
            </TabsContent>

            <TabsContent value="styling">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stylingImage.map((image, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

