
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestContents, requestMoreContents } from "../../store/actions/action";
import styles from './Contents.module.css';
import Content from "../Content/Content";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const { contentsData, hasMore, pageNum } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContents());
  }, []);

  const fetchMoreData = () => {
    dispatch(requestMoreContents(pageNum));
  }

  return (
    <>
      {contentsData.length === 0 ? <><h1>No contents to show</h1> <a href="/">Go Back</a> </> : 
        <InfiniteScroll
          dataLength={contentsData.length}
          next={fetchMoreData}
          hasMore={hasMore}
          scrollThreshold={0.3}
        >
          <div className={styles.contents}>
            <div className={styles.container}>
              {contentsData.map((content, index) => {
                const IMG = (imgName) => {
                  try {
                    return require (`../../assets/images/${imgName}`)
                  }
                  catch {
                    return require (`../../assets/images/placeholder_for_missing_posters.png`)
                  }
                }
                let image = IMG(content["poster-image"]);
                return(
                  <>
                    <Content key={index} title={content["name"]} image={image} />
                  </>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      }
    </>
  );
};

export default App;