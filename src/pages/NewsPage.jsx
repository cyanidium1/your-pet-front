import NewsSearch from "components/NewsCard/NewsSearch/NewsSearch";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllNews } from "redux/news/newsOperation";



const NewsPage = () => {
  const dispatch = useDispatch( );
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchChange = value => {setSearchQuery(value)}

  useEffect(()=> {
  dispatch(fetchAllNews({searchQuery}))
   },[dispatch, searchQuery])
  return (
    <div >
    <NewsSearch handleSearchChange={handleSearchChange}/> 
    </div>
  );
};
export default NewsPage;

