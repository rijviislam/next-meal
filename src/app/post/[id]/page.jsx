const getPostDataById = async (id) => {
  const dynamicData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = dynamicData.json();
  console.log(data);

  return data;
};

// export const metadata = {
//   title: "Post Details",
//   description: "This is from Dynamic Details Page",
//   // keywords: ["about", "about page"],
// };

export const generateMetaData = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`
  );
  const dynamicData = await res.json();
  return {
    title: {
      absolute: `${dynamicData.title}`,
    },
    description: dynamicData.body,
    keywords: dynamicData.body.split(" "),
  };
};
const PostDetailsPage = async ({ params }) => {
  console.log(params);
  const { title, body } = await getPostDataById(params.id);
  return (
    <div>
      <h2 className="text-3xl">Post Details Page {params.id}</h2>
      <h2>Post Title: {title}</h2>
      <p>Description: {body}</p>
    </div>
  );
};
export default PostDetailsPage;
