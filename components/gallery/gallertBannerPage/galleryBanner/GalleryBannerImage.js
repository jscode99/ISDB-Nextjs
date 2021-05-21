import Image from "next/image";
import { Row, Col } from "antd";
// CSS
import styles from "./gallery-banner.module.sass";

export default function GalleryBannerImage() {
  return (
    <div className={`${styles.container}`}>
      <Row className={`w-100`}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`${styles.gallery_banner_container}`}>
            <Image
              className={`${styles.gallery_image}`}
              src="/gallery/banner.PNG"
              alt="Gaming Tournament Picture"
              layout={`fill`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
