"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "djamelfilm",
		country: "France",
		review: "Excellent prestataire, service rapide et résultat au delà des mes espérances. Je recommande !",
		id: 1,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "djamelfilm",
		country: "France",
		review: "2eme fois que je fais appel à lui, et honnêtement tout est parfait.",
		id: 2,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "letendre9",
		country: "Canada",
		review: "Incredible work, great communication and fixed my problem very quickly. Highly recommend!",
		id: 3,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "souly_sam",
		country: "Ivory Coast",
		review: "Very good work, I recommend.",
		id: 4,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "alexisalexis442",
		country: "France",
		review: "Mathias a vraiment assuré sur la résolution des erreurs 503 de mon site ! Il a corrigé les problèmes de manière rapide et efficace, assurant le bon fonctionnement du site sans aucun bug. La communication proactive de Mathias a été un atout majeur. Il a pris le temps d'expliquer chaque étape du processus et a fourni une documentation claire, facilitant la gestion future du site. Respectant les délais impartis, Mathias s'est montré courtois et a même dépassé les exigences en fournissant des conseils supplémentaires pour optimiser le site. Je recommande vivement Mathias pour son professionnalisme et son expertise dans le domaine.",
		id: 5,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "mtlp_frag",
		country: "France",
		review: "Un grand merci à Mathias pour sa disponibilité et sa réactivité! Professionnel et compétent, il a très rapidement et efficacement cerné l'origine du problème et a proposé des solutions. Un problème majeur résolu ! Je reviendrai travailler avec lui sur d'autres sujets de maintenance site ecom.",
		id: 6,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "mtlp_frag",
		country: "France",
		review: "Super ! J'ai fait appel de nouveau aux compétences de Mathias. Sérieux, communicant et proactif, très agréable de travailler avec Mathias. Merci beaucoup !",
		id: 7,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "alexisalexis442",
		country: "France",
		review: "Deuxième commande que je passe chez Mathias, et ça se déroule toujours extrêmement bien, très bonne communication, rapidité et efficacité au rendez-vous, et un résultat supérieur à mes attentes. Je vous recommande Mathias, vous ne serez pas déçu du résultat !",
		id: 8,
	},
	{
		avatar: "/assets/reviews/avatar-fiverr.png",
		name: "inos_architects",
		country: "Switzerland",
		review: "Good work! Mathias migrated our website to the new host very quickly. Fully recommend.",
		id: 9,
	},
];

export default function Reviews() {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container mx-auto">
				<h2 className="section-title mb-12 text-center mx-auto">
					Reviews
				</h2>
				<Swiper
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1400: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					modules={{ Pagination }}
					pagination={{ clickable: true }}
					className="h-[350px]"
				>
					{reviewsData.map((person) => {
						return (
							<SwiperSlide key={person.id}>
								<Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
									<CardHeader className="p-0 mb-10">
										<div className="flex items-center gap-x-4">
											<Image
												src={person.avatar}
												width={70}
												height={70}
												alt=""
												priority
											/>
											<div className="flex flex-col">
												<CardTitle>
													{person.name}
												</CardTitle>
												<p>{person.country}</p>
											</div>
										</div>
									</CardHeader>
									<CardDescription className="text-lg text-muted-foreground overflow-hidden line-clamp-4">
										{person.review}
									</CardDescription>
								</Card>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
