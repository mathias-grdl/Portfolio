"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.PUBLIC_KEY,
				}
			)

			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
			<div className="relative flex items-center">
				<Input
					type="name"
					id="name"
					placeholder="Name"
					name="user_name"
					autoComplete="name"
				/>
				<User
					className="absolute left-6 bg-white dark:bg-transparent"
					size={20}
				/>
			</div>
			<div className="relative flex items-center">
				<Input
					type="email"
					id="email"
					placeholder="Email"
					name="user_email"
					autoComplete="email"
				/>
				<MailIcon
					className="absolute left-6 bg-white dark:bg-transparent"
					size={20}
				/>
			</div>
			<div className="relative flex items-center">
				<Textarea
					name="message"
					type="text"
					id="message"
					placeholder="Type Your Message Here."
					autoComplete="off"
				/>
				<MessageSquare
					className="absolute top-3 left-6 bg-white dark:bg-transparent"
					size={20}
				/>
			</div>
			<Button
				className="flex items-center max-w-[166px]"
				value="Send"
				type="submit"
			>
				Let's Talk
				<ArrowRightIcon size={20} />
			</Button>
		</form>
	);
}
