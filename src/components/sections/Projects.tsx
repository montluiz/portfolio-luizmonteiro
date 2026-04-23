import { motion } from 'framer-motion'
import dashboardImage from '../../assets/projects/dashboard.png'
import landingPageImage from '../../assets/projects/landing-page.png'
import '../../styles/projects.css'

type Project = {
	title: string
	description: string
	tags: string[]
	status: string
	image?: string
	imageAlt?: string
	descriptionClassName?: string
	demo?: string
	code?: string
}

const projects: Project[] = [
	{
		title: 'Landing Page Premium',
		description:
			'Uma landing page com foco em conversão, animações sutis e layout responsivo para destacar produto ou serviço.',
		tags: ['React', 'CSS', 'Motion'],
		status: 'Em destaque',
		image: landingPageImage,
		imageAlt: 'Prévia da landing page premium',
	},
	{
		title: 'Dashboard Analítico',
		description:
			'Interface administrativa com cards, métricas e hierarquia visual para leitura rápida de dados.',
		tags: ['React', 'TypeScript', 'UI'],
		status: 'Responsivo',
		image: dashboardImage,
		imageAlt: 'Prévia do dashboard analítico',
		descriptionClassName: 'projects__description--large',
	},
]

function ProjectCard({ project }: { project: Project }) {
	return (
		<motion.article
			className="projects__card"
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.55, ease: 'easeOut' }}
		>
			<div className="projects__media">
				{project.image ? (
					<img className="projects__image" src={project.image} alt={project.imageAlt ?? project.title} loading="lazy" />
				) : (
					<div className="projects__image-fallback" aria-hidden="true">
						<span>{project.title}</span>
					</div>
				)}
			</div>

			<div className="projects__content">
				<div className="projects__card-top">
					<span className="projects__status">{project.status}</span>
					<h3 className="projects__title">{project.title}</h3>
				</div>

				<p className={`projects__description ${project.descriptionClassName ?? ''}`.trim()}>{project.description}</p>

				<div className="projects__tags" aria-label={`Tecnologias de ${project.title}`}>
					{project.tags.map((tag) => (
						<span key={tag} className="projects__tag">
							{tag}
						</span>
					))}
				</div>
			</div>
		</motion.article>
	)
}

export function Projects() {
	return (
		<motion.section
			id="projects"
			className="projects"
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
		>
			<div className="projects__container">
				<div className="projects__header">
					<p className="projects__eyebrow">Projetos</p>
					<h2 className="projects__headline">Alguns trabalhos recentes.</h2>
					<p className="projects__subtitle">
						Uma seleção de interfaces e experiências que mostram meu foco em layout limpo, responsividade e
						uma apresentação visual mais refinada.
					</p>
				</div>

				<div className="projects__grid">
					{projects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</motion.section>
	)
}
