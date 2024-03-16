import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("https://randomuser.me/api/?results=10");

  const users = res.data.results;
  return { props: { users } };
}

export default function Home({ users }: { users: any[] }) {
  console.log("user - > ", users[0]); // TESTING
  return (
    <div className="flex flex-wrap">
      {users.map((user, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          <div className="flex flex-col items-center text-center bg-gray-200 p-4 rounded-lg">
            <Image
              src={user.picture.large}
              alt="user"
              width={100}
              height={100}
              className="rounded-full"
            />
            Name:{" "}
            <p>
              {user.name.title} {user.name.last}
            </p>
            <span>Age: {user.dob.age}</span>
            <span>City: {user.location.city}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
