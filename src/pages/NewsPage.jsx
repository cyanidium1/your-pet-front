import NewsSearch from "components/NewsCard/NewsSearch/NewsSearch";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllNews } from "redux/news/newsOperation";



const NewsPage = () => {
  const dispatch = useDispatch( );
  // const [searchQuery, setSearchQuery] = useState("")

   useEffect(()=> {
  dispatch(fetchAllNews())
   },[])
  return (
    <div >
    <NewsSearch/>
    </div>
  );
};
export default NewsPage;

