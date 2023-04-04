import Link from "next/link";

// const getData = async () => {
//   const res = await fetch("https://www.reddit.com/json");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = res.json();
//   console.log(data);
//   return data;
// };

const Contact = async () => {
  // const data = await getData();
  // console.log(data);
  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Home</Link>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const data = await fetch("https://www.reddit.com/json");
//   const redditData = await data.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data: redditData,
//     },
//   };
// };

export default Contact;
