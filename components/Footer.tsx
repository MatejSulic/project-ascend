import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">
        <Image src="/pa-logo.png" alt="Project Ascend" height={28} width={140} style={{ objectFit: 'contain' }} />
      </div>
      <p>© 2026 · Matěj Šulič · Project Ascend</p>
    </footer>
  )
}
