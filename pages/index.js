import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to NeoPay</h1>
      <Link href="/register">
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
          Register Now
        </button>
      </Link>
    </div>
  );
}
