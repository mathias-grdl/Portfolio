import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet.jsx";
import { AlignJustify } from "lucide-react";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Socials from "../Socials";

export default function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col items-center gap-y-32">
						<Logo />
						<Navbar
							containerStyles="flex flex-col items-center gap-y-6"
							linkStyles="text-2xl"
							onLinkClick={closeMenu}
						/>
					</div>
					<Socials
						containerStyles="flex gap-x-4"
						iconsStyles="text-2xl"
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
}
