export const testimonials = [
  {
    id: "1",
    name: "John Smith",
    rating: 5,
    date: "2023-12-15",
    content:
      "I've been coming to Elite Cuts for over a year now, and I've never had a bad experience. The barbers are skilled, professional, and always make me feel welcome. Highly recommend!",
    image: "/placeholder.svg?height=80&width=80&text=JS",
  },
  {
    id: "2",
    name: "Michael Johnson",
    rating: 5,
    date: "2023-11-20",
    content:
      "Best haircut I've ever had! The attention to detail is amazing, and they really listen to what you want. The hot towel treatment is a game-changer too.",
    image: "/placeholder.svg?height=80&width=80&text=MJ",
  },
  {
    id: "3",
    name: "David Williams",
    rating: 4,
    date: "2023-10-05",
    content:
      "Great atmosphere, skilled barbers, and reasonable prices. I appreciate how they take their time to get everything just right. Will definitely be back!",
    image: "/placeholder.svg?height=80&width=80&text=DW",
  },
  {
    id: "4",
    name: "Robert Brown",
    rating: 5,
    date: "2023-09-18",
    content:
      "I brought my son here for his first proper haircut, and they made the experience special for him. Patient, friendly, and great with kids. The result was fantastic too!",
    image: "/placeholder.svg?height=80&width=80&text=RB",
  },
  {
    id: "5",
    name: "James Davis",
    rating: 5,
    date: "2023-08-30",
    content:
      "Elite Cuts is the real deal. Professional service, great ambiance, and consistently excellent results. I won't go anywhere else for my haircuts now.",
    image: "/placeholder.svg?height=80&width=80&text=JD",
  },
  {
    id: "6",
    name: "Thomas Wilson",
    rating: 4,
    date: "2023-07-22",
    content:
      "I've been to many barbershops, but Elite Cuts stands out for their attention to detail and customer service. The beard trim was perfect, and I left feeling like a new man.",
    image: "/placeholder.svg?height=80&width=80&text=TW",
  },
]

// Function to get all testimonials
export function getTestimonials() {
  return testimonials
}

// Function to get featured testimonials (top 3 by rating)
export function getFeaturedTestimonials(count = 3) {
  return testimonials.sort((a, b) => b.rating - a.rating).slice(0, count)
}

// Function to get a specific testimonial by ID
export function getTestimonialById(id: string) {
  return testimonials.find((testimonial) => testimonial.id === id)
}

