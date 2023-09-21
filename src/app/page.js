'use client';
import Button from '@/components/button/Button';
import styles from './page.module.css';
import Modal from '@/components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import DetailModal from '@/components/detailModal/DetailModal';

export default function Home() {
  const { isModalOpen, isDetailOpen } = useSelector((store) => store.content);

  return (
    <div className={styles.container}>
      <Button name={'A'} text={'Button A'} bgcolor={'#46139f'} color="#fff" />
      <Button name={'B'} text={'Button B'} bgcolor={'#ff7f50'} color="#fff" />
      {isModalOpen && <Modal />}
      {isDetailOpen && <DetailModal />}
    </div>
  );
}
