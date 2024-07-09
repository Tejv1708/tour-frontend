// ReviewList.js

import { useSelector } from 'react-redux';
import {Carousel} from 'react-responsive-carousel'

const ReviewList = () => {
    
 const tour = useSelector(state => state.tour.tourInfo.data.data.data)
 console.log(tour.reviews)


  return (
    <>
  <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {tour.reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div className="w-full h-200 sm:w-1/2 mx-auto mt-4 flex ">
            <Carousel  showArrows={true} >
       
            {tour.reviews.map((data, index) => (
               
              <div key={index} className="p-4 ">
               
                <div className="bg-white shadow-md rounded-lg p-4">
                  <p className="text-gray-700">{data.review}</p>
                </div>
            
              </div>
            
            ))}
     </Carousel>
        </div>
      )}
      
    </div>
    </>
  );
};

export default ReviewList;
