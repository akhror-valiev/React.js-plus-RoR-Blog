import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { API_URL } from "../../constants";

const PostDetails = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const fetchCurrentPosts = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                    setLoading(false)
                } else {
                    throw response;
                }
            } catch (e) {
                console.log("Error occured", e);
            }
        };
        fetchCurrentPosts();

    }, [id]);

    // if (!post) return <h2>Loading..</h2>
    if (loading) return <div>Loading...</div>
    

    return (
        <div>

            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/">Back to the Post</Link>
        </div>
    )
}

export default PostDetails;