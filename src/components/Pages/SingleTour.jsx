// SingleTour.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singleTour } from '../../features/tour/tourSlice';
import Navbar from '../layout/Navbar';
import ReviewList from './ReviewList'; // Assuming ReviewList component will display reviews

const SingleTour = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleTour(id));
  }, [dispatch, id]);

 


  const  tour  = useSelector(state => state.tour.tourInfo.data.data.data); // Adjust according to your Redux store structure

  if (!tour) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-4 px-4">
        <h1 className="text-3xl font-bold mb-4">{tour.name}</h1>
        <img src={tour.imageCover} alt={tour.name} className="w-full mb-4 rounded-lg" />
        <p className="mb-4">{tour.description}</p>
        <p className="mb-4">
          <strong>Difficulty:</strong> {tour.difficulty}
        </p>
        <p className="mb-4">
          <strong>Duration:</strong> {tour.duration} days
        </p>
        <p className="mb-4">
          <strong>Start Dates:</strong>{' '}
          {tour.startDates.map(date => (
            <span key={date} className="mr-2">
              {new Date(date).toLocaleDateString()}
            </span>
          ))}
        </p>
        <h2 className="text-xl font-bold mb-2">Tour Highlights</h2>
        <ul className="list-disc pl-6 mb-4">
          {tour.locations.map(location => (
            <li key={location._id}>{location.description}</li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mb-2">Guides</h2>
        <ul className="flex space-x-4 mb-4">
          {tour.guides.map(guide => (
            <li key={guide._id}>
              <img src={guide.photo} alt={guide.name} className="w-16 h-16 rounded-full" />
              <p>{guide.name}</p>
            </li>
          ))}
        </ul>
        <ReviewList />
      </div>
    </>
  );
};

export default SingleTour;
