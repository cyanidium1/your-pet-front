import styles from './LoaderSpinner.module.css';
import { Circles } from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <div className={styles.wrap}>
      <Circles
        height="300"
        width="300"
        color="#cce4fb"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
