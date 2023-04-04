// const Blog = () => {
//   return (
//     <div>
//       <h1>Blog</h1>
//     </div>
//   );
// };

// export default Blog;

export default function getStaticParams() {
  return [{ slug: "blog1" }, { slug: "blog2" }, { slug: "blog3" }];
}
