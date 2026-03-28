import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Stethoscope, Baby, Scan, SmilePlus, Sparkles,
  Palette, Crown, ShieldCheck, Syringe, FlaskConical,
  BrainCircuit, Dumbbell, Radio, AlertCircle, ChevronRight
} from 'lucide-react'

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20'

const services = [
  {
    icon: <Stethoscope size={28} />,
    title: 'Implantodontia',
    desc: 'Implantes dentarios com tecnologia avancada e planejamento digital para resultados precisos e duradouros.',
    tag: 'implantodontia',
  },
  {
    icon: <Baby size={28} />,
    title: 'Odontopediatria',
    desc: 'Cuidado especial e acolhedor para os pequenos. Nosso programa Carneirinho torna a visita ao dentista uma experiencia divertida.',
    tag: 'odontopediatria',
  },
  {
    icon: <Scan size={28} />,
    title: 'Endodontia Digital',
    desc: 'Tratamento de canal com tecnologia digital de ultima geracao, mais rapido, preciso e confortavel.',
    tag: 'endodontia',
  },
  {
    icon: <SmilePlus size={28} />,
    title: 'Ortodontia',
    desc: 'Aparelhos ortodonticos tradicionais e Invisalign. Planejamento personalizado para cada sorriso.',
    tag: 'ortodontia',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Harmonizacao Orofacial',
    desc: 'Procedimentos esteticos faciais para realcar sua beleza natural com harmonia e naturalidade.',
    tag: 'harmonizacao',
  },
  {
    icon: <Palette size={28} />,
    title: 'Dentistica Restauradora',
    desc: 'Restauracoes esteticas e funcionais com materiais de alta qualidade para um sorriso perfeito.',
    tag: 'dentistica',
  },
  {
    icon: <Crown size={28} />,
    title: 'Protese Dentaria',
    desc: 'Reabilitacao oral completa com proteses de alta fidelidade estetica e funcional.',
    tag: 'protese',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Estetica Dental',
    desc: 'Clareamento, lentes de contato dental e outros procedimentos para transformar seu sorriso.',
    tag: 'estetica',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Periodontia',
    desc: 'Tratamento especializado de gengivas para manter a base do seu sorriso saudavel.',
    tag: 'periodontia',
  },
  {
    icon: <FlaskConical size={28} />,
    title: 'Biopsias',
    desc: 'Diagnostico preciso de lesoes bucais com atendimento acolhedor e resultados confiaveis.',
    tag: 'biopsias',
  },
  {
    icon: <BrainCircuit size={28} />,
    title: 'Dor Orofacial e DTM',
    desc: 'Tratamento especializado para dores na articulacao da mandibula e desconfortos orofaciais.',
    tag: 'dor-orofacial',
  },
  {
    icon: <Dumbbell size={28} />,
    title: 'Protetores Bucais Invictus',
    desc: 'Protetores bucais esportivos personalizados para atletas, com ajuste perfeito e maxima protecao.',
    tag: 'protetores-bucais',
  },
  {
    icon: <Radio size={28} />,
    title: 'Raio-X Digital',
    desc: 'Diagnostico por imagem digital no proprio consultorio, sem necessidade de deslocamento.',
    tag: 'raio-x',
  },
  {
    icon: <AlertCircle size={28} />,
    title: 'Emergencia 24h',
    desc: 'Plantao 24 horas para urgencias e emergencias odontologicas. Estamos prontos quando voce precisa.',
    tag: 'emergencia',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const displayedServices = showAll ? services : services.slice(0, 8)

  return (
    <section
      id="servicos"
      className="py-24"
      style={{ backgroundColor: 'var(--bg-ice)' }}
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
            style={{ color: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Nossas Especialidades
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Cuidado completo para{' '}
            <span style={{ color: 'var(--primary)' }}>seu sorriso</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            14 especialidades em um so lugar. Cada area conduzida por
            profissionais com formacao de excelencia.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedServices.map((service, i) => (
              <motion.div
                key={service.tag}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300 group"
                style={{
                  backgroundColor: hoveredIndex === i ? 'var(--primary)' : '#fff',
                  boxShadow: hoveredIndex === i
                    ? '0 20px 40px rgba(91,164,181,0.3)'
                    : '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                {/* Tooth shine effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                  style={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, transparent 50%)',
                      animation: hoveredIndex === i ? 'tooth-shine 1.5s ease-in-out' : 'none',
                    }}
                  />
                </div>

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{
                    backgroundColor: hoveredIndex === i ? 'rgba(255,255,255,0.2)' : 'var(--primary-light)',
                    color: hoveredIndex === i ? '#fff' : 'var(--primary)',
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2 transition-colors duration-300"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: hoveredIndex === i ? '#fff' : 'var(--secondary)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 transition-colors duration-300"
                  style={{
                    color: hoveredIndex === i ? 'rgba(255,255,255,0.85)' : 'var(--text-body)',
                  }}
                >
                  {service.desc}
                </p>
                <a
                  href={`${whatsappLink}${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-300"
                  style={{
                    color: hoveredIndex === i ? '#fff' : 'var(--primary)',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  Agendar <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Ver Todas as Especialidades
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
