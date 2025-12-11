import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {

  const nav =
    [
      "Services",
      "About",
      "Gallery",
      "Testimonials",
      "Booking",
      "Contact"
    ];

  const serviceLinks =
    [
      { name: "Haircut", href: "/services/haircut" },
      { name: "Beard Trim", href: "/services/beard-trim" },
      { name: "Hair Styling", href: "/services/hair-styling" },
      { name: "Hot Towel Shave", href: "/services/hot-towel-shave" },
      { name: "Hair Coloring", href: "/services/hair-coloring" },
      { name: "Kids Haircut", href: "/services/kids-haircut" },
    ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Elite Cuts</h3>
            <p className="text-gray-400 mb-4">Premium barbershop providing exceptional grooming services since 2008.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors" href={"/"}>
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(
                (item) => (
                  <li key={item}>
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite Cuts. All rights reserved.</p>
          <p className="">
            Created by <a href="https://kylepprofile.dev">Kyle Parsotan</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

