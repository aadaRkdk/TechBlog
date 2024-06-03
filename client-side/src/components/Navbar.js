import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 py-3 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center pt-0">
        <div className="text-white font-bold text-2xl">
          <Link href="/">TechBlog</Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
