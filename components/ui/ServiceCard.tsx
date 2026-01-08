import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function ServiceCard({ 
  title, 
  description, 
  image, 
  href 
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                    hover:shadow-xl transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-blue-600 font-semibold 
                     hover:text-blue-800 transition-colors"
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
