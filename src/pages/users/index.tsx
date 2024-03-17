import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import UserCard from "@/components/UserCard";

export async function getServerSideProps() {
  const res = await axios.get("https://randomuser.me/api/?results=100");

  const users = res.data.results;
  return { props: { users } };
}

export default function UserDirectoryPage({ users }: { users: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Calculate the users to display for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {currentUsers.map((user, index) => (
          <UserCard key={index} user={user} index={index} />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <div
          onClick={handlePreviousPage}
          className={`cursor-pointer px-4 py-2 border border-gray-500 rounded ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </div>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <div
          onClick={handleNextPage}
          className={`cursor-pointer px-4 py-2 border border-gray-500 rounded ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </div>
      </div>
    </div>
  );
}
