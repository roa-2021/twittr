import React from 'react'
import SearchUserResultCard from './SearchUserResultCard'

const SearchUserResultsCard = ({ usersResults }) => {
  console.log(usersResults)
  return (
    <div className="search-results-card-container">
      {
        usersResults.map((userResult) => {
          return(
            <SearchUserResultCard userResult={userResult}/>
          )
        })
      }
    </div>
  )
}

export default SearchUserResultsCard
