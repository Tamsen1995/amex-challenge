import { GetServerSideProps } from "next";
import Image from "next/image";

interface UserPageProps {
  id: string;
  name: string;
  age: string;
  address: string;
  email: string;
  dob: string;
  phone: string;
  picture: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, name, age, address, email, dob, phone, picture } = context.query;

  return {
    props: { id, name, age, address, email, dob, phone, picture }, // will be passed to the page component as props
  };
};

export default function UserPage({
  id,
  name,
  age,
  address,
  email,
  dob,
  phone,
  picture,
}: UserPageProps) {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <Image
        src={picture}
        alt="user"
        width={100}
        height={100}
        className="rounded-full"
      />
      <p>
        <span className="font-bold">ID:</span> {id}
      </p>
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Age:</span> {age}
      </p>
      <p>
        <span className="font-bold">Address:</span> {address}
      </p>
      <p>
        <span className="font-bold">Email:</span> {email}
      </p>
      <p>
        <span className="font-bold">Date of Birth:</span> {dob}
      </p>
      <p>
        <span className="font-bold">Phone:</span> {phone}
      </p>
    </div>
  );
}
