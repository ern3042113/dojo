import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  // invoke the useHistory hook
  const history = useHistory();

  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log(blog);
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      {/* <h2>Blog Details - {id}</h2> */}
    </div>
  );
};

export default BlogDetails;
