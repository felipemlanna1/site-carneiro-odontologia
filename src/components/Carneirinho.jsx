import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Smile, Shield, Phone } from 'lucide-react'

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20de%20odontopediatria%20para%20meu%20filho(a).'

const features = [
  {
    icon: <Smile size={24} />,
    title: 'Ambiente Ludico',
    desc: 'Consultorio pensado para as criancas se sentirem seguras e confortaveis.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Especialista Dedicada',
    desc: 'Dra. Bruna, mestranda e especialista em odontopediatria e primeira infancia.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Prevencao Inteligente',
    desc: 'Acompanhamento desde o primeiro dentinho para habitos saudaveis de por vida.',
  },
]

export default function Carneirinho() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24" style={{ backgroundColor: '#fff' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: 'var(--gold)', fontFamily: 'Poppins, sans-serif' }}
            >
              Programa Carneirinho
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Odontopediatria com{' '}
              <span style={{ color: 'var(--primary)' }}>carinho e diversao</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-body)' }}>
              O programa Carneirinho foi criado para que a visita ao dentista
              seja uma experiencia positiva desde a infancia. Acreditamos que
              criancas que crescem sem medo do dentista se tornam adultos com
              saude bucal exemplar.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(212,168,83,0.15)', color: 'var(--gold)' }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-body)' }}>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg"
              style={{
                backgroundColor: 'var(--gold)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <Phone size={18} />
              Agendar para seu filho(a)
            </motion.a>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div
              className="rounded-3xl overflow-hidden p-8 relative"
              style={{ backgroundColor: 'var(--primary-light)' }}
            >
              <img
                src="./images/carneirinho-home.png"
                alt="Mascote Carneirinho - Odontopediatria"
                className="w-full max-w-md h-auto mx-auto relative z-10"
              />
              {/* Decorative circles */}
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-30"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <div
                className="absolute bottom-10 left-6 w-12 h-12 rounded-full opacity-20"
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
