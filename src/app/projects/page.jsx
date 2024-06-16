"use client";
import { useState } from "react";
import {
	Tabs,
	TabsList,
	TabsContent,
	TabsTrigger,
} from "../../components/ui/tabs";
import ProjectCard from "../../components/ProjectCard";

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

const uniqueCategories = [
	"all projects",
	...new Set(projectData.map((item) => item.category)),
];

export default function Projects() {
	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState("all projects");
	const filteredProjects = projectData.filter((project) => {
		return category === "all projects"
			? project
			: project.category === category;
	});

	return (
		<section className="min-h-screen pt-12">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					projects Page
				</h2>

				<Tabs defaultValue={category} className="mb-24 xl:mb-48">
					<TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
						{categories.map((category, i) => {
							return (
								<TabsTrigger
									onClick={() => setCategory(category)}
									value={category}
									key={i}
									className="capitalize w-[162px] md:w-auto"
								>
									{category}
								</TabsTrigger>
							);
						})}
					</TabsList>
					<div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
						{filteredProjects.map((project) => {
							return (
								<TabsContent value={category} key={project.id}>
									<ProjectCard project={project} />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
}
