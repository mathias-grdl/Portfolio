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
		category: "react js",
		name: "O'bandito",
		description:
			"Projet O'clock de 3 personnes, utilisation de reactJs/redux, graphql",
		link: "https://main--obandito.netlify.app/",
		github: "/",
		id: 1,
	},
	{
		image: "/assets/work/maison-thishan.png",
		category: "wordpress",
		name: "Maison Thishan",
		description:
			"Création d'un site ecommerce pour un parfumeur indépendant",
		link: "https://www.maisonthishan.com/",
		github: "/",
		id: 2,
	},
	{
		image: "/assets/work/tp66.png",
		category: "wordpress",
		name: "TP66",
		description:
			"Refonte du site de la plus grosse entreprise de BTP des Pyrénées orientales",
		link: "https://www.travaux-publics-66.fr/",
		github: "",
		id: 3,
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
