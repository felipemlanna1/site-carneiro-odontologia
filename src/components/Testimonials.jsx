import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'E um privilegio, como toda minha familia, ser paciente da clinica Carneiro Odontologia, que proporciona atraves da competencia de seus profissionais, atendimento de qualidade, pontualidade e satisfacao.',
    author: 'Maria Soares',
    source: 'Google',
  },
  {
    text: 'Trabalho de excelente qualidade, com uma clinica maravilhosa e localizada em um lugar incrivel, com otimos profissionais e muito detalhistas durante todo o processo.',
    author: 'Paciente verificado',
    source: 'Google',
  },
  {
    text: 'Atendimento maravilhoso, profissionais atenciosos e acompanhamento de verdade no periodo pos procedimentos. Recomendo!',
    author: 'Paciente verificado',
    source: 'Google',
  },
  {
    text: 'Tres anos de tratamento na clinica. Sao excelentes profissionais, cuidadosos e honestos, com consultorio de qualidade em equipamentos e cuidados com higiene e esterilizacao.',
    author: 'Paciente verificado',
    source: 'Google',
  },
  {
    text: 'Fui atendido pelo Dr. Mylo que foi muito atencioso, depois pela Dra. Fernanda que foi extremamente atenciosa e dedicada. A protese ficou perfeita, ninguem diz que e protese. Recomendo.',
    author: 'Paciente verificado',
    source: 'Google',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (dir) => {
    if (dir === 'next') setCurrent((prev) => (prev + 1) % testimonials.length)
    else setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="depoimentos"
      className="py-24"
      style={{
        background: 'linear-gradient(135deg, var(--secondary) 0%, #1a2a3a 100%)',
      }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: 'var(--gold)', fontFamily: 'Poppins, sans-serif' }}
          >
            Depoimentos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
          >
            O que nossos pacientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
            ))}
          </div>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Nota 5.0 no Google com 170+ avaliacoes
          </p>
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <Quote
                size={48}
                style={{ color: 'var(--primary)', opacity: 0.4 }}
                className="mx-auto mb-6"
              />
              <p
                className="text-xl sm:text-2xl leading-relaxed mb-8 italic"
                style={{ color: 'rgba(255,255,255,0.9)', fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}
              >
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  {testimonials[current].author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold" style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Avaliacao no {testimonials[current].source}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={() => goTo('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => goTo('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                  transform: i === current ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
