//.src/components/Navbar.js

import Link from "next/link";

const Navbar = () =>{
    return(
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;