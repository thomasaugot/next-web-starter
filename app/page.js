// here is all the code found on the homepage

import Image from "next/image";
import yourImg from "../assets/img/placeholder-img.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex items-center justify-around bg-slate-600 h-[30vh] mt-[20vh]">
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
        <span>Add your content here</span>
      </section>
      <section className="flex items-center justify-around bg-gray-300 h-[30vh]">
        <span>Add your content here</span>
        <Image src={yourImg} width={"auto"} height={"auto"} alt="yourImg" className="w-24" />
      </section>
    </main>
  );
}
