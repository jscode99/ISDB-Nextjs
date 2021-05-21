import Image from "next/image";
import { Row, Col } from "antd";
// CSS
import styles from "./gaming-banner.module.sass";

export default function GamingBannerImage() {
  return (
    <div className={`${styles.container}`}>
      <Row className={`w-100`}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`${styles.game_banner_container}`}>
            <Image
              className={`${styles.gaming_image}`}
              src="/entertainment/GamingBanner.png"
              alt="Gaming Tournament Picture"
              layout={`fill`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
