import { useDispatch, useSelector } from 'react-redux';
import styles from './modal.module.css';
import { ImCross } from 'react-icons/im';
import { BiSolidContact } from 'react-icons/bi';
import { closeModal, openDetail } from '@/feature/content/contentSlice';
import Button from '../button/Button';
import { useEffect, useState } from 'react';
import { fetchContact } from '@/feature/contact/contactSlice';
import Loading from '../loading/Loading';

const Modal = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const { modalName } = useSelector((store) => store.content);
  const dispatch = useDispatch();
  let { loading, contact_ids, error } = useSelector((store) => store.contact);
  const getData = () => {
    if (modalName !== 'A') {
      dispatch(fetchContact({ query, countryId: 226 }));
    } else {
      dispatch(fetchContact({ query }));
    }
  };
  useEffect(() => {
    getData();
  }, [modalName, query]);
  useEffect(() => {
    if (isChecked) {
      const evenContacts = contact_ids.filter((item) => item % 2 === 0);
      setFilteredContacts(evenContacts);
    } else {
      setFilteredContacts(contact_ids);
    }
  }, [isChecked, contact_ids]);

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <h2>
          Modal {modalName === 'A' ? 'A (All contacts)' : 'B (US contacts)'}{' '}
        </h2>
        <div className={styles.buttons}>
          <Button
            name={'A'}
            text={'All Contacts '}
            bgcolor={'#46139f'}
            color="#fff"
          />
          <Button
            name={'B'}
            text={'US Contacts'}
            bgcolor={'#ff7f50'}
            color="#fff"
          />
        </div>
        <div className={styles.checkBox}>
          <input
            type="checkbox"
            id="isEven"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="isEven">Only even</label>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Eg: jack"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.contacts}>
          {loading && <Loading />}
          {error && <p className={styles.error}>{error}!</p>}
          {!loading && (
            <div className={styles.contactList}>
              {filteredContacts?.map((item) => {
                return (
                  <div
                    onClick={() => dispatch(openDetail(item))}
                    className={styles.item}
                    key={item}
                  >
                    <BiSolidContact />
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.cross} onClick={() => dispatch(closeModal())}>
          <span> Close </span>
          <ImCross />
        </div>
      </div>
    </div>
  );
};
export default Modal;
