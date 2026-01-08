'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    subItems: [
      { name: 'Products', href: '/services/products' },
      { name: 'Rental', href: '/services/rental' },
      { name: 'Sleep Test', href: '/services/sleep-test' },
    ]
  },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Tutorials', href: '/tutorials' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/resmed.png" 
              alt="ResMed Service Center" 
              width={200} 
              height={100}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 
                             font-medium transition-colors"
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg 
                                  rounded-md py-2 min-w-[180px]">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 
                                   hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
