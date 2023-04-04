import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getGreetings from '../redux/api';

function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.greetings);

  console.log(greetings)

  useEffect(() => {
    if (greetings.length === 0) {
      dispatch(getGreetings());
    }
  }, [dispatch, greetings.length]);

  return (
    <div className="countries-grid">
    <p>{greetings.message}</p>
  </div>
  );
}

export default Greeting