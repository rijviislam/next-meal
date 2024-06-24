"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const handlerFun = () => {
    router.push("/contact");
  };
  if (pathname.includes("dashboard"))
    return <div className="bg-green-400">DashBoard Layout</div>;
  return (
    <div>
      <nav className="bg-red-500 p-6 flex justify-between items-center">
        <h6>NextHero</h6>
        <ul className="flex items-center justify-between gap-6">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/meals">Meals</a>
          </li>
          <li>
            <a href="/post">Post</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
        <button
          onClick={handlerFun}
          className="bg-teal-500 rounded-lg p-2 text-red-700"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
