import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login" passHref>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </Link>
      <Link href="/dashboard" passHref>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Dashboard</button>
      </Link>
    </div>
  );
}
