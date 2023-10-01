import NewsList from "components/NewsCard/NewsList/NewsList";
import Pagination from "components/Pagination/Pagination";
import Search from "components/Search/Search";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchAllNews } from "redux/news/newsOperation";
import { selectAllNewsTotalPages } from "redux/news/newsSelectors";



  const NewsPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(6)
  const totalNewsPages = useSelector(selectAllNewsTotalPages )
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('searchQuery') ?? null;
  
  const nextPage = () => setPage(prev=> prev+1)
  const prevPage = () => setPage(prev=> prev-1)

  const currentPage = (numberPage) => { 
    setPage(numberPage)
  }

  useEffect(() => { dispatch(fetchAllNews({searchQuery: productName, page, limit}))
  }, [dispatch, productName, page, limit])
  
  return (
    <>
    <Search searchParams={searchParams} setSearchParams={setSearchParams} titleSearch={'News'} />
    <NewsList/> 
    <Pagination totalNewsPages={totalNewsPages} currentPage={currentPage} nextPage= {nextPage} prevPage={prevPage} />
    </>
    

  );
};
export default NewsPage;

