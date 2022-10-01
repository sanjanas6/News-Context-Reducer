const reducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING":
        return{
            ...state,
            isLoading: true,
        }
        case "GET_STORIES":
        return{
           ...state, //Previous data return kro
           isLoading: false,
           hits : action.payload.Hits, 
           nbPages : action.payload.NbPages,
        }
        case "REMOVE_STORIES":
        return{
                ...state,
                //FIltere action.payload wali id k alawa saari post return kr dega
                hits: state.hits.filter((curPost) => 
                curPost.objectID != action.payload
               ),
            };
        case "SEARCH_QUERY":
        return{
                ...state,
                query: action.payload,
                // hits: state.hits.filter((curPost) => 
                // curPost.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                // curPost.author.toLowerCase().includes(action.payload.toLowerCase())
                // )
            }
        case "PREV_PAGE":
        let pageNo = state.page - 1;

        if (pageNo <= 0){
                pageNo = 0;
            }
        return{
                ...state,
                page: pageNo,
            }
        
        case "NEXT_PAGE":
            let pageNoAdd = state.page +1;

            if(pageNoAdd >= state.nbPages){
                pageNoAdd = 0;
            }
            return{
                ...state,
                page: pageNoAdd,
            }

          
    }
 return state;
};

export default reducer;