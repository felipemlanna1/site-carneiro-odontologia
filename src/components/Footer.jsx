import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
)

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="./images/logo-180.png"
                alt="Carneiro Odontologia"
                className="h-12 w-auto"
                style={{ filter: 'brightness(2)' }}
              />
              <div>
                <span
                  className="text-lg font-semibold block leading-tight"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#fff' }}
                >
                  Carneiro
                </span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: 'var(--primary)' }}
                >
                  Odontologia
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Saude bucal para toda a familia. Equipe de especialistas dedicados
              ao seu melhor sorriso desde 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/clinica.carneiro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:clinicacarneirosc@gmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Especialidades */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              Especialidades
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                'Implantodontia',
                'Odontopediatria',
                'Ortodontia e Invisalign',
                'Endodontia Digital',
                'Harmonizacao Orofacial',
                'Estetica Dental',
                'Protese e Reabilitacao',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-sm transition-colors duration-200 hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              Links Rapidos
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Sobre Nos', href: '#sobre' },
                { label: 'Nossa Equipe', href: '#equipe' },
                { label: 'Depoimentos', href: '#depoimentos' },
                { label: 'Contato', href: '#contato' },
                { label: 'Instagram', href: 'https://instagram.com/clinica.carneiro' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm flex items-center gap-1 transition-colors duration-200 hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {item.label}
                    {item.href.startsWith('http') && <ExternalLink size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="shrink-0 mt-1" style={{ color: 'var(--primary)' }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Rua Lauro Linhares, 2123<br />
                  Torre B, Sala 201<br />
                  Trindade Shopping<br />
                  Florianopolis - SC, 88036-003
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0" style={{ color: 'var(--primary)' }} />
                <a
                  href="tel:+5548991451758"
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  (48) 99145-1758
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0" style={{ color: 'var(--primary)' }} />
                <a
                  href="mailto:clinicacarneirosc@gmail.com"
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  clinicacarneirosc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {currentYear} Carneiro Odontologia Integrada Ltda.
            CNPJ: 38.732.539/0001-08. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            CRO/SC 17.902 &middot; EPAO/SC 3930
          </p>
        </div>
      </div>
    </footer>
  )
}
