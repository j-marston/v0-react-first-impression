"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`relative z-10 transition-all duration-200 ${isGlitching ? "animate-pulse" : ""}`}
        style={{
          textShadow: isGlitching ? "2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00" : "none",
          transform: isGlitching ? "translate(1px, -1px)" : "none",
        }}
      >
        {text}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 z-0 text-red-500 opacity-70"
            style={{ transform: "translate(2px, 0)" }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 z-0 text-cyan-500 opacity-70"
            style={{ transform: "translate(-2px, 0)" }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  )
}
