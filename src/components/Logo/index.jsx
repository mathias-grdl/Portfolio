import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" style={{ cursor: "pointer" }}>
			<span>Mathias Grondziel</span>
		</Link>
	);
}
