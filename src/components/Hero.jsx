import { motion } from 'framer-motion'
import { Phone, Star, Clock, Shield } from 'lucide-react'

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--secondary) 0%, #1a2a3a 50%, var(--primary-dark) 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tooth shape subtle bg */}
        <svg className="absolute top-20 right-10 opacity-5" width="300" height="350" viewBox="0 0 100 120" fill="white">
          <path d="M50 10 C25 10 10 30 10 50 C10 70 20 90 30 110 C35 120 40 120 45 110 C47 105 50 100 50 100 C50 100 53 105 55 110 C60 120 65 120 70 110 C80 90 90 70 90 50 C90 30 75 10 50 10Z" />
        </svg>
        <svg className="absolute bottom-40 left-20 opacity-5" width="200" height="240" viewBox="0 0 100 120" fill="white">
          <path d="M50 10 C25 10 10 30 10 50 C10 70 20 90 30 110 C35 120 40 120 45 110 C47 105 50 100 50 100 C50 100 53 105 55 110 C60 120 65 120 70 110 C80 90 90 70 90 50 C90 30 75 10 50 10Z" />
        </svg>
        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(91,164,181,0.15)', animation: 'float 6s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(212,168,83,0.1)', animation: 'float 8s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(212,168,83,0.2)', border: '1px solid rgba(212,168,83,0.3)' }}
          >
            <Star size={16} style={{ color: 'var(--gold)' }} fill="var(--gold)" />
            <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>
              5.0 no Google - 170+ avaliacoes
            </span>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}
          >
            Seu melhor sorriso{' '}
            <span style={{ color: 'var(--gold)' }}>e a nossa</span>{' '}
            maior conquista
          </h1>

          <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Equipe composta exclusivamente por especialistas,
            tecnologia de ponta e um ambiente acolhedor para toda a familia.
            Ha mais de 5 anos cuidando de sorrisos em Florianopolis.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition-shadow duration-300"
              style={{
                backgroundColor: 'var(--primary)',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 8px 30px rgba(91,164,181,0.4)',
              }}
            >
              <Phone size={20} />
              Agendar Consulta
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Nossas Especialidades
            </motion.a>
          </div>

          {/* Mini features */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Clock size={18} />, text: 'Plantao 24h' },
              { icon: <Shield size={18} />, text: 'Biosseguranca Total' },
              { icon: <Star size={18} />, text: 'So Especialistas' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side - clinic image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            {/* Main image */}
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.3)' }}
            >
              <img
                src="./images/foto-clinica-2.png"
                alt="Consultorio moderno da Carneiro Odontologia"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl shadow-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary-light)' }}
                >
                  <Star size={24} style={{ color: 'var(--primary)' }} fill="var(--primary)" />
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}>
                    170+
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                    Avaliacoes 5 estrelas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
