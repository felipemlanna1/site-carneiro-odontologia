import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Award, Users, Zap } from 'lucide-react'

const stats = [
  { icon: <Award size={28} />, number: '5+', label: 'Anos de experiencia' },
  { icon: <Users size={28} />, number: '170+', label: 'Avaliacoes 5 estrelas' },
  { icon: <Heart size={28} />, number: '6', label: 'Especialistas na equipe' },
  { icon: <Zap size={28} />, number: '24h', label: 'Plantao de emergência' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="./images/clinica-sobre.png"
                alt="Recepcao da Carneiro Odontologia com parede verde e logo neon"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent bar */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10"
              style={{ backgroundColor: 'var(--primary-light)' }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Sobre nos
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Saude bucal para{' '}
              <span style={{ color: 'var(--primary)' }}>toda a familia</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
              A Carneiro Odontologia nasceu com a missão de oferecer atendimento
              odontológico de excelência em Florianopolis. Localizada na Trindade,
              proximo a UFSC, nossa clinica reune uma equipe composta exclusivamente
              por especialistas, cada um referência em sua area.
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>
              Acreditamos que um sorriso saudavel transforma vidas. Por isso, investimos
              em tecnologia de ponta — como raio-X digital no consultório — e em
              técnicas de reducao de estresse, incluindo sedacao e protocolo de ansiedade,
              para que você se sinta seguro e confortável.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ backgroundColor: 'var(--primary-light)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {stat.number}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
