import { APP_NAME } from '@/lib/constants'
import { FileBadge } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} Ochre - {APP_NAME} All Rights Reserved.
        <a
          href="/cv"
          className="inline-flex items-center gap-1 ml-1 text-orange-600 hover:text-orange-800 transition-colors font-bold"
        >
          <FileBadge className="w-4 h-4" /> David Gale - View CV
        </a>
      </div>
    </footer>
  )
}

export default Footer
