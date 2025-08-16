import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Users, Compass, Hammer, Wrench, CheckCircle } from 'lucide-react';

const steps = [
	{
		icon: Users,
		title: 'Consultation',
		description:
			'We begin with understanding your vision, space, and functional requirements through detailed discussions.',
		detail:
			'Our master craftsmen visit your space to assess dimensions, lighting, and architectural elements that will influence the design.',
	},
	{
		icon: Compass,
		title: 'Design & Planning',
		description:
			'Custom sketches and 3D renderings bring your vision to life before we begin crafting.',
		detail:
			'Every joint, finish, and detail is meticulously planned using traditional techniques combined with modern precision.',
	},
	{
		icon: Hammer,
		title: 'Wood Selection',
		description:
			'Hand-selected premium hardwoods are chosen for their grain, durability, and natural beauty.',
		detail:
			'We source sustainable materials from trusted suppliers, ensuring each piece of wood contributes to the overall aesthetic.',
	},
	{
		icon: Wrench,
		title: 'Artisan Crafting',
		description:
			'Master craftsmen employ time-honored techniques, combining traditional joinery with modern tools.',
		detail:
			'Each piece is shaped, refined, and finished by hand, ensuring unmatched quality and attention to detail.',
	},
	{
		icon: CheckCircle,
		title: 'Installation & Finishing',
		description:
			'Professional installation and final finishing touches complete your custom masterpiece.',
		detail:
			'Our team ensures perfect fit and finish, leaving you with a piece that will be treasured for generations.',
	},
];

const materials = [
	{
		name: 'Walnut',
		description: 'Rich, dark hardwood with distinctive grain patterns',
		image: '/images/materials/Walnut.jpeg',
	},
	{
		name: 'Cherry',
		description: 'Elegant reddish-brown wood that deepens with age',
		image: '/images/materials/Cherry.jpeg',
	},
	{
		name: 'Oak',
		description: 'Strong, durable wood with prominent grain structure',
		image: '/images/materials/Oak.jpeg',
	},
	{
		name: 'Maple',
		description: 'Light, creamy hardwood with subtle grain',
		image: '/images/materials/Maple.jpeg',
	},
	{
		name: 'Mahogany',
		description: 'Luxurious reddish-brown hardwood with deep color',
		image: '/images/materials/Mahogany.jpeg',
	},
	{
		name: 'Teak',
		description: 'Durable golden-brown hardwood with natural oils',
		image: '/images/materials/Teak.jpeg',
	},
];

const finishes = [
	{
		name: 'Matte Finish',
		description: 'Smooth, low-gloss look for a natural feel',
		image: '/images/finishes/Matt.jpeg',
	},
	{
		name: 'Gloss Finish',
		description: 'High-shine reflective surface for modern designs',
		image: '/images/finishes/Gloss.jpeg',
	},
	{
		name: 'Satin Finish',
		description: 'Subtle sheen with a silky smooth touch',
		image: '/images/finishes/Satin.jpeg',
	},
	{
		name: 'Oil Finish',
		description: 'Enhances wood grain with natural protection',
		image: '/images/finishes/Oil.jpeg',
	},
	{
		name: 'Stained Finish',
		description: 'Adds color while preserving natural grain',
		image: '/images/finishes/Stained.jpeg',
	},
	{
		name: 'Distressed Finish',
		description: 'Vintage look with character and charm',
		image: '/images/finishes/Distressed.jpeg',
	},
];

const Craftsmanship = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="pt-16 min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white"
		>
			{/* Hero Section */}
			<section className="py-20 text-center">
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className="text-5xl md:text-6xl font-bold mb-6"
				>
					The Art of Craftsmanship
				</motion.h1>
				<motion.p
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-xl text-gray-300 max-w-3xl mx-auto px-4"
				>
					Follow the journey from initial concept to finished masterpiece. Each
					step reveals the dedication, skill, and passion that goes into every Done
					Deal creation.
				</motion.p>
			</section>

			{/* Process Timeline */}
			<div ref={containerRef} className="max-w-6xl mx-auto px-4 pb-20">
				<div className="space-y-20">
					{steps.map((step, index) => {
						const Icon = step.icon;
						const isEven = index % 2 === 0;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: isEven ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`flex flex-col lg:flex-row items-center gap-12 ${
									isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
								}`}
							>
								{/* Content */}
								<div className="flex-1 space-y-6">
									<div className="flex items-center space-x-4">
										<motion.div
											whileHover={{ scale: 1.1, rotate: 5 }}
											className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center shadow-lg shadow-white/10"
										>
											<Icon className="text-white" size={32} />
										</motion.div>
										<div>
											<span className="text-gray-400 font-medium text-sm">
												Step {index + 1}
											</span>
											<h2 className="text-3xl font-bold">{step.title}</h2>
										</div>
									</div>
									<p className="text-lg text-gray-300 leading-relaxed">
										{step.description}
									</p>
									<p className="text-gray-400 leading-relaxed">
										{step.detail}
									</p>
								</div>
								{/* Visual */}
								<div className="flex-1">
									<motion.div
										whileHover={{ scale: 1.05 }}
										className="bg-[#181818] rounded-2xl p-8 shadow-lg shadow-white/5 border border-gray-700"
									>
										<div className="h-64 bg-[#232323] rounded-xl flex items-center justify-center">
											<Icon className="text-gray-200" size={80} />
										</div>
									</motion.div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* Premium Materials */}
			<section className="py-20 bg-[#181818]">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<motion.h2
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						className="text-4xl font-bold text-white mb-12"
					>
						Premium Materials
					</motion.h2>

					<div className="grid md:grid-cols-3 gap-8 mb-8">
						{materials.map((material, index) => (
							<motion.div
								key={index}
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className="bg-[#232323] rounded-2xl overflow-hidden shadow-lg border border-gray-700"
							>
								<div
									className="h-48 bg-cover bg-center"
									style={{
										backgroundImage: `url(${material.image})`,
									}}
								></div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">
										{material.name}
									</h3>
									<p className="text-gray-300">
										{material.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-sm text-gray-400 italic max-w-xl mx-auto"
					>
						Note: These are only a selection of our most popular materials. More
						options are available during your consultation.
					</motion.p>
				</div>
			</section>

			{/* Finishes Section */}
			<section className="py-20 bg-[#141414]">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<motion.h2
						initial={{ y: 30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						className="text-4xl font-bold text-white mb-12"
					>
						Finishes
					</motion.h2>

					<div className="grid md:grid-cols-3 gap-8 mb-8">
						{finishes.map((finish, index) => (
							<motion.div
								key={index}
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -5 }}
								className="bg-[#232323] rounded-2xl overflow-hidden shadow-lg border border-gray-700"
							>
								<div
									className="h-48 bg-cover bg-center"
									style={{
										backgroundImage: `url(${finish.image})`,
									}}
								></div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">
										{finish.name}
									</h3>
									<p className="text-gray-300">
										{finish.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-sm text-gray-400 italic max-w-xl mx-auto"
					>
						Note: These are only a selection of our most popular finishes. More
						options are available during your consultation.
					</motion.p>
				</div>
			</section>
		</motion.div>
	);
};

export default Craftsmanship;
