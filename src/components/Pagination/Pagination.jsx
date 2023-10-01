import css from './Pagination.module.css'
import sprite from '../../images/icons.svg'
import { useState } from 'react';

const Pagination = ({totalNewsPages, currentPage, nextPage, prevPage}) => {

   
   const [activePage, setActivePage] = useState(1);
    
   const handlePageClick = (number) => {
        setActivePage(number);
        currentPage(number);
      };


    const pageNumber = []
    for( let i=1; i <= totalNewsPages; i++)
    pageNumber.push(i)
    return (
       <div className={css.paginationWrap}>
         <button className={css.btnLeft} onClick={prevPage}>
      <svg width={35} height={35}>
         < use href={sprite+'#icon-left'}/> 
      </svg>
      </button>
     
     <ul className={css.pagination}>
        {pageNumber.map(number=>(<li  className={`${css.paginationItem} ${
              number === activePage ? css.activePage : ''
            }`} onClick={(e) => {
                e.preventDefault();
                handlePageClick(number);
              }}>
        <a   href="!#"> {number}  </a>
        </li>))
        }
     </ul>
     
     <button className={css.btnRight} onClick={nextPage}>
      <svg width={35} height={35}>
         <use  href={sprite +'#icon-right'}/>
      </svg>
     </button>
       </div>)
   }
   
   export default Pagination