import React from "react";
import BlogCard from "./BlogCard";

const BlogContainer = () => {
  return (
    <section
      className="flex flex-wrap items-center justify-center gap-4 m-4 "
      id="BLOG"
    >
      <h2 className="w-full text-center justify-center font-bold">
        NUESTRO BLOG
      </h2>
      <BlogCard
        title={"TITULO 1"}
        url={"https://i.blogs.es/98f0e3/atardecer-salar-uyuni/1366_2000.jpeg"}
      ></BlogCard>
      <BlogCard
        title={"TITULO 1"}
        url={"https://farm8.staticflickr.com/7203/7140567075_35cb287430_z.jpg"}
      ></BlogCard>
    </section>
  );
};

export default BlogContainer;
