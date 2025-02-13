import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AllCourses from '../data/AllCourses';

const allKeys = AllCourses.reduce((keys, obj) => {
  return keys.concat(Object.keys(obj));
}, []);
const SORT_KEYS = [...new Set(allKeys)];


function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) return sortedCourses;
  sortedCourses.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  return sortedCourses;
}
const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const navigate = useNavigate();

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(AllCourses, sortKey)
  );
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...AllCourses]);
    }
    ;
  }, [sortKey, navigate]);
  console.log(sortKey);
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'All Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
