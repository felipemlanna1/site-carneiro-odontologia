import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, ArrowRight } from 'lucide-react'

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

export default function CtaBanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--bg-white)' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          }}
        >
          {/* Background decorative */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            />
          </div>

          <div className="relative z-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              Pronto para transformar{' '}
              <span style={{ color: 'var(--gold)' }}>seu sorriso?</span>
            </h2>
            <p
              className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              Agende agora sua avaliação com um de nossos especialistas e
              descubra como podemos cuidar do seu sorriso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  backgroundColor: '#fff',
                  color: 'var(--primary)',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}
              >
                <Phone size={22} />
                Agendar Consulta
              </motion.a>
              <motion.a
                href="tel:+5548991451758"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
                style={{
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Ligue Agora
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
