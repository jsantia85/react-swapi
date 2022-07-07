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
      <div>
        <h3>Starships</h3>
        <div className="icon-container">
          {starships.map(starshipsModel =>
            <Link key={starshipsModel.model} to="/starships" state={{ starshipsModel }} >
              <div className="class-div" >
                {starshipsModel.model}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default StarshipsList;