import Link from "next/link";

export default function Navbar() {
    return (
        <div className="text-justify text-2xl font-serif border-l-4 text-green-500">
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/about-us">About us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contact-us">Contact us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>
        </div>
       
    );
}



