import { getPostData } from "@/services/getPostApi";
import Link from "next/link";

const PostPage = async () => {
  const postDataCall = await getPostData();
  return (
    <div className="min-h-screen">
      <h6>All Post</h6>
      <div className="grid grid-cols-4 gap-6 mx-10">
        {postDataCall.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="p-6 border-2 border-silver shadow-lg rounded-lg bg-teal-100"
          >
            <h6 className="text-black">
              <strong>Title: </strong>
              {post.title}
            </h6>
            <p className="text-black">
              <strong>Descrption: </strong>
              {post.body}
            </p>
            <button className=" bg-slate-700 p-2 rounded-lg mt-5">
              <Link href={`/post/${post.id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostPage;
