"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { reviewsData } from "../../data/reviews";

export default function Reviews() {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container mx-auto">
				<h2 className="section-title mb-12 text-center mx-auto">
					Reviews
				</h2>
				<Swiper
					slidesPerView={1}
					loop={true}
					breakpoints={{
						640: { slidesPerView: 2 },
						1400: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className="h-[350px]"
				>
					{reviewsData.map((person) => {
						return (
							<SwiperSlide key={person.id}>
								<Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] cursor-pointer">
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
												<CardTitle className="mb-1">
													{person.name}
												</CardTitle>
												<div className="flex gap-x-2 flex items-center">
													<img
														src={person.flag}
														alt="flag"
														className="size-[15px] rounded-full"
													/>
													<p>{person.country}</p>
												</div>
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
