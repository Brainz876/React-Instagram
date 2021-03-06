import starbucks_girl from "../Assets/starbucks-girl.jpeg";
import dots from "../Assets/more_horiz.svg";
import { useState } from "react";

const Post = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState([
    {
      key: "1",
      username: "lukkypistachio",
      location: "TGI Friday's Jamaica",
      image: "https://www.stylevore.com/wp-content/uploads/2019/10/1570415756_502_notitle.jpg",
      likes: "6,123",
      commentName1: "dante1657",
      comment1: "Sexy lips",
      commentName2: "caleb.chnng",
      comment2: "Light Skin 😍",
      postTime: "15"
    },
    {
      key: "2",
      username: "itsuki",
      location: "",
      image: "https://p.favim.com/orig/2018/08/06/girls-instagram-models-xodidar-Favim.com-6125645.jpg",
      likes: "15",
      commentName1: "dchompe",
      comment1: "I love you",
      commentName2: "chingy",
      comment2: "Beautiful",
      postTime: "1"
    },
    {
      key: "2",
      username: "light_skin_ebony",
      location: "Atlanta, Georgia",
      image: "https://www.stylevore.com/wp-content/uploads/2020/02/1-15826988428c4lp.jpg",
      likes: "12",
      commentName1: "puritan",
      comment1: "Boobies",
      commentName2: "sminem",
      comment2: "Love the hair",
      postTime: "1"
    },
  ]);

  return (
    <div>
      {posts.map((post, index) => (
        <div className="mb-10">
          <div className="flex flex-row flex-1 w-screen" key={post.key}>
            <div className="py-3">
              <div class="relative w-10 h-12 ml-3 mr-2">
                <img
                  class="rounded-full border border-gray-100 shadow-sm"
                  src={starbucks_girl}
                  alt="user story"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <p className="text-sm text-left font-medium">{post.username}</p>
              <p className="text-xs text-left">{post.location}</p>
            </div>
            <div className="flex flex-1 justify-end self-center mr-3 h-5">
              <img src={dots} className="h-5" alt="options"></img>
            </div>
          </div>
          <img src={post.image} alt="main"></img>
          <div className="flex flex-row pt-3 px-3">
            <svg
              className="mr-4"
              width="24"
              height="24"
              fill="#262626"
              aria-label="Like"
              color="#262626"
              viewBox="0 0 48 48"
            >
              <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
            </svg>

            <svg
              className="mr-4"
              width="24"
              height="24"
              fill="#262626"
              aria-label="Comment"
              color="#262626"
              viewBox="0 0 48 48"
            >
              <path
                fill-rule="evenodd"
                d="m47.5 46.1-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              className="mr-4"
              width="24"
              height="24"
              fill="#262626"
              aria-label="Share Post"
              class="_8-yf5"
              color="#262626"
              viewBox="0 0 48 48"
            >
              <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6-4.4-18.4L42.4 8.6 23.9 39.7z" />
            </svg>

            <div className="flex flex-1 justify-end">
              <svg
                aria-label="Save"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>{" "}
            </div>
          </div>
          <div className="text-left text-sm pl-4 pt-3">
            <p className="font-medium my-1 text-sm">{ post.likes } likes</p>
            <p className="text-gray-400 mt-2 mb-1">View all { post.commentAmount } comments</p>
            <div className="flex flex-row">
              <p className="font-medium mr-1">{ post.commentName1 }</p>
              <p className="">{ post.comment1 }</p>
            </div>
            <div className="flex flex-row">
              <p className="font-medium mr-1">{ post.commentName2 }</p>
              <p className="">{ post.comment2 }</p>
            </div>
            <p className=" text-left text-xs text-gray-400 mt-3">
              { post.postTime } HOURS AGO
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
