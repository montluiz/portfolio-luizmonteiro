import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Cloud } from 'lucide-react'
import {
	siCss,
	siFigma,
	siGit,
	siHtml5,
	siLinux,
	siMongodb,
	siNodedotjs,
	siPostgresql,
	siPython,
	siReact,
	siRedis,
	siTailwindcss,
	siTypescript,
	siJavascript,
} from 'simple-icons/icons'
import '../../styles/skills.css'

type SkillItem = {
	label: string
	icon:
		| { kind: 'brand'; path: string; hex: string }
		| { kind: 'lucide'; component: typeof Cloud }
}

function brand(icon: { path: string; hex: string }) {
	return { kind: 'brand' as const, path: icon.path, hex: icon.hex }
}

type SkillCategoryProps = {
	title: string
	items: SkillItem[]
}

type SkillSectionProps = {
	title: string
	description: string
	children: ReactNode
}

const languages: SkillItem[] = [
	{ label: 'JavaScript', icon: brand(siJavascript) },
	{ label: 'TypeScript', icon: brand(siTypescript) },
	{ label: 'Python', icon: brand(siPython) },
	{ label: 'HTML5', icon: brand(siHtml5) },
	{ label: 'CSS3', icon: brand(siCss) },
]

const frameworks: SkillItem[] = [
	{ label: 'React', icon: brand(siReact) },
	{ label: 'Tailwind CSS', icon: brand(siTailwindcss) },
	{ label: 'Node.js', icon: brand(siNodedotjs) },
]

const databases: SkillItem[] = [
	{ label: 'PostgreSQL', icon: brand(siPostgresql) },
	{ label: 'MongoDB', icon: brand(siMongodb) },
	{ label: 'Redis', icon: brand(siRedis) },
]

const tools: SkillItem[] = [
	{ label: 'Git', icon: brand(siGit) },
	{ label: 'AWS', icon: { kind: 'lucide', component: Cloud } },
	{ label: 'Linux', icon: brand(siLinux) },
	{ label: 'Figma', icon: brand(siFigma) },
]

function SkillItemBadge({ item }: { item: SkillItem }) {
	return (
		<div className="skills__item">
			{item.icon.kind === 'brand' ? (
				<svg className="skills__item-icon skills__item-icon--brand" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
					<path d={item.icon.path} fill={`#${item.icon.hex}`} />
				</svg>
			) : (
				<item.icon.component className="skills__item-icon skills__item-icon--lucide" size={18} aria-hidden="true" />
			)}
			<span className="skills__item-label">{item.label}</span>
		</div>
	)
}

function SkillCategory({ title, items }: SkillCategoryProps) {
	return (
		<motion.article
			className="skills__group-card"
			initial={{ opacity: 0, y: 26 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.55, ease: 'easeOut' }}
		>
			<h3 className="skills__group-title">{title}</h3>
			<div className="skills__items">
				{items.map((item) => (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.35 }}
					>
						<SkillItemBadge item={item} />
					</motion.div>
				))}
			</div>
		</motion.article>
	)
}

function SkillSection({ title, description, children }: SkillSectionProps) {
	return (
		<motion.div
			className="skills__section"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
		>
			<div className="skills__section-copy">
				<p className="skills__section-kicker">Habilidades e especialidades.</p>
				<h2 className="skills__section-title">{title}</h2>
				<p className="skills__section-description">{description}</p>
			</div>
			<div className="skills__section-grid">{children}</div>
		</motion.div>
	)
}

export function Skills() {
	return (
		<section id="habilidades" className="skills">
			<div className="skills__container">
				<SkillSection
					title="Habilidades e especialidades."
					description="Um conjunto de tecnologias que utilizo, das linguagens aos frameworks, bancos de dados e ferramentas."
				>
					<SkillCategory title="Linguagens" items={languages} />
					<SkillCategory title="Frameworks e bibliotecas" items={frameworks} />
					<SkillCategory title="Bancos de dados" items={databases} />
					<SkillCategory title="Ferramentas e plataformas" items={tools} />
				</SkillSection>
			</div>
		</section>
	)
}
