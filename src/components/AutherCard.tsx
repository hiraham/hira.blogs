import React from "react";
import Image from "next/image";

export default function AutherCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <div className="flex items-center justify-center mb-4">
        <Image
          src="/Images/hira.png"
          alt="auther"
          width="300"
          height="200"
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-black"
        />
        <div className="text-black">
          <h4 className="text-xl font-bold">HIRA NAZ</h4>
          <p className="text-black">Web Developer</p>
        </div>
      </div>

      <p className="mt-4 text-black text-center leading-relaxed">
        My name is Hira I am a front-end web developer
      </p>

      <div className="mt-4 flex space-x-3 justify-center">
        <a
          href="https://www.linkedin.com/in/hira-hammad-6847592b5/"
          className="px-4 py-2 text-white bg-green-800 rounded-md hover:bg-green-500 transition duration-300"
        >
          Linkedin
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-green-800 rounded-md hover:bg-green-500 transition duration-300"
        >
          Github
        </a>

        <a
          href="#"
          className="px-4 py-2 text-white bg-green-800 rounded-md hover:bg-green-500 transition duration-300"
        >
          Vercel
        </a>
      </div>
    </div>
  );
}
