'use client'

import { useEffect, useState } from 'react'
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

          {/* LOGO */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/images/resmed.png"
                alt="ResMed"
                width={120}
                height={36}
                priority
              />
              <div className="h-8 w-[1.5px] bg-black" />
              <div className="leading-tight">
                <p className="font-bold text-black text-xl">Authorised</p>
                <p className="font-semibold text-black text-xl">Service Centre</p>
              </div>
            </div>
            <p className="-mt-4 text-black font-semibold text-lg">
              Managed by Respion Healthcare
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">

                {/* Parent link */}
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-bold text-[17px] text-black hover:underline underline-offset-4"
                >
                  {item.name}
                  {item.subItems && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {item.subItems && (
                  <div
                    className="
                      absolute top-full left-0 mt-2
                      min-w-[220px]
                      bg-white border border-gray-300 rounded-lg shadow-xl
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      z-50
                    "
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="
                          block px-5 py-3
                          text-sm font-semibold
                          text-black
                          hover:bg-gray-100
                        "
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </nav>

          {/* SOCIAL */}
          <div className="hidden md:flex items-center gap-5 text-black">
            <FaFacebookF className="hover:opacity-80 cursor-pointer" />
            <FaLinkedinIn className="hover:opacity-80 cursor-pointer" />
            <FaGoogle className="hover:opacity-80 cursor-pointer" />
            <FaInstagram className="hover:opacity-80 cursor-pointer" />
          </div>

        </div>
      </div>
    </header>
  )
}
