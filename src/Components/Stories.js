import { useState } from "react";
import './Stories.css';

const Stories = () => {
  // eslint-disable-next-line
  const [stories, useStories] = useState([
    {
      title: "John ",
      id: 1,
      link: "https://randomuser.me/api/portraits/women/80.jpg",
    },
    {
      title: "Mary",
      id: 2,
      link: "https://randomuser.me/api/portraits/women/81.jpg",
    },
    {
      title: "Brown",
      id: 3,
      link: "https://randomuser.me/api/portraits/women/78.jpg",
    },
    {
      title: "Ling",
      id: 4,
      link: "https://randomuser.me/api/portraits/women/73.jpg",
    },
    {
      title: "Ting",
      id: 5,
      link: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      title: "Ching",
      id: 6,
      link: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  ]);

  return (
    <div className="flex flex-col">
        <div className="flex overflow-x-scroll hide-scroll-bar pb-10">

      <div className="flex flex-row ">
        <div className="py-3">
          <div class="relative w-16 h-12 ml-3 mr-2">
            <img
              class="rounded-full border border-gray-100 shadow-sm"
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="user story"
              />
            <div class="absolute -bottom-3 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-blue-400 z-5"></div>
            <div className="text-xs text-center mt-3 w-16">Your Story</div>
          </div>
        </div>
        <div className="flex flex-row py-3">
          {stories.map((story) => (
              <div class="relative w-16 h-12 mx-2" key={story.id}>
              <img
                class="rounded-full border ring-2 ring-red-500 ring-offset-blue-500 p-0.5"
                src={story.link}
                alt="user story"
                />
              {/* <div class="absolute -bottom-3 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-5"></div> */}
              <div className="text-xs text-center mt-3 w-16">{story.title}</div>
            </div>
          ))}
        </div>
      </div>
          </div>
      <hr />
    </div>
  );
};

export default Stories;
