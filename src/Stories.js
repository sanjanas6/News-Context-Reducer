import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
const Stories = () => {
  const {hits, nbPages, isLoading, removePost } = useGlobalContext();

    // const [load,setLoad] = useState(true);
    //const isLoading = true;

//   useEffect(()=>{
//     const fetchData = async () => {
//     try {
//         const res = await fetch('http://hn.algolia.com/api/v1/search?query=html')
//         const data = await res.json();
//         console.log(data);
//         // setLoad(false);
//     }catch(err){
//         console.log(err);
//     }
//     }
//     fetchData();
//   }, []);

  if(isLoading){
    return(
        <>
        <h1>Loading...</h1>
        </>
    );
  }

//else ki need ni hai agar true hua toh ni toh direct return 
//   else{
//     return(
//         <>
//         <h3>Done! Done!</h3>
//         </>
//     )
//   }
  return (
   <>
  <div className='stories-div'>
   {

   //JAb aise map use krte hai toh return mai jo sbse phla key element hota hai us mai key pass krna jaruri hota hai
   hits.map((curPost)=>{
    //Object destructuring kr re hAI
    //Isse baar baar cuPost. krke ni likhan padega
    const {title, author, objectID , url , num_comments} = curPost;
       return (
    //    <>
    //Fir div in return must have key
       <div className="card" key={objectID}>
        <h2>{title}</h2>
        <p>
            By <span> {author} </span> | <span>{num_comments}</span> comments
        </p>
        <div className="card-button">
            <a href={url} targert="_blank">
                Read More
            </a>
            {/* objectId k through pata chalega konsi post pr hai abhi */}
            <a href='#' onClick={() => removePost(objectID)}> 
                Remove
            </a>
        </div>
       </div>
       //    </>
    );
   })}
   </div>
   </>
  )
}

export default Stories
