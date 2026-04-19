import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, SendHorizontal } from 'lucide-react'
import '../../styles/contact.css'

function LinkedInIcon() {
	return (
		<svg className="contact__info-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
			<path
				fill="currentColor"
				d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.4 4.34 5.52v6.22ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"
			/>
		</svg>
	)
}

export function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const subject = encodeURIComponent(`Contato pelo portfólio - ${name || 'Novo contato'}`)
		const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`)
		window.location.href = `mailto:ardoiz952@gmail.com?subject=${subject}&body=${body}`
	}

	return (
		<motion.section
			id="contact"
			className="contact"
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
		>
			<div className="contact__container">
				<div className="contact__copy">
					<p className="contact__eyebrow">Entre em contato</p>
					<h2 className="contact__title">Vamos conversar!</h2>
					<p className="contact__availability">Envie uma mensagem ou me encontre nas redes sociais.</p>
					<p className="contact__description">
						Se você quiser trocar uma ideia, propor um projeto ou falar sobre desenvolvimento front-end,
						estou por aqui para responder.
					</p>

					<div className="contact__info-list" aria-label="Informações de contato">
						<p className="contact__info-heading">Informações de contato</p>
						<a
							className="contact__info-item"
							href="mailto:ardoiz952@gmail.com"
							aria-label="Enviar email para ardoiz952@gmail.com"
						>
							<Mail className="contact__info-icon" size={18} aria-hidden="true" />
							<div>
								<p className="contact__info-label">Email</p>
								<p className="contact__info-text">Envie um email diretamente.</p>
								<p className="contact__info-link">ardoiz952@gmail.com</p>
							</div>
							<ArrowUpRight className="contact__info-action" size={16} aria-hidden="true" />
						</a>
						<a
							className="contact__info-item"
							href="https://www.linkedin.com/in/luizmonteiroo/"
							target="_blank"
							rel="noreferrer"
							aria-label="Abrir LinkedIn de Luiz Monteiro em nova aba"
						>
							<LinkedInIcon />
							<div>
								<p className="contact__info-label">LinkedIn</p>
								<p className="contact__info-text">Conecte-se profissionalmente.</p>
								<p className="contact__info-link">linkedin.com/in/luizmonteiroo</p>
							</div>
							<ArrowUpRight className="contact__info-action" size={16} aria-hidden="true" />
						</a>
						<a
							className="contact__info-item"
							href="https://www.google.com/maps/search/Fortaleza,+CE,+Brasil"
							target="_blank"
							rel="noreferrer"
							aria-label="Abrir localização Fortaleza, CE, Brasil"
						>
							<MapPin className="contact__info-icon" size={18} aria-hidden="true" />
							<div>
								<p className="contact__info-label">Localização</p>
								<p className="contact__info-text">Fortaleza, CE, Brasil.</p>
								<p className="contact__info-link">Abrir no mapa</p>
							</div>
							<ArrowUpRight className="contact__info-action" size={16} aria-hidden="true" />
						</a>
					</div>
				</div>

				<div className="contact__card">
					<p className="contact__card-label">Envie uma mensagem</p>
					<form className="contact__form" onSubmit={handleSubmit}>
						<div className="contact__field-group">
							<label className="contact__field-label" htmlFor="contact-name">
								Nome
							</label>
							<input
								id="contact-name"
								className="contact__field"
								type="text"
								name="name"
								placeholder="Seu nome"
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</div>

						<div className="contact__field-group">
							<label className="contact__field-label" htmlFor="contact-email">
								Email
							</label>
							<input
								id="contact-email"
								className="contact__field"
								type="email"
								name="email"
								placeholder="seuemail@exemplo.com"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>

						<div className="contact__field-group contact__field-group--full">
							<label className="contact__field-label" htmlFor="contact-message">
								Mensagem
							</label>
							<textarea
								id="contact-message"
								className="contact__field contact__field--textarea"
								name="message"
								placeholder="Conte um pouco sobre seu projeto ou ideia"
								value={message}
								onChange={(event) => setMessage(event.target.value)}
							/>
						</div>

						<button className="contact__submit" type="submit">
							<SendHorizontal size={18} aria-hidden="true" />
							Enviar mensagem
						</button>
					</form>
				</div>
			</div>
		</motion.section>
	)
}
