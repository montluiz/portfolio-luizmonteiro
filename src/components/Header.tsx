import { useEffect, useState } from 'react'
import { MoonStar, SunMedium } from 'lucide-react'
import '../styles/header.css'

const navigationItems = [
  { label: 'Sobre mim', href: '#sobre-mim' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contact' },
]

export function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const theme = isDarkTheme ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [isDarkTheme])

  function handleToggleTheme() {
    setIsDarkTheme((currentTheme) => !currentTheme)
  }

  function handleToggleMenu() {
    setIsMenuOpen((currentState) => !currentState)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isMenuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__inner">
        <a href="#home" className="header__brand">
          Luiz Monteiro
        </a>

        <nav
          id="header-navigation"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="header__link" onClick={handleCloseMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__theme-button"
            onClick={handleToggleTheme}
            aria-pressed={isDarkTheme}
            aria-label={isDarkTheme ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
          >
            {isDarkTheme ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>

          <button
            type="button"
            className="header__menu-button"
            onClick={handleToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="header-navigation"
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
