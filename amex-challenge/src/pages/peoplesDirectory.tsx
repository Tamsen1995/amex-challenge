import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("https://randomuser.me/api/?results=10");

  const users = res.data.results;
  return { props: { users } };
}

export default function Home({ users }: { users: any[] }) {
  return (
    <div className="flex flex-wrap">
      {users.map((user, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          <div className="flex flex-col items-center text-center bg-gray-200 p-4 rounded-lg">
            <h2 className="mb-2">{user.email}</h2>
            <p>
              {user.name.title} {user.name.last}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
