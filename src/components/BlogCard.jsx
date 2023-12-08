import React from "react";

const BlogCard = ({ title, url }) => {
  return (
    <div className="md:w-2/5">
      <div
        className="overflow-hidden h-60 flex items-center justify-around flex-col w-full rounded-t-2xl"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: `cover`,
        }}
      >
        <h2 className="bg-[#61CC9E]/30 px-2 py-2 text-white">{title}</h2>
      </div>
      <div className="rounded-b-2xl text-center bg-white p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quam
        quia vel, aspernatur eius mollitia fugit deleniti vero porro est
        reiciendis, ad totam rerum corporis quo, in blanditiis inventore ipsum.
      </div>
    </div>
  );
};

export default BlogCard;
