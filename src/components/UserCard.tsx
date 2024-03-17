import Link from "next/link";
import Image from "next/image";

interface User {
  login: { uuid: string };
  name: { title: string; first: string; last: string };
  dob: { age: number; date: string };
  location: {
    street: { number: string; name: string };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  phone: string;
  picture: { large: string };
}

interface UserCardProps {
  user: User;
  index: number;
}

const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  return (
    <Link
      key={index}
      href={`/users/${user.login.uuid}?name=${user.name.title} ${user.name.first} ${user.name.last}&age=${user.dob.age}&address=${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}&email=${user.email}&dob=${user.dob.date}&phone=${user.phone}&picture=${user.picture.large}`}
      className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <Image
        src={user.picture.large}
        alt="user"
        width={100}
        height={100}
        className="rounded-full mx-auto mt-4"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <div className="text-gray-700 mb-2">
          <span>Age: {user.dob.age}</span>
        </div>
        <div className="text-gray-700">
          <span>City: {user.location.city}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
