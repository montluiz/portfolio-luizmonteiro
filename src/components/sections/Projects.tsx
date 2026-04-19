import { motion } from 'framer-motion'
import '../../styles/projects.css'

type Project = {
	title: string
	description: string
	tags: string[]
	status: string
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
	},
	{
		title: 'Dashboard Analítico',
		description:
			'Interface administrativa com cards, métricas e hierarquia visual para leitura rápida de dados.',
		tags: ['React', 'TypeScript', 'UI'],
		status: 'Responsivo',
		descriptionClassName: 'projects__description--large',
	},
	{
		title: 'Sistema de Portfólio',
		description:
			'Uma estrutura de portfólio moderna pensada para apresentar habilidades, projetos e contatos com clareza.',
		tags: ['Design', 'Frontend', 'Layout'],
		status: 'Atual',
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
