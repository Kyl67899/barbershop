"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isServicesOpen, setIsServicesOpen] = useState(false)
//   const pathname = usePathname()

//   // Handle scroll event to change navbar style
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false)
//   }, [pathname])

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services", dropdown: true },
//     { name: "About", href: "/about" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Testimonials", href: "/testimonials" },
//     { name: "Contact", href: "/contact" },
//   ]

//   const serviceLinks = [
//     { name: "Haircut", href: "/services/haircut" },
//     { name: "Beard Trim", href: "/services/beard-trim" },
//     { name: "Hair Styling", href: "/services/hair-styling" },
//     { name: "Hot Towel Shave", href: "/services/hot-towel-shave" },
//     { name: "Hair Coloring", href: "/services/hair-coloring" },
//     { name: "Kids Haircut", href: "/services/kids-haircut" },
//   ]

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300",
//         isScrolled ? "bg-black text-white py-3 shadow-lg" : "bg-black text-white py-5",
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold">
//             Elite Cuts
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.name} className="relative group">
//                   <button
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                     className={cn(
//                       "flex items-center hover:text-gray-500 focus:outline-none transition-colors",
//                       pathname.startsWith(link.href) ? "text-white" : "",
//                     )}
//                   >
//                     {link.name}
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                   <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top">
//                     {serviceLinks.map((service) => (
//                       <Link
//                         key={service.name}
//                         href={service.href}
//                         className="block px-4 py-2 hover:bg-gray-100 transition-colors"
//                       >
//                         {service.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={cn("hover:text-gray-500 transition-colors", pathname === link.href ? "text-white" : "")}
//                 >
//                   {link.name}
//                 </Link>
//               ),
//             )}
//             <Link
//               href="/booking"
//               className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-white focus:outline-none"
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black/95 backdrop-blur-sm">
//           <div className="container mx-auto px-4 py-4 space-y-4">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <div key={link.name} className="space-y-2">
//                   <button
//                     onClick={() => setIsServicesOpen(!isServicesOpen)}
//                     className={cn(
//                       "flex items-center hover:text-gray-500 focus:outline-none transition-colors w-full",
//                       pathname.startsWith(link.href) ? "text-white" : "",
//                     )}
//                   >
//                     {link.name}
//                     <ChevronDown
//                       className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   {isServicesOpen && (
//                     <div className="pl-4 space-y-2 border-l border-gray-700">
//                       {serviceLinks.map((service) => (
//                         <Link
//                           key={service.name}
//                           href={service.href}
//                           className={cn(
//                             "block hover:text-gray-500 transition-colors",
//                             pathname === service.href ? "text-white" : "",
//                           )}
//                         >
//                           {service.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={cn(
//                     "block text-black hover:text-black transition-colors",
//                     pathname === link.href ? "text-black" : "",
//                   )}
//                 >
//                   {link.name}
//                 </Link>
//               ),
//             )}
//             <Link
//               href="/booking"
//               className="block bg-white hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors text-center"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }




export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    { name: "Haircut", href: "/services/haircut" },
    { name: "Beard Trim", href: "/services/beard-trim" },
    { name: "Hair Styling", href: "/services/hair-styling" },
    { name: "Hot Towel Shave", href: "/services/hot-towel-shave" },
    { name: "Hair Coloring", href: "/services/hair-coloring" },
    { name: "Kids Haircut", href: "/services/kids-haircut" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white text-black py-3 shadow-lg" : "bg-white text-black py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Elite Cuts
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center hover:text-primary focus:outline-none transition-colors",
                      pathname.startsWith(link.href) ? "text-primary" : "",
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all origin-top">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn("hover:text-primary transition-colors", pathname === link.href ? "text-primary" : "")}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              href="/booking"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center hover:text-primary focus:outline-none transition-colors w-full",
                      pathname.startsWith(link.href) ? "text-primary" : "",
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2 border-l border-gray-700">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={cn(
                            "block hover:text-primary transition-colors",
                            pathname === service.href ? "text-primary" : "",
                          )}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block hover:text-primary transition-colors",
                    pathname === link.href ? "text-primary" : "",
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
            <Link
              href="/booking"
              className="block bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md transition-colors text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

