import OrbitingCircles from "../ui/orbiting-circles";
import { Icons } from "../../data/icons";

export default function OrbitingCirclesComponent() {
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
			<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
				Skills
			</span>

			{/* Inner Circles */}
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={30}
				delay={8}
				radius={80}
			>
				<Icons.wordpress />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={14}
				delay={10}
				radius={80}
			>
				<Icons.scss />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[30px] border-none bg-transparent"
				duration={15}
				delay={12}
				radius={80}
			>
				<Icons.figma />
			</OrbitingCircles>

			{/* Outer Circles (reverse) */}
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={12}
				delay={12}
				reverse
			>
				<Icons.reactjs />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={16}
				delay={12}
				reverse
			>
				<Icons.github />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={18}
				delay={16}
				reverse
			>
				<Icons.typescript />
			</OrbitingCircles>
			<OrbitingCircles
				className="size-[50px] border-none bg-transparent"
				radius={190}
				duration={25}
				delay={12}
				reverse
			>
				<Icons.tailwind />
			</OrbitingCircles>
		</div>
	);
}
