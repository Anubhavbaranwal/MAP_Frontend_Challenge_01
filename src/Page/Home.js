import React, { useEffect, useState } from 'react'
import CardSection from '../Component/CardSection'
import sampleData from '../Data/Constant'

const Home = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setCards(sampleData);
          setLoading(false);
        }, 5000); 
      }, []);
  return (
   <>
     
     <CardSection title={"Events"} data={cards} loading={loading}/>
     <CardSection title={"Upcoming Events"} data={cards} loading={loading}/>
     <CardSection title={"Previous Events"} data={cards} loading={loading}/>
   </>
  )
}

export default Home