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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src={picture}
                alt="user"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <p className="text-sm text-gray-500">ID: {id}</p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Name: {name}
                  </p>
                  <p className="text-sm text-gray-500">Age: {age}</p>
                  <p className="text-sm text-gray-500">Address: {address}</p>
                  <p className="text-sm text-gray-500">Email: {email}</p>
                  <p className="text-sm text-gray-500">Date of Birth: {dob}</p>
                  <p className="text-sm text-gray-500">Phone: {phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
