"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
	{
		avatar: "/assets/reviews/avatar-1.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 1,
	},
	{
		avatar: "/assets/reviews/avatar-2.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 2,
	},
	{
		avatar: "/assets/reviews/avatar-3.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 3,
	},
	{
		avatar: "/assets/reviews/avatar-4.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 4,
	},
	{
		avatar: "/assets/reviews/avatar-5.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 5,
	},
	{
		avatar: "/assets/reviews/avatar-6.png",
		name: "Richard Thompson",
		job: "Chef",
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum obcaecati saepe unde autem.",
		id: 6,
	},
];

// /assets/hero/developer-mathias.png

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
												<p>{person.job}</p>
											</div>
										</div>
									</CardHeader>
									<CardDescription className="text-lg text-muted-foreground">
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
