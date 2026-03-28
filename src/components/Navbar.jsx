import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#servicos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="./images/logo-180.png"
            alt="Carneiro Odontologia"
            className="h-12 w-auto transition-all duration-300"
            style={{
              background: scrolled ? 'transparent' : 'rgba(255,255,255,0.95)',
              borderRadius: '8px',
              padding: scrolled ? '0' : '4px 6px',
            }}
          />
          <div className="hidden sm:block">
            <span
              className="text-lg font-semibold block leading-tight transition-colors duration-300"
              style={{ fontFamily: 'Poppins, sans-serif', color: scrolled ? 'var(--secondary)' : '#fff' }}
            >
              Carneiro
            </span>
            <span
              className="text-xs tracking-wider uppercase transition-colors duration-300"
              style={{ color: scrolled ? 'var(--primary)' : 'rgba(255,255,255,0.7)' }}
            >
              Odontologia
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: scrolled ? 'var(--secondary)' : '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}
        >
          <Phone size={16} />
          Agendar Consulta
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? 'var(--secondary)' : '#fff' }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium py-2"
                  style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center px-6 py-4 rounded-full text-white font-semibold text-lg"
                style={{ backgroundColor: 'var(--primary)', fontFamily: 'Poppins, sans-serif' }}
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
