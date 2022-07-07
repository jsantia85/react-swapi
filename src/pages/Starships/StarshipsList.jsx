import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getStarships } from '../../services/sw-api';

const StarshipsList = () => {
  const [starships, setStarships] = useState([])

  useEffect(()=> {
    const fetchStarshipsList = async () => {
      const starshipsData = await getStarships()
      setStarships(starshipsData.results)
    }
    fetchStarshipsList()
  }, [])

  return (
    <>
      <h3>Starships</h3>
      <div className="starship-container">
          {starships.map(starshipsModel =>
            <Link key={starshipsModel.name} to="/starships" state={{ starshipsModel }} >
              <div className="starship-div" >
                {starshipsModel.name}
              </div>
            </Link>
          )}
      </div>
    </>
  )
}

export default StarshipsList;