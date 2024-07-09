import DevImg from "../Devlmg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from "lucide-react";

const infoData = [
	{
		icon: <User2 size={20} />,
		text: "Mathias Grondziel",
		id: 1,
	},
	{
		icon: <PhoneCall size={20} />,
		text: "+33 7 66 15 67 05 ",
		id: 2,
	},
	{
		icon: <MailIcon size={20} />,
		text: "mathias.grondziel@gmail.com",
		id: 3,
	},
	{
		icon: <Calendar size={20} />,
		text: "August 8, 2000",
		id: 4,
	},
	{
		icon: <HomeIcon size={20} />,
		text: "Perpignan, France",
		id: 5,
	},
];

const qualificationData = [
	{
		title: "education",
		data: [
			{
				university: "Openclassrooms",
				qualification: "Level 5 diploma recognized by the French State",
				years: "2023 - 2023",
				id: 1,
			},
			{
				university: "O'clock",
				qualification: "Level 5 diploma recognized by the French State",
				years: "2024 - 2024",
				id: 2,
			},
		],
	},
	{
		title: "experience",
		data: [
			{
				company: "Kori",
				role: "WordPress web developer - custom site creation without using pre-made themes",
				years: "2022 - 2023",
				id: 1,
			},
			{
				company: "Freelance",
				role: "WordPress & Front-end (React.js) web developer",
				years: "2023 - 2024",
				id: 2,
			},
		],
	},
];

const skillData = [
	{
		title: "skills",
		data: [
			{
				name: "HTML, CSS, SASS",
				id: 1,
			},
			{
				name: "Front-end Development",
				id: 2,
			},
			{
				name: "Javascript, ReactJs",
				id: 3,
			},
		],
	},
	// {
	// 	title: "tools",
	// 	data: [
	// 		{
	// 			imgPath: "/assets/about/vscode.svg",
	// 		},
	// 		{
	// 			imgPath: "/assets/about/figma.svg",
	// 		},
	// 		{
	// 			imgPath: "/assets/about/notion.svg",
	// 		},
	// 		{
	// 			imgPath: "/assets/about/wordpress.svg",
	// 		},
	// 	],
	// },
];

export default function About() {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};

	return (
		<section className="xl:h-[860px] pb-12 xl:py-24">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
					About me
				</h2>
				<div className="flex flex-col xl:flex-row">
					<div className="hidden xl:flex flex-1 relative">
						<DevImg
							containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative "
							imgSrc="/assets/about/avatar-dev.png"
						/>
					</div>
					<div className="flex-1">
						<Tabs defaultValue="personal">
							<TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="personal"
								>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="qualifications"
								>
									Qualifications
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] xl:w-auto"
									value="skills"
								>
									Skills
								</TabsTrigger>
							</TabsList>
							<div className="text-lg mt-12 xl:mt-8 ">
								<TabsContent value="personal">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-4">
											I have been a web developer since
											September 2022.
										</h3>
										<p className="subtitle max-w-xl mx-auto xl:mx-0">
											I initially started with an
											apprenticeship in custom WordPress
											site creation, then I transitioned
											into ReactJS.
										</p>
										<div className="grid xl:grid-cols-2 gap-4 mb-12">
											{infoData.map((item) => {
												return (
													<div
														key={item.id}
														className="flex items-center gap-x-4 mx-auto xl:mx-0"
													>
														<div className="text-primary">
															{item.icon}
														</div>
														<div>{item.text}</div>
													</div>
												);
											})}
										</div>

										<div className="flex flex-col gap-y-2">
											<div className="text-primary">
												Language Skill
											</div>
											<div className="border-b border-border"></div>
											<div>French, English</div>
										</div>
									</div>
								</TabsContent>

								<TabsContent value="qualifications">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-8 text-center xl:text-left">
											My career path
										</h3>
										{/* wrapper */}
										<div className="grid md:grid-cols-2 gap-y-8">
											{/* experience */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<Briefcase />
													<h4 className="capitalize font-medium">
														{
															getData(
																qualificationData,
																"experience"
															).title
														}
													</h4>
												</div>

												<div className="flex flex-col gap-y-8">
													{getData(
														qualificationData,
														"experience"
													).data.map((item) => {
														const {
															company,
															role,
															years,
															id,
														} = item;
														return (
															<div
																className="flex gap-x-8 group"
																key={id}
															>
																<div className="h-[84px] w-[1px] bg-border relative ml-2">
																	<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																</div>
																<div>
																	<div className="font-semibold text-xl leading-none mb-2">
																		{
																			company
																		}
																	</div>
																	<div className="text-lg leading-none mb-2">
																		{role}
																	</div>
																	<div className="text-base font-medium">
																		{years}
																	</div>
																</div>
															</div>
														);
													})}
												</div>
												{/* /experience */}
											</div>
											{/* /experience */}
											{/* education */}
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<GraduationCap size={28} />
													<h4 className="capitalize font-medium">
														{
															getData(
																qualificationData,
																"education"
															).title
														}
													</h4>
												</div>

												<div className="flex flex-col gap-y-8">
													{getData(
														qualificationData,
														"education"
													).data.map((item) => {
														const {
															university,
															qualification,
															years,
															id,
														} = item;
														return (
															<div
																className="flex gap-x-8 group"
																key={id}
															>
																<div className="h-[84px] w-[1px] bg-border relative ml-2">
																	<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																</div>
																<div>
																	<div className="font-semibold text-xl leading-none mb-2">
																		{
																			university
																		}
																	</div>
																	<div className="text-lg leading-none mb-2">
																		{
																			qualification
																		}
																	</div>
																	<div className="text-base font-medium">
																		{years}
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
											{/* /education */}
										</div>
										{/* /wrapper */}
									</div>
								</TabsContent>

								<TabsContent value="skills">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-8">
											What I Use Everyday
										</h3>
										<div className="mb-16">
											<h4 className="text-xl font-semibold mb-2 border-b border-border xl:text-left">
												Skills
											</h4>
											<div className="mb-4">
												<div>
													{getData(
														skillData,
														"skills"
													).data.map((item) => {
														const { name, id } =
															item;
														return (
															<div
																className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
																key={id}
															>
																<div className="font-medium">
																	{name}
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</div>
										{/* Tools */}
										{/* <div>
											<h4 className="text-xl font-semibold mb-2 border-b border-border xl:text-left">
												Tools
											</h4>
											<div className="mb-4">
												<div className="flex gap-x-8 justify-content xl:justify-start">
													{getData(
														skillData,
														"tools"
													).data.map((item) => {
														const { imgPath, id } =
															item;
														return (
															<div key={id}>
																<Image
																	src={
																		imgPath
																	}
																	width={48}
																	height={48}
																	alt=""
																	priority
																/>
															</div>
														);
													})}
												</div>
											</div>
										</div> */}
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
}
