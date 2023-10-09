// Blog.js
import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'; // Import the styles
import AOS from 'aos';


AOS.init();

const blogPosts = [
    {
      id: 1,
      title: "Creating Magical Moments for Kids",
      author: "Magical Events",
      date: "October 1, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,kids",
      description: "Make your child's birthday unforgettable with our magical events. From enchanting decorations to exciting activities, we create an atmosphere filled with joy and wonder.",
      stars: 4.5,
    },
    {
      id: 2,
      title: "Teen Dreams Come True",
      author: "Teen Party Pros",
      date: "October 2, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,teens",
      description: "Celebrate your teen's special day with a party they'll remember forever. Trendy decor, cool entertainment, and a vibrant atmosphere make our teen events a big hit!",
      stars: 5,
    },
    {
      id: 3,
      title: "Milestone Moments",
      author: "Celebration Experts",
      date: "October 3, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,milestone",
      description: "Marking a milestone birthday? Let us turn your vision into reality. Elegant decor, thoughtful details, and professional service make your milestone celebration truly special.",
      stars: 4,
    },
    {
      id: 4,
      title: "Adults Only Extravaganza",
      author: "Party Perfection",
      date: "October 4, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,adults",
      description: "For adults who know how to party! Memorable adult birthday events with sophisticated decorations, top-notch entertainment, and attention to detail.",
      stars: 4.8,
    },
    {
      id: 5,
      title: "A Day of Joy for Everyone",
      author: "Event Bliss",
      date: "October 5, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,joy",
      description: "Experience joy and laughter with our inclusive birthday events. Creative decorations, engaging activities, and a welcoming atmosphere for everyone.",
      stars: 4.2,
    },
    {
      id: 6,
      title: "The Ultimate Birthday Bash",
      author: "Bash Masters",
      date: "October 6, 2023",
      image: "https://source.unsplash.com/600x400/?birthday,bash",
      description: "Your search for the ultimate birthday bash ends here! We bring excitement, fun, and a touch of magic to create an unforgettable celebration for you and your guests.",
      stars: 4.7,
    },
  ];
  

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up-left" className="py-5 mb-16">
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover object-center"
                src={post.image}
                alt={`Post ${post.id}`}
              />
              <div className="p-6">
                <h2 className="text-base font-medium text-gray-900 mb-3 font-young">
                  {post.title}
                </h2>
                <p className=" text-sm text-gray-500 mb-2 ">
                  {post.author} | {post.date}
                </p>
                <p className="leading-relaxed mb-3 font-young text-gray-500">{post.description}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-${i < post.stars ? "yellow" : "gray"}-500`}
                    />
                  ))}
                  {post.stars % 1 !== 0 && (
                    <FaStarHalfAlt className="text-yellow-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
