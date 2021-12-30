import axios from "axios";
import CONTENT from "./actionTypes";

export const requestContents = () => async (dispatch) => {
  const json = await axios.get("api/CONTENTLISTINGPAGE-PAGE1.json");
  try {
    dispatch({
      type: CONTENT.LOAD,
      contentsData: json.data.page["content-items"].content,
      pageNum: json.data.page["page-num-requested"]
    });
  } catch (e) {
    console.log(e);
  }
};

export const requestMoreContents = (pageNum) => async (dispatch) => {
  if(pageNum == 1) {
    const json = await axios.get("api/CONTENTLISTINGPAGE-PAGE2.json");
    try {
      dispatch({
        type: CONTENT.SCROLL,
        contentsData: json.data.page["content-items"].content,
        pageNum: json.data.page["page-num-requested"],
        hasMore: true
      });
    } catch (e) {
      console.log(e);
    }
  }
  else {
    const json = await axios.get("api/CONTENTLISTINGPAGE-PAGE3.json");
    try {
      dispatch({
        type: CONTENT.SCROLL,
        contentsData: json.data.page["content-items"].content,
        pageNum: json.data.page["page-num-requested"],
        hasMore: false
      });
    } catch (e) {
      console.log(e);
    }
  }
};

export const searchResults = (searchQuery) => async (dispatch) => {
  try {
    dispatch({
      type: CONTENT.SEARCH,
      searchQuery: searchQuery
    });
  } catch (e) {
    console.log(e);
  }
};
