import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="p-6 max-w-sm w-full bg-white rounded-xl shadow-md flex items-center space-x-4">
        {/* <div className="flex-shrink-0">
          <Image
            width={48}
            height={48}
            src="/images/icon.png"
            alt="ChitChat Logo"
          />
        </div> */}
        <div>
          <div className="text-xl font-medium text-black">Welcome</div>

          <div className="mt-4">
            <Link
              href="/users"
              className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to People's Directory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
