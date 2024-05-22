import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "../ui/badge";

export default function ProjetCard({ project }) {
	return (
		<Card className="group overflow-hidden relative cursor-pointer">
			<CardHeader className="p-0">
				<div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark  xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
					<Image
						className="absolute bottom-0 shadow-2xl w-[247px] h-[250px]"
						src={project.image}
						width="0"
						height="0"
						alt="project"
						priority
						sizes="247px 250px"
					/>
					<div className="flex gap-x-4">
						{project.link === "" ? (
							""
						) : (
							<Link
								href={project.link}
								target="_blank"
								className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 dark:bg-secondary"
							>
								<Link2Icon className="text-white" />
							</Link>
						)}

						{project.github === "" ? (
							""
						) : (
							<Link
								href={project.github}
								target="_blank"
								className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 dark:bg-secondary"
							>
								<Github className="text-white" />
							</Link>
						)}
					</div>
				</div>
			</CardHeader>
			<div className="h-full px-8 py-6">
				<Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
					{project.category}
				</Badge>
				<h4 className="h4 mb-1">{project.name}</h4>
				<p className="text-muted-foreground text-lg line-clamp-2">
					{project.description}
				</p>
			</div>
		</Card>
	);
}
