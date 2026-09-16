'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaInstagram,
} from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setScrolled(window.scrollY > 20)
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'backdrop-blur-2xl bg-white/75 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-b border-white/20'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-[1650px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24">

            <div className="h-[95px] flex items-center justify-between">

              {/* LOGO */}
              <Link href="/" className="group">
                <div className="flex items-center gap-4">

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src="/images/resmed.png"
                      alt="ResMed"
                      width={130}
                      height={40}
                      priority
                      className="object-contain"
                    />

                    <div className="h-10 w-[1px] bg-black/20" />

                    <div className="leading-tight">
                      <p className="text-[13px] uppercase tracking-[0.25em] text-[#9E1B4F] font-semibold">
                        Authorized
                      </p>

                      <h2 className="text-[20px] font-black text-gray-900 tracking-tight">
                        Service Centre
                      </h2>

                      <p className="text-sm text-gray-600 font-medium">
                        by Respion Healthcare
                      </p>
                    </div>
                  </motion.div>

                </div>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-10">

                {navItems.map((item) => (
                  <div key={item.name} className="relative group">

                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-[15px] font-semibold tracking-wide text-gray-800 hover:text-[#9E1B4F] transition-all duration-300"
                    >
                      {item.name}

                      {item.subItems && (
                        <ChevronDown
                          size={16}
                          className="group-hover:rotate-180 transition duration-300"
                        />
                      )}
                    </Link>

                    {/* DROPDOWN */}
                    {item.subItems && (
                      <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                        <div className="w-[240px] rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-6 py-4 text-[15px] font-medium text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300"
                            >
                              {sub.name}
                            </Link>
                          ))}

                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

           {/* RIGHT SIDE */}
<div className="hidden lg:flex items-center gap-5">

  {/* SOCIALS */}
  <div className="flex items-center gap-3">

    {/* Facebook */}
    <motion.a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300 shadow-sm"
    >
      <FaFacebookF size={14} />
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300 shadow-sm"
    >
      <FaLinkedinIn size={14} />
    </motion.a>

    {/* Google */}
<motion.a
  href="https://www.google.com/maps?cid=14393515399469563994"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -3 }}
  className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300 shadow-sm"
>
  <FaGoogle size={14} />
</motion.a>

    {/* Instagram */}
    <motion.a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="w-10 h-10 rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl flex items-center justify-center text-gray-700 hover:bg-[#9E1B4F] hover:text-white transition-all duration-300 shadow-sm"
    >
      <FaInstagram size={14} />
    </motion.a>

  </div>

  {/* CALL BUTTON */}
  <Link
    href="tel:+919937000606"
    className="px-6 py-3 rounded-full bg-[#9E1B4F] text-white font-semibold text-sm tracking-wide shadow-lg hover:scale-105 hover:bg-[#841543] transition-all duration-300"
  >
    Call Now
  </Link>

</div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-11 h-11 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200 flex items-center justify-center shadow-md"
              >
                {menuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto"
          >
            <div className="px-6 py-6">

              {/* TOP */}
              <div className="flex items-center justify-between mb-12">

                <Image
                  src="/images/resmed.png"
                  alt="ResMed"
                  width={120}
                  height={40}
                />

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X size={22} />
                </button>
              </div>

              {/* NAV ITEMS */}
              <div className="space-y-6">

                {navItems.map((item) => (
                  <div key={item.name}>

                    {!item.subItems ? (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-2xl font-bold text-gray-900"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setMobileSubOpen(!mobileSubOpen)
                          }
                          className="flex items-center justify-between w-full text-2xl font-bold text-gray-900"
                        >
                          {item.name}

                          <ChevronDown
                            className={`transition duration-300 ${
                              mobileSubOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileSubOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-5 space-y-4 overflow-hidden"
                            >
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-lg font-medium text-gray-600"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-14">

                <Link
                  href="tel:+9937000606"
                  className="w-full flex items-center justify-center py-4 rounded-full bg-[#9E1B4F] text-white text-lg font-semibold shadow-xl"
                >
                  Call Now
                </Link>

                {/* SOCIALS */}
                <div className="flex items-center gap-4 mt-8">

                  {[
                    FaFacebookF,
                    FaLinkedinIn,
                    FaGoogle,
                    FaInstagram,
                  ].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}