import '../styles/footer.css'

export function Footer() {
	return (
		<footer className="footer" aria-label="Rodapé do portfólio">
			<div className="footer__inner">
				<p className="footer__title">Desenvolvido por Luiz Monteiro</p>
				<p className="footer__subtitle">
					Desenvolvedor Front-end | React | TypeScript | UI/UX 
				</p>
				<p className="footer__meta">© 2026 Luiz Monteiro. Todos os direitos reservados.</p>
			</div>
		</footer>
	)
}