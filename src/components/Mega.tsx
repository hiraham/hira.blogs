import React from 'react';
import BlogCard from '../components/Blogcard'; 

export default function Mega() {
  const posts = [
    {
      id: '1',
      title: 'Artificial Intelligence',
      description: 'Artificial Intelligence Surpasses Human Understanding ...',
      date: '2024-12-27',
      image: '/Images/artifical.jpeg', 
    },
    {
      id: '2',
      title: 'Development',
      description: 'Development is the cornerstone of progress',
      date: '2024-11-21',
      image: '/Images/development.jpeg', 
    },
    {
        id: '3',
        title: 'Technology ',
        description: 'Technology has revolutionized the way we live',
        date: '2024-10-10',
        image: '/Images/technology.webp', 
      },
      {
        id: '4',
        title: 'HTML Design',
        description: 'HTML (HyperText Markup Language)...',
        date: '2024-09-01',
        image: '/Images/R.png', 
      },
      {
        id: '5',
        title: 'Virtual media ',
        description: 'Virtual media refers to digital platforms ',
        date: '2024-08-08',
        image: '/Images/vertual.jpg', 
      },
      {
          id: '6',
          title: 'Next.js  ',
          description: 'Next.js is a popular React framework.....',
          date: '2024-06-01',
          image: '/Images/next.jpeg', 
        },
        {
            id: '7',
            title: 'Web Development  ',
            description: 'Web development is the process of building .....',
            date: '2024-05-05',
            image: '/Images/web.jpg', 
          },
          {
            id: '8',
            title: 'Personal Growth ',
            description: 'Personal growth is the ongoing process of improving oneself  .....',
            date: '2024-04-25',
            image: '/Images/per.jpeg', 
          },
          {
            id: '9',
            title: 'Creative ideas ',
            description: 'Creative ideas are the foundation of innovation  .....',
            date: '2022-03-21',
            image: '/Images/cre.jpeg', 
          },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-500 animate-colors-change">
        Explore Our Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in-up" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
