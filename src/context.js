//Context Creation
//Provider
//Consumer => useContext Hook

//LIFECYCLE = STORIES -> CONTEXT -> REDUCER -> STORIES
import { query } from "express";
import { createContext, useContext, useReducer, useEffect } from "react";
//Creation
import reducer from "./reducer";
const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

//Provider
const AppProvider = ({ children }) => {
  //UseReducre is same as useState  with only difference that in useReducer we are supposed to write dispatch instead of setState

  //useReducer mai ek reducer function extra add hota hai jisme dispatch reducer mai ek action method hai usko trigger karega
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      //Jisko dispatch krt hai usko action ami define krna mandatory hota hai
      dispatch({type: "SET_LOADING"})
      try {
        const res = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`
        );
        const data = await res.json();
        console.log(data);
        //Dispatch action method call krega reducer ki
        dispatch({
          type:"GET_STORIES",
           payload: {
            Hits: data.hits, //update krdi initial state ki hits ko
            NbPages: data.nbPages,
          }  
      })
        // setLoad(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[state.query , state.page]); //jb bhi query change hogi tb isko refrezsh

  //Remove k liye filter ka use kaenge
  const removePost = (post_id) =>{
    dispatch({
      type:"REMOVE_STORIES",
      payload: post_id
    })
  }

  const searchPost = (searchipt) =>{
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchipt
    });
  }

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE"
    })
  }

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE"
    })


  }
  return (
    //...state => mtlb jo previous data hai sb pass kara diya 
    <AppContext.Provider value={{...state , removePost , searchPost , getNextPage , getPrevPage}}>
      {children} 
    </AppContext.Provider>
  );
};

//custom hook create - JAb kisi function/component mai hooks ko hi return krte hai toh wo humara custom hook hota hai usme use keyword karna mandatoy hota hai
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
