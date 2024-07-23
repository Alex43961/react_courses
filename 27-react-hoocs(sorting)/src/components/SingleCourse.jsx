import { Link, useParams, useNavigate } from 'react-router-dom';
import AllCourses from '../data/AllCourses';
import { useEffect } from 'react';
// import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = AllCourses.find((course) => course.slug === params.slug);
  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  // Simply show 404 page if course is not found
  // if(!course) return <NotFound />
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All Courses
      </Link>
    </>
  );
};

export default SingleCourse;
