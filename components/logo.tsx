import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "black" | "white"
  className?: string
  onClick?: () => void
}

export function Logo({ variant = "white", className = "", onClick }: LogoProps) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo-black.svg"

  return (
    <Link 
      href="/" 
      className={`block hover:opacity-80 transition-opacity ${className}`} 
      aria-label="MF Digital Studio"
      onClick={onClick}
    >
      <Image
        src={src}
        alt="MF Digital Studio"
        width={170}
        height={100}
        className="h-full w-auto object-contain"
        priority
      />
    </Link>
  )
}
