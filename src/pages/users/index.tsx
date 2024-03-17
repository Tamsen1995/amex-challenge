import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import UserCard from "@/components/UserCard";

export async function getServerSideProps() {
  const res = await axios.get("https://randomuser.me/api/?results=10");

  const users = res.data.results;
  return { props: { users } };
}

export default function UserDirectoryPage({ users }: { users: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user, index) => (
        <UserCard key={index} user={user} index={index} />
      ))}
    </div>
  );
}
