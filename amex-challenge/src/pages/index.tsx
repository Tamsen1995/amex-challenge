import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Welcome
      <div>
        <Link href="/peoplesDirectory">
          <button>Go to peoples Directory</button>
        </Link>
      </div>
    </div>
  );
}
