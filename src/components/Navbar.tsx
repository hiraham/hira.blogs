"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurrentDateTime(
        now.toLocaleString("en-US", options) +
          "" +
          "-" +
          now.toLocaleString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-yellow-100 body-font bg-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Home{""}
          </Link>
          
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Contact{""}
          </Link>

          <Link
            href={"http://localhost:3000/about"}
            className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            About{""}
          </Link>

          <Link
            href={"#"}
            className="mr-5 hover:text-red-600 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Blogs{""}
          </Link>

          


        </nav>
      </div>
    </header>
  );
}
