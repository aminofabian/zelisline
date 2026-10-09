import Image from 'next/image'

export default function Logo({ className = 'h-8' }: { className?: string }) {
  return (
    <Image
      src="/zelisline-logo.png"
      width={600}
      height={160}
      alt="Zelisline — grow together"
      priority
      className={`${className} w-auto`}
    />
  )
}
