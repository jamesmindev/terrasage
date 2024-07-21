import Image from "next/image";
import styles from "./DisplayImage.module.scss";

const DisplayImage = ({ src }: { src: string }) => {
  return (
    <section className={styles.DisplayImage}>
      <Image src={src} width={4000} height={4000} alt="section display image" />
      {/* <img src="/images/green-field-01.jpg" alt="" /> */}
    </section>
  );
};

export default DisplayImage;
