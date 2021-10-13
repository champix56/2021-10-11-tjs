export const initialState = {
    memes:[],
    images:[]
}
export const REDUCER_ACTIONS=Object.freeze({
    INIT_IMAGES:'INIT_IMAGES',
    ADD_MEME:'ADD_MEME'
})
const REDUCER_PRIVATE_ACTIONS=Object.freeze({
    FULL_INIT:'FULL_INIT',
    FETCH_ALL:'FETCH_ALL'
})
function reducer (state = initialState, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.INIT_IMAGES :return {...state,images:[...action.values]};
        case  REDUCER_ACTIONS.ADD_MEME :return {...state,memes:[ ...state.memes, action.value ] };
        default:
            return state;
    }
}
let state=reducer(undefined,{type:'INIT'});
console.log(state);

state=reducer(state,{type:REDUCER_ACTIONS.INIT_IMAGES, values:[{id:0},{id:1},{id:2}]});
console.log(state);

state=reducer(state,{type:REDUCER_ACTIONS.ADD_MEME, value:{id:0,text:'coucou'}});
console.log(state);