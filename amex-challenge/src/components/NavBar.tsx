import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <Link href="/">AMEX</Link>
        </div>
        <div className="space-x-4">
          <Link
            className="text-white hover:text-gray-200 transition duration-200"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-200 transition duration-200"
            href="/users"
          >
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
