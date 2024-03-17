import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

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
      <div className="max-w-2xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src={picture}
                alt="user"
                width={200}
                height={200}
                className="rounded-full"
              />
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="mt-2">
                  <p className="text-3xl text-gray-900">{name}</p>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                      <p className="text-xl text-gray-600 mb-2">
                        Age:{" "}
                        <span className="font-medium text-gray-900">{age}</span>
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Address:{" "}
                        <span className="font-medium text-gray-900">
                          {address}
                        </span>
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Email:{" "}
                        <span className="font-medium text-gray-900">
                          {email}
                        </span>
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Date of Birth:{" "}
                        <span className="font-medium text-gray-900">{dob}</span>
                      </p>
                      <p className="text-xl text-gray-600 mb-2">
                        Phone:{" "}
                        <span className="font-medium text-gray-900">
                          {phone}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
