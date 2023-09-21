'use client';
import { useState } from 'react';
import styles from './button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/feature/content/contentSlice';

const Button = ({ text, bgcolor, color, name }) => {
  const [isHover, setIsHover] = useState(false);
  const customStyles = {
    backgroundColor: isHover ? color : bgcolor,
    color: isHover ? bgcolor : color,
    border: isHover ? `1px solid ${bgcolor}` : 'none',
    transition: 'all 0.5s ease',
  };

  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.content);
  const handleClick = () => {
    dispatch(openModal(name));
  };
  return (
    <div
      onClick={handleClick}
      style={customStyles}
      className={styles.btn}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
    </div>
  );
};
export default Button;
