import Image from 'next/image'

export default function Logo() {
  return (
    <div className="md:flex bg-transparent lg:!p-0 w-40 h-auto">
    <Image
    src="/logo.png"
    width="0"
    height="0"
    sizes="15vw"
    style={{ width: '100%', height: 'auto' }}
    placeholder="empty"
    loading = 'lazy'
    alt="Zelisline Logo"
    />
    </div>
    )
  }
  