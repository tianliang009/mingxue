import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname, "enter")
    return () => {
      console.log(location.pathname, "leave")
    }
  }, [location.pathname])
  return <div>
    404
  </div>;
};
export default NotFound;