import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Interactive "tooth that shines on hover" section.
 * Encantadora: um dente 3D-ish brilha ao hover, revelando antes/depois
 */
export default function SmileInteraction() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPos(pct)
  }

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX) }
  const handleTouchMove = (e) => { handleMove(e.touches[0].clientX) }

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--bg-ice)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Transformacao
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Veja o poder de um{' '}
            <span style={{ color: 'var(--primary)' }}>sorriso novo</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            Arraste o controle para ver como nossos tratamentos transformam sorrisos.
          </p>
        </motion.div>

        {/* Interactive slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            style={{ aspectRatio: '16/9' }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* "Before" side - muted */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
              }}
            >
              <div className="text-center">
                <svg width="120" height="140" viewBox="0 0 100 120" className="mx-auto mb-4">
                  <path
                    d="M50 10 C25 10 10 30 10 50 C10 70 20 90 30 110 C35 120 40 120 45 110 C47 105 50 100 50 100 C50 100 53 105 55 110 C60 120 65 120 70 110 C80 90 90 70 90 50 C90 30 75 10 50 10Z"
                    fill="#ccc"
                    stroke="#bbb"
                    strokeWidth="2"
                  />
                  <text x="50" y="55" textAnchor="middle" fill="#999" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="600">
                    ANTES
                  </text>
                </svg>
                <p className="text-lg font-medium" style={{ color: '#999' }}>Sorriso com problemas</p>
              </div>
            </div>

            {/* "After" side - vibrant */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--primary-light) 0%, #d4eef3 50%, var(--primary) 200%)',
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <div className="text-center">
                <svg width="120" height="140" viewBox="0 0 100 120" className="mx-auto mb-4">
                  <defs>
                    <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#f0f8fa', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 10 C25 10 10 30 10 50 C10 70 20 90 30 110 C35 120 40 120 45 110 C47 105 50 100 50 100 C50 100 53 105 55 110 C60 120 65 120 70 110 C80 90 90 70 90 50 C90 30 75 10 50 10Z"
                    fill="url(#toothGrad)"
                    stroke="var(--primary)"
                    strokeWidth="2"
                  />
                  {/* Shine */}
                  <path
                    d="M30 30 Q40 25 45 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <text x="50" y="55" textAnchor="middle" fill="var(--primary)" fontSize="12" fontFamily="Poppins, sans-serif" fontWeight="600">
                    DEPOIS
                  </text>
                </svg>
                <p className="text-lg font-medium" style={{ color: 'var(--primary-dark)' }}>Sorriso transformado</p>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 z-10"
              style={{
                left: `${sliderPos}%`,
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  cursor: 'ew-resize',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 4l-6 8 6 8" />
                  <path d="M16 4l6 8-6 8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center mt-6 text-sm" style={{ color: 'var(--text-body)' }}>
            Arraste o cursor para comparar o antes e depois. Ilustracao representativa.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
