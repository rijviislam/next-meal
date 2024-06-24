import { Headland_One } from "next/font/google";

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "About",
  description: "Super Powerful Next Website",
  keywords: ["about", "about page"],
};

const getTime = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/time`, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

const page = async () => {
  const currentTime = await getTime();
  return (
    <div className={`${headland.className} min-h-screen px-12 py-24`}>
      <h2 className="text-3xl">About Page</h2>
      <h2 className="text-3xl text-red-500">Time: {currentTime}</h2>
    </div>
  );
};

export default page;
