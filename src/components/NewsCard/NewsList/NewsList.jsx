import { useSelector } from 'react-redux';
import css from '../NewsList/NewsList.module.css';
import { selectAllNews } from 'redux/news/newsSelectors';
import NewsItem from '../NewsItem/NewsItem';


const NewsList = () => {
  const allNews = useSelector(selectAllNews);
  console.log(allNews
)
  return (
    <ul className={css.list}>
      {allNews.map(({ _id, description, image_url, title, url, published_at  }) => (
        <NewsItem
          key={_id}
          text={description}
          image_url={image_url}
          title={title}
          url={url}
          date={published_at}
        />
      ))}
    </ul>
  );
} 

export default NewsList;