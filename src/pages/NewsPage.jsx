import NewsList from "components/NewsCard/NewsList/NewsList";
import Search from "components/Search/Search";
import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchAllNews } from "redux/news/newsOperation";



  const NewsPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? null;
 const page = 1
  useEffect(() => { dispatch(fetchAllNews({searchQuery: productName, page, limit:6}))
  }, [])
  
  return (
    <>
    <Search searchParams={searchParams} setSearchParams={setSearchParams} titleSearch={'News'} />
    <NewsList/> 
    </>
    

  );
};
export default NewsPage;

