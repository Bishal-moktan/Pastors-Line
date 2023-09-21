'use client';
import { ImCross } from 'react-icons/im';
import styles from './detailmodal.module.css';
import { closeDetail } from '@/feature/content/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import male from '../../../public/male.svg';
import Image from 'next/image';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const DetailModal = () => {
  const dispatch = useDispatch();
  const { contactLists } = useSelector((store) => store.contact);
  const [singleContact, setSingleContact] = useState({});
  const { contactId } = useSelector((store) => store.content);
  useEffect(() => {
    setSingleContact(contactLists[contactId]);
  }, []);
  const { first_name, last_name, phone_number, email, color } = singleContact;
  const colorStyle = {
    backgroundColor: `${color}`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Details</h2>
        <div className={styles.info}>
          <div className={styles.image}>
            <Image src={male} alt="avatar" />
          </div>
          <h2>
            {first_name !== null && first_name}{' '}
            {last_name !== null && last_name}
            {first_name === null && last_name === '' && `No data for name`}
          </h2>
          <div className={styles.others}>
            <p>
              {' '}
              <span>
                <IoMdCall />
              </span>
              {phone_number ? phone_number : 'No number.'}
            </p>
            <p>
              <span>
                <AiOutlineMail />
              </span>
              {email ? email : 'No number.'}
            </p>
            <p>
              <span style={colorStyle} className={styles.color}></span>
              Color
            </p>
          </div>
        </div>
        <div className={styles.cross} onClick={() => dispatch(closeDetail())}>
          <span> Close </span>
          <ImCross />
        </div>
      </div>
    </div>
  );
};
export default DetailModal;
