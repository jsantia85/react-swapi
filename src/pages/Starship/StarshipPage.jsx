import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starshipsModel.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starshipsModel.url])
  return (
    <>
      <div>
        {/* Look at this sweet ternary! */}
        {/* This is a great way to render a 'loading' page! */}
        {starshipDetails.name ?
        <>
          <h3>hello</h3>
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    </>
  )
}

export default StarshipPage;