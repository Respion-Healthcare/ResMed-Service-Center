'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaInstagram } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    subItems: [
      { name: 'Products', href: '/services/products' },
      { name: 'Rental', href: '/services/rental' },
      { name: 'Sleep Test', href: '/services/sleep-test' },
    ],
  },
  { name: 'Contact', href: '/contact' },
  { name: 'Tutorials', href: '/tutorials' },
]

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`bg-[#f3f3f3] border-b fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo + Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/images/resmed.png"
                alt="ResMed"
                width={120}
                height={36}
                priority
              />

              <div className="h-8 w-[1.5px] bg-gray-400" />

              {/* 🔥 Slightly bigger text */}
              <div className="leading-tight">
                <p className="font-bold text-gray-800 text-xl">
                  Authorised
                </p>
                <p className="font-semibold text-gray-700 text-xl">
                  Service Centre
                </p>
              </div>
            </div>

            <p className="-mt-4 text-blue-700 font-semibold text-lg">
              Managed by Respion Healthcare
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-bold text-[17px] text-gray-800 hover:underline underline-offset-4"
                >
                  {item.name}
                  {item.subItems && <ChevronDown size={16} />}
                </Link>

                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md min-w-[200px] border">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm font-medium hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-5 text-gray-800">
            <FaFacebookF size={16} className="cursor-pointer hover:text-black" />
            <FaLinkedinIn size={16} className="cursor-pointer hover:text-black" />
            <FaGoogle size={16} className="cursor-pointer hover:text-black" />
            <FaInstagram size={16} className="cursor-pointer hover:text-black" />
          </div>

        </div>
      </div>
    </header>
  )
}
