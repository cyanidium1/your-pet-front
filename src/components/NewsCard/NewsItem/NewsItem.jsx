import css from '../NewsItem/NewsItem.module.css';

const NewsItem = ({ _id, text, image_url, title, url, date }) => {
  const updateData = new Date(date).toLocaleDateString().split('.').join('/');

  return (
    <li key={_id} className={`${css.item}`}>
      <img src={image_url} alt={title} className={css.img} />
      <div className={css.textBox}>
        <div className={css.textBoxWrapper}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.text}>{text}</p>
        </div>
        <div className={css.dateBox}>
          <p className={css.date}>{updateData}</p>
          <a
            className={css.link}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Read more</p>
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
