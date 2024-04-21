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
		image: "/assets/work/obandito-home.svg",
		category: "react js",
		name: "O'bandito",
		description:
			"Projet O'clock de 3 personnes, utilisation de reactJs/redux, graphql",
		link: "https://main--obandito.netlify.app/",
		github: "/",
		id: 1,
	},
	{
		image: "/assets/work/2.png",
		category: "react js",
		name: "Nexa Website",
		description: "lorem",
		link: "/",
		github: "/",
		id: 2,
	},
	{
		image: "/assets/work/3.png",
		category: "next js",
		name: "Nexa Website",
		description: "lorem",
		link: "/",
		github: "/",
		id: 3,
	},
	{
		image: "/assets/work/4.png",
		category: "next js",
		name: "Nexa Website",
		description: "lorem",
		link: "/",
		github: "/",
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
					<p className="subtitle mb-8">Lorem, ipsun color sit amet</p>
					<Link href="/projects">
						<Button>All projects</Button>
					</Link>
				</div>
				{/* slider */}
				<div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
					<Swiper
						className="h-[480px]"
						slidesPerView={1}
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
