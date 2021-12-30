import CONTENT from "../actions/actionTypes";

const initalState = {
  contentsData: [],
  hasMore: true,
  pageNum: 1
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CONTENT.LOAD:
      return {
        ...state,
        contentsData: action.contentsData,
        pageNum: action.pageNum
      };
    case CONTENT.SCROLL:
      const newContents = state.contentsData.concat(action.contentsData)
      return {
        ...state,
        contentsData: newContents,
        pageNum: action.pageNum,
        hasMore: action.hasMore
      };
    case CONTENT.SEARCH:
      const searchResults = state.contentsData.filter(value => {return value.name.toLowerCase().includes(action.searchQuery.toLowerCase())})
      return {
        ...state,
        contentsData: searchResults
      };
    default:
      return state;
  }
};

export default reducer;