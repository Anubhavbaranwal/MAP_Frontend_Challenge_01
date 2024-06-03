import React from 'react'
import Card from './Card'
import LoadingSkeleton from './LoadingSkeleton';
import Card2 from "./Card2";
const CardSection = (props) => {
    
    const {data,title,loading}=props;
    
  return (
    <>
    <h1 className='m-4 text-red-800 font-semibold text-3xl'>{title}</h1>
    <div className="flex items-center justify-center">
    <div className="flex overflow-x-scroll ">
    {loading
        ? Array.from({ length: 10 }).map((_, index) =><div key={index}> <LoadingSkeleton  /></div>)
        : (title==="Previous Events"
            ? data.map((data) => (
                <div className="flex" key={data.id}>
                  <Card2
                    image={data.image}
                    title={data.title}
                    location={data.location}
                    date={data.date}
                    price={data.price}
                  />
                </div>
              ))
            : data.map((data) => (
                <div className="flex" key={data.id}>
                  <Card
                    image={data.image}
                    title={data.title}
                    location={data.location}
                    date={data.date}
                    price={data.price}
                  />
                </div>
              ))
          )}
    </div>
  </div>
  </>
  )
}

export default CardSection