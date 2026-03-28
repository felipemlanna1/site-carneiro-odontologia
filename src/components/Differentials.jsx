import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Clock, ShieldCheck, Users, Scan, Heart, MapPin, Award, Stethoscope
} from 'lucide-react'

const items = [
  {
    icon: <Award size={32} />,
    title: 'Nota 5.0 no Google',
    desc: '170+ avaliacoes com nota maxima. Referencia em Florianopolis.',
  },
  {
    icon: <Clock size={32} />,
    title: 'Plantao 24h',
    desc: 'Emergencias odontologicas a qualquer hora do dia ou da noite.',
  },
  {
    icon: <Stethoscope size={32} />,
    title: 'So Especialistas',
    desc: 'Cada profissional e especialista formado em sua area de atuacao.',
  },
  {
    icon: <Scan size={32} />,
    title: 'Raio-X Digital',
    desc: 'Diagnostico por imagem no proprio consultorio, sem deslocamento.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Protocolo de Ansiedade',
    desc: 'Tecnicas de sedacao e conforto para pacientes com medo de dentista.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Biosseguranca Total',
    desc: 'Processos rigorosos de esterilizacao e higiene em cada procedimento.',
  },
  {
    icon: <Users size={32} />,
    title: 'Atendimento Personalizado',
    desc: 'Sem convenio. Foco total em voce, com tempo e atencao que merece.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Proxima a UFSC',
    desc: 'Trindade Shopping, com facil acesso para toda a regiao de Florianopolis.',
  },
]

export default function Differentials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--bg-ice)' }}>
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
            Por que nos escolher
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Diferenciais que{' '}
            <span style={{ color: 'var(--primary)' }}>importam</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            Cada detalhe e pensado para garantir sua seguranca, conforto e resultados excepcionais.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-8 rounded-2xl transition-all duration-300 group"
              style={{ backgroundColor: '#fff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(91,164,181,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: 'var(--primary-light)',
                  color: 'var(--primary)',
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
