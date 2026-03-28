import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const colors = [
  { name: 'Teal Azulado', hex: '#5BA4B5', usage: 'Cor principal. Headers, botoes, icones.' },
  { name: 'Azul Escuro', hex: '#2C3E50', usage: 'Textos, navegacao, contraste.' },
  { name: 'Azul Gelo', hex: '#E8F4F8', usage: 'Fundos, cards, destaques suaves.' },
  { name: 'Dourado', hex: '#D4A853', usage: 'Acentos, badges, destaque premium.' },
  { name: 'Branco', hex: '#FFFFFF', usage: 'Fundo principal. Limpeza e clareza.' },
  { name: 'Cinza Escuro', hex: '#333333', usage: 'Textos de corpo, paragrafos.' },
]

const typography = [
  { font: 'Poppins', weights: '600, 700', usage: 'Titulos e headings', sample: 'Seu melhor sorriso' },
  { font: 'Open Sans', weights: '400, 600', usage: 'Textos de corpo', sample: 'Equipe de especialistas dedicados ao cuidado da sua saúde bucal.' },
]

export default function ManualDaMarca() {
  return (
    <>
      <Helmet>
        <title>Manual da Marca | Carneiro Odontologia</title>
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: '#f8fafb' }}>
        {/* Header */}
        <header className="py-8" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="max-w-5xl mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-6 text-sm transition-opacity duration-200 hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <ArrowLeft size={16} />
              Voltar ao site
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <img src="./images/logo-180.png" alt="Logo" className="h-16 w-auto" />
              <div>
                <h1
                  className="text-3xl font-bold"
                  style={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}
                >
                  Manual da Marca
                </h1>
                <p style={{ color: 'var(--primary)' }}>Carneiro Odontologia</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-16">
          {/* Logo Section */}
          <section className="mb-20">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Logo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#fff' }}>
                <img src="./images/logo.webp" alt="Logo principal" className="max-h-48 w-auto" />
              </div>
              <div className="p-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
                <img
                  src="./images/logo.webp"
                  alt="Logo fundo escuro"
                  className="max-h-48 w-auto"
                  style={{ filter: 'brightness(2)' }}
                />
              </div>
            </div>
            <div className="mt-6 p-6 rounded-xl" style={{ backgroundColor: '#fff' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
                <strong>Descricao:</strong> Carneiro (ovelha) estilizado em formato arredondado e organico,
                com espirais. Design mínimalista em cor unica (teal azulado). Transmite cuidado,
                suavidade e profissionalismo.
              </p>
              <p className="text-sm mt-3" style={{ color: 'var(--text-body)' }}>
                <strong>Area de proteção:</strong> Manter sempre um espaco de pelo menos 1/4 do
                tamanho do logo ao redor.
              </p>
            </div>
          </section>

          {/* Colors */}
          <section className="mb-20">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Paleta de Cores
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((color) => (
                <div key={color.hex} className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#fff' }}>
                  <div
                    className="h-24"
                    style={{
                      backgroundColor: color.hex,
                      border: color.hex === '#FFFFFF' ? '1px solid #eee' : 'none',
                    }}
                  />
                  <div className="p-4">
                    <p className="font-semibold text-sm" style={{ color: 'var(--secondary)' }}>
                      {color.name}
                    </p>
                    <p className="text-xs font-mono mt-1" style={{ color: 'var(--text-body)' }}>
                      {color.hex}
                    </p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-body)' }}>
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-20">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Tipografia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {typography.map((t) => (
                <div key={t.font} className="p-8 rounded-2xl" style={{ backgroundColor: '#fff' }}>
                  <p
                    className="text-sm font-medium uppercase tracking-wider mb-2"
                    style={{ color: 'var(--primary)' }}
                  >
                    {t.usage}
                  </p>
                  <p
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: `${t.font}, sans-serif`, color: 'var(--secondary)' }}
                  >
                    {t.sample}
                  </p>
                  <div className="flex gap-4 text-sm" style={{ color: 'var(--text-body)' }}>
                    <span><strong>Fonte:</strong> {t.font}</span>
                    <span><strong>Pesos:</strong> {t.weights}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tom de Voz */}
          <section className="mb-20">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Tom de Voz
            </h2>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fff' }}>
              <p className="text-lg font-medium mb-4" style={{ color: 'var(--secondary)' }}>
                Profissional-acolhedor
              </p>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--text-body)' }}>
                Tom profissional mas caloroso e humanizado. Enfatiza conforto, segurança e
                acolhimento. Linguagem clara e acessivel, evitando jargao tecnico excessivo.
                Positivo e tranquilizador.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#25A65F' }}>Fazer</h4>
                  <ul className="flex flex-col gap-2">
                    {[
                      'Linguagem acessivel e calorosa',
                      'Enfatizar conforto e segurança',
                      'Destacar experiência da equipe',
                      'Tratamento proximo usando "você"',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-sm" style={{ color: 'var(--text-body)' }}>
                        <span style={{ color: '#25A65F' }}>&#10003;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#E74C3C' }}>Evitar</h4>
                  <ul className="flex flex-col gap-2">
                    {[
                      'Jargao tecnico excessivo',
                      'Tom formal ou frio',
                      'Promessas sem ressalvas',
                      'Linguagem de vendas agressiva',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-sm" style={{ color: 'var(--text-body)' }}>
                        <span style={{ color: '#E74C3C' }}>&#10007;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Dados da Empresa */}
          <section>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--secondary)', fontFamily: 'Poppins, sans-serif' }}
            >
              Dados da Empresa
            </h2>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#fff' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm" style={{ color: 'var(--text-body)' }}>
                <div><strong>Razao Social:</strong> Carneiro Odontologia Integrada Ltda</div>
                <div><strong>CNPJ:</strong> 38.732.539/0001-08</div>
                <div><strong>CRO/SC:</strong> 17.902</div>
                <div><strong>EPAO/SC:</strong> 3930</div>
                <div><strong>Fundacao:</strong> Setembro de 2020</div>
                <div><strong>Diretor:</strong> Dr. Mylo Carneiro</div>
                <div><strong>WhatsApp:</strong> (48) 99145-1758</div>
                <div><strong>Instagram:</strong> @clínica.carneiro</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
