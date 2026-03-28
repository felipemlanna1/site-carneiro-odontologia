import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const whatsappLink = 'https://wa.me/5548991451758?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Carneiro%20Odontologia.'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="relative px-4 py-3 rounded-xl shadow-lg max-w-xs"
            style={{ backgroundColor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#eee', color: '#666' }}
            >
              <X size={12} />
            </button>
            <p className="text-sm font-medium" style={{ color: 'var(--secondary)' }}>
              Agende pelo WhatsApp!
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-body)' }}>
              Resposta rapida
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 6px 25px rgba(37,211,102,0.5)',
          animation: 'pulse-glow 3s ease-in-out infinite',
        }}
      >
        <img
          src="./images/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </motion.a>
    </div>
  )
}
