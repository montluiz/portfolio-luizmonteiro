import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import '../../styles/about.css'

function GithubIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="about__social-icon">
			<path
				fill="currentColor"
				d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.87c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.95-2.35 4.82-4.58 5.07.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .26.18.58.69.48A10.3 10.3 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
			/>
		</svg>
	)
}

function LinkedInIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="about__social-icon">
			<path
				fill="currentColor"
				d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.52v6.22ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"
			/>
		</svg>
	)
}

export function AboutMe() {
	return (
			<motion.section
				id="sobre-mim"
				className="about"
				initial={{ opacity: 0, y: 32 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
			>
				<motion.h3 className="about__Hi" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: 0.05 }}>
					Olá, meu nome é
				</motion.h3>
				<motion.h1 className="about__name" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: 0.1 }}>
					Luiz Monteiro
				</motion.h1>
				<motion.h2 className="about__role" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: 0.15 }}>
					Desenvolvedor Front-end
				</motion.h2>
				<motion.p className="about__description" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.2 }}>
					Desenvolvedor front-end focado em criar interfaces modernas, intuitivas e responsivas, com atenção
					à experiência do usuário, performance e acabamento visual. Estou sempre evoluindo para transformar
					ideias em soluções funcionais, bem estruturadas e de alto impacto.
				</motion.p>
				<motion.div className="about__links" aria-label="Contatos profissionais" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.25 }}>
				<a className="about__link" href="https://www.linkedin.com/in/luizmonteiroo/" target="_blank" rel="noreferrer">
					<LinkedInIcon />
					LinkedIn
				</a>
				<a className="about__link" href="https://github.com/montluiz" target="_blank" rel="noreferrer">
					<GithubIcon />
					GitHub
				</a>
				<a className="about__link" href="mailto:ardoiz952@gmail.com">
					<Mail size={18} />
					Email
				</a>
				</motion.div>
			</motion.section>
	)
}
