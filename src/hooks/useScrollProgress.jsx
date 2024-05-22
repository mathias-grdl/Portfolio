import { useEffect, useState } from "react";

export default function useScrollProgress() {
	const [completion, setCompletion] = useState(0);

	useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress = window.scrollY;
			const scrollHeight =
				document.body.scrollHeight - window.innerHeight;

			if (scrollHeight) {
				const progressPercentage =
					(currentProgress / scrollHeight) * 100;
				setCompletion(progressPercentage.toFixed(2));
			}
		};

		updateScrollCompletion();

		window.addEventListener("scroll", updateScrollCompletion);

		return () => {
			window.removeEventListener("scroll", updateScrollCompletion);
		};
	}, []);

	return completion;
}
