import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { EllipsisVertical, Goal, ShoppingCart, UserStar } from 'lucide-react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <Button asChild variant="ghost">
          <Link
            href="/cart"
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart /> Cart
            </div>
            <span className="text-xs text-muted-foreground">UI Section</span>
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link
            href="/journey"
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <UserStar /> Journey
            </div>
            <span className="text-xs text-muted-foreground">UX Section</span>
          </Link>
        </Button>{' '}
        <Button asChild variant="ghost">
          <Link
            href="/approach"
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <Goal /> Goals
            </div>
            <span className="text-xs text-muted-foreground">My Approach</span>
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetTitle>Menu</SheetTitle>
            <Button asChild variant="ghost" className="justify-start">
              <Link href="/cart">
                <ShoppingCart /> Cart :
                <span className="text-xs text-muted-foreground">
                  UI Section
                </span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link href="/journey">
                <UserStar /> Journey :
                <span className="text-xs text-muted-foreground">
                  UX Section
                </span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start">
              <Link href="/approach">
                <Goal /> Goals :
                <span className="text-xs text-muted-foreground">
                  My Approach
                </span>
              </Link>
            </Button>
          </SheetContent>
          <SheetDescription></SheetDescription>
        </Sheet>
      </nav>
    </div>
  )
}

export default Menu
