const delay = (ms: number, slug: any) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(slug);
    }, ms);
  });

const BlogPost = async ({ params }: { params: any }) => {
  const post = await delay(5000, params);
  console.log(post);
  console.log(params, "params on blog");
  return (
    <div>
      <h1>BlogPost</h1>
      <h2>{post.slug}</h2>
    </div>
  );
};

export default BlogPost;
