import Image from 'next/image';
import spinner from '../../../public/spinner.gif';
import styles from './loading.module.css';
import { useSelector } from 'react-redux';

const Loading = () => {
  const { modalName } = useSelector((store) => store.content);
  return (
    <div className={styles.loading}>
      <h4>Fetching {modalName !== 'A' ? 'US' : 'all'} contacts...</h4>
      <Image src={spinner} className={styles.spinner} />
    </div>
  );
};
export default Loading;
