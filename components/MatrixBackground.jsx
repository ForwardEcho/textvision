'use client'
import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = 300
        }

        resize()
        window.addEventListener('resize', resize)

        const letters = 'c0ded'
        const fontSize = 14
        const columns = canvas.width / fontSize
        const drops = Array(Math.floor(columns)).fill(1)

        const draw = () => {
            ctx.fillStyle = 'rgba(15, 15, 15, 0.15)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = 'rgba(180,180,180,0.35)'
            ctx.font = `${fontSize}px Inter`

            drops.forEach((y, i) => {
                const text = letters[Math.floor(Math.random() * letters.length)]
                ctx.fillText(text, i * fontSize, y * fontSize)

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            })
        }

        const interval = setInterval(draw, 50)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-100"
        />
    )
}
