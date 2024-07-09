import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllTour } from '../../features/tour/tourSlice';
import { Link } from 'react-router-dom';

const AllTours = () => {
  const tours = useSelector(state => state.tour);
  const dispatch = useDispatch();

 console.log("All Tour : " , tours)
 
  useEffect(() => {
    dispatch(showAllTour());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-4">
      {tours?.tourInfo?.data?.data?.doc?.map(data => (
        <div
          key={data.id}
          className="hover:bg-gray-100 transition-colors duration-300 ease-in-out flex flex-col bg-white rounded-lg shadow-md p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex-grow"
        >
          <Link to={`/tour/${data.id}`} className="block">
            <div className="font-bold text-xl mb-2">{data.name}</div> {/* Card header */}
            <div className="text-gray-700 mb-2">{data.summary}</div> {/* Summary */}
            <div className="font-bold text-green-600">${data.price}</div> {/* Price */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllTours;

