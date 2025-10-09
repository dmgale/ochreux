'use client'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME}`}
        priority={true}
      />

      <div className="p-6 w-1/3 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">
          Requested page is not found or does not exist
        </p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = '/')}
        >
          Back to Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
