import Link from "next/link";

export default function Home() {
  return (<div className="flex space-x-4">
  <Link href="/register">
    <a className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
      Register
    </a>
  </Link>

  <Link href="/login">
    <a className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
      Login
    </a>
  </Link>
</div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to NeoPay</h1>
      <p className="mb-6">Pay instantly using UPI</p>

      <div className="flex space-x-4">
        {/* Register Button */}
        <Link href="/register">
          <a className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Register
          </a>
        </Link>

        {/* Login Button */}
        <Link href="/login">
          <a className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            Login
          </a>
        </Link>
      </div>
    </div>
  );
    }
