'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState('');

  const onClick = () => {
    imageInputRef.current.click(); // 실제 input 요소의 클릭 이벤트를 발생시킴
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    // readAsDataURL(file)을 호출하면 비동기적으로 파일 읽기 작업이 시작되고,
    // 이 작업이 완료된 후 onload 이벤트 핸들러가 실행됩니다.
    fileReader.onload = () => {
      setPickedImage((current) => (current = fileReader.result));
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>아직 선택된 이미지가 없습니다.</p>}
          {pickedImage && <Image src={pickedImage} alt='Selected Image' fill />}
        </div>
        <input
          className={styles.input}
          type='file'
          id='image'
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type='button' onClick={onClick}>
          이미지 등록
        </button>
      </div>
    </div>
  );
}
