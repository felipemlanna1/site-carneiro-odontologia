import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Phone, MapPin, Clock, Mail, ExternalLink
} from 'lucide-react'

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

const info = [
  {
    icon: <MapPin size={24} />,
    title: 'Endereco',
    lines: [
      'Rua Lauro Linhares, 2123',
      'Torre B, Sala 201 - Trindade Shopping',
      'Florianópolis - SC, 88036-003',
    ],
  },
  {
    icon: <Phone size={24} />,
    title: 'Telefone / WhatsApp',
    lines: ['(48) 99145-1758'],
    link: whatsappLink,
  },
  {
    icon: <Mail size={24} />,
    title: 'E-mail',
    lines: ['clínicacarneirosc@gmail.com'],
    link: 'mailto:clínicacarneirosc@gmail.com',
  },
  {
    icon: <Clock size={24} />,
    title: 'Horarios',
    lines: [
      'Seg a Sex: 9h as 19h',
      'Sabados: 9h as 13h',
      'Emergências: 24 horas',
    ],
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contato" className="py-24" style={{ backgroundColor: '#fff' }}>
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
            Entre em Contato
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Estamos esperando{' '}
            <span style={{ color: 'var(--primary)' }}>seu contato</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            Agende sua consulta pelo WhatsApp ou venha nos visitar na Trindade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--primary-light)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary)', color: '#fff' }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-sm" style={{ color: 'var(--text-body)' }}>
                    {line}
                  </p>
                ))}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-sm font-medium"
                    style={{ color: 'var(--primary)' }}
                  >
                    Acessar <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8" style={{ height: '280px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0!2d-48.5192!3d-27.5878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527382!2sCarneiro+Odontologia!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Carneiro Odontologia"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: '#25D366',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 8px 25px rgba(37,211,102,0.3)',
                }}
              >
                <img src="./images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/clínica.carneiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 8px 25px rgba(131,58,180,0.3)',
                }}
              >
                <InstagramIcon size={22} />
                @clínica.carneiro
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
