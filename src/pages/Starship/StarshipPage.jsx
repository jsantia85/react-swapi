import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

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
      <h1>Starship Page</h1>
      {starshipDetails.name ? 
        <> 
        <div className='starship-container'>
          <div className='starship-div'>
            <h2>Name: {starshipDetails.name}</h2>
            <h2>Model: {starshipDetails.model}</h2>
            <h2>{<Link to="/starships-list">Return</Link>}</h2>
          </div>
        </div>
        </> 
        : 
        <>
          <p>Loading class details...</p>
        </>
      }
    </>
  );
}

export default StarshipPage;