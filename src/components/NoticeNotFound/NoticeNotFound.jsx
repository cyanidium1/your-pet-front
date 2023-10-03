import styles from './NoticeNotFound.module.css';
import { FcLinux } from 'react-icons/fc';

const NoticeNotFound = () => {
  return (
    <div className={styles.notFound}>
      <h3 className={styles.notFoundTitle}>Notice is not found...</h3>
      <FcLinux />
    </div>
  );
};

export default NoticeNotFound;
