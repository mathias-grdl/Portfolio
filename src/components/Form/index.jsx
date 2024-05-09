"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

export default function Form() {
	const form = useRef();
	const [formErrors, setFormErrors] = useState({});
	const [showConfirmation, setShowConfirmation] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			await emailjs.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.PUBLIC_KEY,
				}
			);
			form.current.reset(); // Clear form fields after submission
			// Display confirmation message
			setShowConfirmation(true);
			// Hide confirmation message after 5 seconds
			setTimeout(() => {
				setShowConfirmation(false);
			}, 5000);
		} catch (error) {
			console.error("FAILED...", error);
		}
	};

	const validateName = (name) => {
		const nameRegex = /^[a-zA-Z\séèàâêîôûäëïöüç-]{3,}$/;
		if (!nameRegex.test(name)) {
			return "Name must be at least 3 characters long and only contain letters, spaces, or dashes, without numbers.";
		}
		return "";
	};

	const validateEmail = (email) => {
		const emailRegex =
			/^[^\s<>[\]{}()\\\/|éèàâêîôûäëïöüç]+@[^\s<>[\]{}()\\\/|éèàâêîôûäëïöüç]+\.[^\s<>[\]{}()\\\/|éèàâêîôûäëïöüç]{2,}$/;
		if (!emailRegex.test(email)) {
			return "Email is invalid.";
		}
		return "";
	};

	const validateMessage = (message) => {
		if (message.length < 10 || message.length > 800) {
			return "Message must be between 10 and 800 characters.";
		}
		return "";
	};

	const validateForm = () => {
		const name = form.current.elements.user_name.value;
		const email = form.current.elements.user_email.value;
		const message = form.current.elements.message.value;
		const errors = {};

		errors.name = validateName(name);
		errors.email = validateEmail(email);
		errors.message = validateMessage(message);

		setFormErrors(errors);

		return Object.keys(errors).every((key) => errors[key] === "");
	};

	return (
		<>
			{showConfirmation && (
				<span className="text-green-500 block text-center my-2">
					Form submitted successfully!
				</span>
			)}
			<form
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-col gap-y-4"
			>
				<div className="flex flex-col mb-4">
					<div className="relative">
						<Input
							type="name"
							id="name"
							placeholder="Name"
							name="user_name"
							autoComplete="name"
							required
						/>
						<User
							className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-transparent"
							size={20}
						/>
					</div>
					{formErrors.name && (
						<p className="text-red-500 text-sm mt-1">
							{formErrors.name}
						</p>
					)}
				</div>
				<div className="flex flex-col mb-4">
					<div className="relative">
						<Input
							type="email"
							id="email"
							placeholder="Email"
							name="user_email"
							autoComplete="email"
							required
						/>
						<MailIcon
							className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-transparent"
							size={20}
						/>
					</div>
					{formErrors.email && (
						<p className="text-red-500 text-sm mt-1">
							{formErrors.email}
						</p>
					)}
				</div>
				<div className="flex flex-col mb-4">
					<div className="relative">
						<Textarea
							name="message"
							type="text"
							id="message"
							placeholder="Type Your Message Here."
							autoComplete="off"
							required
							className="pt-[10px]"
						/>
						<MessageSquare
							className="absolute left-6 top-6 transform -translate-y-1/2 bg-white dark:bg-transparent"
							size={20}
						/>
					</div>
					{formErrors.message && (
						<p className="text-red-500 text-sm mt-1">
							{formErrors.message}
						</p>
					)}
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
		</>
	);
}
