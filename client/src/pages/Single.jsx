import React, { useContext, useEffect, useState } from "react";
import EditImage from "../images/edit.png";
import DeleteImage from "../images/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  // The useLocation hook returns the current location object, which contains information about the current URL.
  const location = useLocation();
  // The useNavigate hook returns a navigate function that can be used to navigate to a new location.
  const navigate = useNavigate();

  // Extract the post ID from the current URL.
  const postId = location.pathname.split("/")[2];

  // Get the current user from the AuthContext.
  const { currentUser } = useContext(AuthContext);

  // Use the useEffect hook to fetch the blog post data from the server when the component mounts.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  // Handler function for deleting a blog post.
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      // Navigate to the home page after deleting the post.
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function to extract plain text from an HTML string.
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  // Render the blog post.
  return (
    <div className="single">
      <div className="content">
        {/* Render the post image. */}
        <img src={`../upload/${post?.img}`} alt="post cover" />
        <div className="user">
          {/* Render the user image if it exists. */}
          {post.userImg && <img src={post.userImg} alt="user" />}
          <div className="info">
            {/* Render the post author and date. */}
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* Render the edit and delete buttons if the current user is the author of the post. */}
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={EditImage} alt="edit" />
              </Link>
              <img onClick={handleDelete} src={DeleteImage} alt="delete" />
            </div>
          )}
        </div>
        {/* Render the post title and description. */}
        <h1>{post.title}</h1>
        <i>"{getText(post.desc)}"</i>
        <p>
          Life is full of ups and downs, and during the challenging times, 
          faith can be a source of immense strength and comfort. In this post, 
          we explore how leaning on your faith can help you navigate through difficulties. 
          Whether it’s through prayer, meditation, or community support, 
          discovering the power of faith can provide hope and resilience. 
          We’ll also share some personal stories of individuals, 
          who found solace in their faith during tough times.
        </p>
        <p>
          In the hustle and bustle of modern life, it’s easy to overlook the simple pleasures that bring joy and contentment. 
          From enjoying a quiet cup of coffee in the morning to taking a leisurely walk in nature, 
          these small moments can have a big impact on our overall well-being. In this post, we’ll explore ways to slow down 
          and appreciate the simple things in life that make it truly beautiful.
        </p>
        <p>
          Family traditions are a wonderful way to create lasting memories and strengthen 
          bonds between family members. Whether it’s a weekly game night, an annual holiday celebration, 
          or a simple Sunday dinner, these traditions can bring joy and continuity to family life. In this post, 
          we’ll discuss the importance of family traditions and share some ideas for starting new ones. 
          Let’s cherish the moments that bring us closer together.
        </p>
        <p>
          Finding the right balance between career ambitions and personal life can be a challenging task. 
          While striving for professional success is important, it’s equally crucial to ensure that your 
          personal life and well-being are not neglected. In this post, we’ll discuss strategies for 
          achieving a healthy work-life balance, setting boundaries, and prioritizing what matters most. Remember, 
          a fulfilling career and a happy personal life can go hand in hand.
        </p>
      </div>
      {/* Show related categories. */}
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;