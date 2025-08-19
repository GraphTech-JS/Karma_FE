import Image from "next/image";
import styles from "./ProductCatalogSection.module.css";
import Stack from "../../../../../public/catalog_product1.png";
import VTX from "../../../../../public/catalog_product2.png";
import ESC from "../../../../../public/catalog_product3.png";
import BgEl4 from "../../../../../public/bg-el-4.png";

const ProductCatalogSection = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.backgroundElement}>
        <Image
          src={BgEl4}
          alt=""
          className={styles.bgImage}
          width={320}
          height={280}
        />
      </div>
      <h2 className={styles.title}>
        <span className={styles.titleHighlight}>К</span>АТАЛОГ ТОВАРІВ
      </h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image src={Stack} alt="Політні стеки" width={240} height={160} />
          <h3>Політні стеки</h3>
        </div>
        <div className={styles.card}>
          <Image src={VTX} alt="Відеопередавачі VTX" width={240} height={160} />
          <h3>Відеопередавачі VTX</h3>
        </div>
        <div className={styles.card}>
          <Image src={ESC} alt="ESC" width={240} height={160} />
          <h3>ESC</h3>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
