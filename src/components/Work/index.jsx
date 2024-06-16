"use client";
import Link from "next/link";
import { Button } from "../ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "../ProjectCard";

const projectData = [
	{
		image: "/assets/work/obandito-home.png",
		category: "ReactJS",
		name: "O'bandito",
		description:
			"Project O'clock with 3 people, using React.js/Redux, GraphQL",
		link: "https://main--obandito.netlify.app/",
		github: "https://github.com/O-clock-Kimchi/O-Bandito-front",
		id: 1,
	},
	{
		image: "/assets/work/maison-thishan.png",
		category: "Wordpress",
		name: "Maison Thishan",
		description:
			"Creating an e-commerce website for an independent perfumer",
		link: "https://www.maisonthishan.com/",
		github: "",
		id: 2,
	},
	{
		image: "/assets/work/tp66.png",
		category: "Wordpress",
		name: "TP66",
		description:
			"Redesign of the website for the largest construction company in the Eastern Pyrenees",
		link: "https://www.travaux-publics-66.fr/",
		github: "",
		id: 3,
	},
	{
		image: "/assets/work/kasa.png",
		category: "ReactJS",
		name: "Kasa",
		description:
			"Kasa is my first ReactJS project aimed at showcasing different apartments",
		link: "https://p7-kasa-openclassrooms.netlify.app/",
		github: "https://github.com/mathias-grdl/P7-Kasa-Openclassrooms",
		id: 4,
	},
];

export default function Work() {
	return (
		<section className="relative mb-12 xl:mb-48">
			<div className="container mx-auto">
				{/* text */}
				<div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
					<h2 className="section-title mb-4">Latest Projects</h2>
					<p className="subtitle mb-8">
						Find more projects in the My Projects tab.
					</p>
					<Link href="/projects">
						<Button>All projects</Button>
					</Link>
				</div>
				{/* slider */}
				<div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
					<Swiper
						className="h-[480px]"
						slidesPerView={1}
						loop={true}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
						}}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{ clickable: "true" }}
					>
						{projectData.slice(0, 4).map((project) => {
							return (
								<SwiperSlide key={project.id}>
									<ProjectCard project={project} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
