import React from 'react'
import { useGlobalContext } from './context'
// import { useGlobalContext } from './context'


const Search = () => {
  const {query , searchPost} = useGlobalContext();
  //const name = useGlobalContext();
  return (
    <>
   <form onSubmit={(e)=> e.preventDefault() }>
      <div>
      <input 
      type= "text"
      placeholder='Enter Keywords..'
      value={query}
      onChange={(e) => searchPost(e.target.value)}
      />
      </div>
      </form>
    </>
  )
}

export default Search;
