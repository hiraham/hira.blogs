import React from 'react';

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-red-400 text-black">
          Welcome to Hira's Blog !<br/> Explore insights, ideas, and inspiration for growth and creativity!
        </h2>
        <p className="text-center mt-10 mx-4 text-sm text-gray-600 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up">
          Discover a world of creativity, knowledge, and inspiration at Hira's Blog. Here, we dive into a variety of topics ranging from technology trends and web development tips to personal growth and creative ideas. Whether you're a curious reader, a passionate learner, or a fellow developer, you'll find something to ignite your interest. Join the conversation, explore fresh perspectives, and let’s grow together!
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-black hover:text-red-600 animate-color-change">
            Explore Your Interests
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "Technology",
              "Development",
              "Artificial Intelligence",
              "HTML",
              "Virtual Media",
              "Next.js",
              "Web Development",
              "Personal Growth",
              "Creative Ideas",
              "Career Advice",
              "Web Design",
              "User Experience",
            ].map((category, index) => (
              <div
                key={index}
                className="p-4 text-center text-lg text-gray-600 bg-white rounded-md shadow-md hover:bg-gray-200"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
