"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './styles.module.css';
import arrow from '@/assets/returnIcon.png';

const ReturnArrow: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/home');
  };

  return (
    <Image
      className={styles.returnArrow}
      src={arrow}
      alt="return-Arrow-Icon"
      onClick={handleBackClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ReturnArrow;
