import React from 'react'
import Stories from './Stories'
import './App.css'
import Pagination from './Pagination'
import Search from './Search'
// import { useContext } from 'react'
// import { AppContext } from './context'
// import { useGlobalContext } from './context'
const App = () => {

  //UseContext ki help se context.js ki value ko overall kahi bhi call krskte hai
  // const data = useContext(AppContext);
  // const data = useGlobalContext();

  return (
    <>
      <h1>Tech News Website By Sanjana Singh</h1>
      <Search />
      <Pagination />
      <Stories />
      

    </>
  )
}

export default App
