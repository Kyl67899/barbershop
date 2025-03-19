import type { Metadata } from "next"
import Gallery from "@/components/gallery"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery | Elite Cuts Barbershop",
  description: "Browse our gallery of haircuts, beard trims, and styling work at Elite Cuts Barbershop.",
}

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
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="overflow-hidden rounded-lg group">
                    <div className="relative aspect-square">
                      <img
                        src={`/placeholder.svg?height=600&width=600&text=Haircut+${index}`}
                        alt={`Haircut style ${index}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beards">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="overflow-hidden rounded-lg group">
                    <div className="relative aspect-square">
                      <img
                        src={`/placeholder.svg?height=600&width=600&text=Beard+${index}`}
                        alt={`Beard style ${index}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="styling">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="overflow-hidden rounded-lg group">
                    <div className="relative aspect-square">
                      <img
                        src={`/placeholder.svg?height=600&width=600&text=Style+${index}`}
                        alt={`Hair style ${index}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
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

