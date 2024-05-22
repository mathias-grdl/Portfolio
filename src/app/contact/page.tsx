import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";
import Form from "../../components/Form";

export default function Contact() {
	return (
		<section className="py-12 xl:py-24">
			<div className="container mx-auto">
				<div className="flex flex-col justify-center">
					<div className="flex items-center gap-x-4 text-primary text-lg mb-4">
						<span
							style={{ width: "30px" }}
							className="w-[30px] h-[2px] bg-primary"
						></span>
						<div>Say Hello</div>
					</div>
					<h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
					<p className="subtitle max-w-[400px]">
						After sending your message, you will receive a response
						by email within 24 hours.
					</p>
				</div>

				<div className="grid xl:grid-cols-1 xl:h-[480px] mb-6 xl:mb-24">
					<div className="flex flex-col text-base pb-12 justify-between md:flex-row xl:gap-y-14 xl:text-lg">
						<div className="flex items-center gap-x-4">
							<MailIcon size={18} className="text-primary" />
							<a href="mailto:mathias.grondziel@gmail.com">
								mathias.grondziel@gmail.com
							</a>
						</div>
						<div className="flex items-center gap-x-4">
							<HomeIcon size={18} className="text-primary" />
							<a
								href="https://maps.app.goo.gl/YL6uWc3D84GBAdBv8"
								target="_blank"
								rel="noopener noreferrer"
							>
								Perpignan, France
							</a>
						</div>
						<div className="flex items-center gap-x-4">
							<PhoneCall size={18} className="text-primary" />
							<a href="tel:+33766156705">+33 7 66 15 67 05</a>
						</div>
					</div>
					<Form />

					{/* <div style={{ paddingTop: "2rem" }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.50235100363!2d2.8633118901905528!3d42.699085597864446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1713776759855!5m2!1sfr!2sfr"
							width="100%"
							height="300px"
							loading="lazy"
						></iframe>
					</div> */}
				</div>
			</div>
		</section>
	);
}
