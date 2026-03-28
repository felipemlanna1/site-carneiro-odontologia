import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const team = [
  {
    name: 'Dr. Mylo Carneiro',
    role: 'Diretor',
    specialty: 'Especialista em Implantodontia',
    cro: 'CRO/SC 17.902',
    photo: './images/depo-1.png',
  },
  {
    name: 'Dra. Bruna',
    role: 'Dentista',
    specialty: 'Odontopediatria, Mestranda',
    cro: null,
    photo: './images/depo-2.png',
  },
  {
    name: 'Dr. Ulysses',
    role: 'Dentista',
    specialty: 'Endodontia (US Navy/Bethesda)',
    cro: null,
    photo: './images/depo-3.png',
  },
  {
    name: 'Dra. Virginia',
    role: 'Dentista',
    specialty: 'Ortodontia (USP/Bauru)',
    cro: null,
    photo: './images/depo-4.png',
  },
  {
    name: 'Dra. Iris Aciole',
    role: 'Tec. em Saude Bucal',
    specialty: 'Estudante de Odontologia',
    cro: null,
    photo: './images/depo-5.png',
  },
  {
    name: 'Dra. Fernanda',
    role: 'Dentista',
    specialty: 'Clinica Geral, Cirurgia Oral',
    cro: null,
    photo: './images/depo-6.png',
  },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="equipe" className="py-24" style={{ backgroundColor: 'var(--bg-white)' }}>
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
            Nossa Equipe
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
          >
            Profissionais que fazem a{' '}
            <span style={{ color: 'var(--primary)' }}>diferenca</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-body)' }}>
            Equipe composta exclusivamente por especialistas, cada um referencia
            em sua area de atuacao.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
              }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '320px' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background: 'linear-gradient(to top, rgba(44,62,80,0.9) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: 'var(--primary)' }}
                >
                  {member.specialty}
                </p>
                {member.cro && (
                  <p className="text-xs" style={{ color: 'var(--text-body)' }}>
                    {member.cro}
                  </p>
                )}
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 w-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(90deg, var(--primary), var(--gold))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                }}
                ref={(el) => {
                  if (el) {
                    el.parentElement.addEventListener('mouseenter', () => {
                      el.style.transform = 'scaleX(1)'
                    })
                    el.parentElement.addEventListener('mouseleave', () => {
                      el.style.transform = 'scaleX(0)'
                    })
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
