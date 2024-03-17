import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <Link href="/" className="text-white">
        Home
      </Link>
      <Link href="/users" className="ml-4 text-white">
        Users
      </Link>
    </nav>
  );
};

export default NavBar;
