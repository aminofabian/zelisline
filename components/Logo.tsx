import Image from 'next/image'

export default function Logo() {
  return (
    <div className="md:flex bg-transparent lg:!p-0 w-[35dvh] h-auto">
    <Image
    src="/zelisline.svg"
    width="0"
    height="0"
    sizes="10vw"
    style={{ width: '90%', height: 'auto' }}
    placeholder="empty"
    loading = 'lazy'
    alt="Zelisline Logo"
    />
    </div>
    )
  }
  