import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  //! Все 4 метода ниже работают одинаково
  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const fetchPosts =async() => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   ;(async function () {
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       setPosts(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then(posts => setPosts(posts))
  //     .catch(error => setError(error.message))
  //     .finally(() => setIsLoading(false))
  // }, [])

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  );
}

export default Posts;
