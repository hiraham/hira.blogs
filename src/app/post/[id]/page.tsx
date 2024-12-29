"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AutherCard from "@/components/AutherCard";
import Footer from "@/components/Footer"
import { CardDescription } from "@/components/ui/card";

const posts = [
  {
    id: "1",
    title: "Artificial Intelligence",
    description: "Artificial Intelligence (AI) is transforming the world by surpassing human understanding in key areas such as healthcare, science, and climate research. It detects diseases like cancer with unprecedented accuracy, accelerates groundbreaking discoveries, and analyzes complex data to address global challenges. However, this rapid advancement raises ethical concerns about transparency, control, and human dependency. As we embrace the opportunities AI presents, it’s crucial to strike a balance between innovation and responsibility to ensure that its power is used for the greater good of humanity.",
    date: "2022-01-01",
    image: "/Images/artifical.jpeg", 
  },
  {
    id: "2",
    title: "Development",
    description: "Development is the cornerstone of progress, driving innovation and shaping the future of technology, infrastructure, and society. It encompasses the continuous evolution of ideas, tools, and systems to meet the growing demands of modern life. From software development that powers digital transformation to sustainable urban planning addressing environmental concerns, development is a catalyst for positive change. It fosters creativity, bridges gaps, and empowers individuals and communities to thrive in an ever-changing world. By embracing development, we unlock new opportunities and build a foundation for a brighter and more connected future.",
    date: "2022-02-01",
    image: "/Images/development.jpeg", 
  },
  {
    id: '3',
    title: 'Technology ',
    description: 'Technology has revolutionized the way we live, work, and connect with the world around us. From the advent of the internet to advancements in artificial intelligence, technology has reshaped industries, improved efficiencies, and transformed everyday experiences. It has opened up endless possibilities, enabling us to solve complex problems, communicate globally in real-time, and automate tasks that once seemed impossible. As we continue to innovate, technology remains a powerful force that drives progress, enhances our lives, and shapes the future in ways we are just beginning to understand. Its impact is profound, offering both challenges and opportunities for a better tomorrow.',
    date: '2024-10-10',
    image: '/Images/technology.webp', 
  },
  {
    id: '4',
    title: 'HTML Design',
    description: 'HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It forms the backbone of any website, allowing developers to organize text, images, links, and multimedia elements into a structured format that browsers can render. HTML uses a system of tags and attributes to define the content and layout of a webpage, making it possible to present information in an organized and accessible way. As the foundation of web development, HTML is essential for creating user-friendly and visually appealing websites that can be viewed across various devices and platforms.',
    date: '2024-09-01',
    image: '/Images/R.png', 
  },
  {
    id: '5',
    title: 'Virtual media ',
    description:'Virtual media refers to digital platforms and technologies that enable the creation, distribution, and consumption of content in virtual environments. This can include virtual reality (VR), augmented reality (AR), video streaming, digital simulations, and interactive media experiences. Virtual media has revolutionized how we engage with information, entertainment, and communication by allowing users to experience immersive environments or access content from anywhere in the world. From online gaming and virtual meetings to educational simulations and social media, virtual media is reshaping the way we interact with technology, offering new possibilities for creativity, collaboration, and learning.',
    date: '2024-08-08',
    image: '/Images/vertual.jpg', 
  },
  {
      id: '6',
      title: 'Next.js  ',
      description: 'Next.js is a popular React framework that enables developers to build fast, scalable, and SEO-friendly web applications. It provides a range of features out of the box, such as server-side rendering (SSR), static site generation (SSG), and API routes, making it a versatile choice for both static and dynamic websites. With Next.js, developers can focus on building high-quality user interfaces while the framework handles performance optimization, routing, and code splitting. Its seamless integration with React and ease of use for deploying applications to platforms like Vercel make it a top choice for modern web development.',
      date: '2024-06-01',
      image: '/Images/next.jpeg', 
    },
    {
        id: '7',
        title: 'Web Development  ',
        description: 'Web development is the process of building and maintaining websites and web applications. It encompasses various aspects, including web design, frontend development, backend development, and database management. Frontend development focuses on creating the visual elements of a website that users interact with, typically using technologies like HTML, CSS, and JavaScript. Backend development involves working on the server side, handling databases, user authentication, and server configuration, often using languages like Python, Node.js, or PHP. Web development also includes ensuring the website is responsive, user-friendly, and optimized for performance. With the rise of technologies like React, Vue, and Next.js, modern web development emphasizes creating fast, dynamic, and engaging web experiences.',
        date: '2024-05-05',
        image: '/Images/web.jpg', 
      },
      {
        id: '8',
        title: 'Personal Growth ',
        description: 'Personal growth is the ongoing process of improving oneself in various aspects of life, such as emotional, mental, physical, and spiritual well-being. It involves developing a deeper understanding of ones strengths, weaknesses, values, and goals.Personal growth encourages individuals to step out of their comfort zones, embrace new challenges, and pursue lifelong learning. Whether its through self-reflection, acquiring new skills, or practicing mindfulness, personal growth fosters a mindset of continuous improvement. It empowers individuals to become more resilient, confident, and fulfilled, ultimately leading to a more balanced and purposeful life.',
        date: '2024-04-25',
        image: '/Images/per.jpeg', 
      },
      {
        id: '9',
        title: ' ',
        description: 'Creative ideas are the foundation of innovation and problem-solving. They are born from curiosity, imagination, and the ability to see things from different perspectives. Whether in art, technology, or everyday life, creative ideas challenge the status quo and open doors to new possibilities. They encourage individuals to think beyond conventional boundaries and explore unique solutions. Nurturing creativity involves embracing risks, making mistakes, and constantly seeking inspiration. By fostering a creative mindset, we can drive change, improve processes, and contribute to the world in exciting and meaningful ways.',
        date: '2022-03-21',
        image: '/Images/cre.jpeg', 
      },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <h1 className="text-2xl mt-10 text-center font-bold">Post not found</h1>
    );
  }

  // Function to render paragraphs from the description
  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="text-justify mt-4">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-500 text-center">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AutherCard />
      <Footer/>
    </div>
  );
}
