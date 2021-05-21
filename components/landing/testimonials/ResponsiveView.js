import Image from "next/image";
import { Row, Col } from "antd";
// css
import styles from "./testimonials.module.sass";

export default function ResponsiveView({ view, testimonialsData }) {
  return (
    <div className={`${styles.testimonials_container}`}>
      <div
        className={`${styles.testimonials_subcontainer} ${
          view === "desktop" ? "px-3" : "px-1"
        }`}
      >
        <Row>
          <Col xs={0} sm={0} md={16} lg={17} xl={17}>
            <Row className={`w-100`}>
              <Col span={24}>
                <h3 className={`${styles.testimonials_title}`}>Testimonials</h3>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3} xl={3}>
                <div
                  className={`${styles.before_des_img}`}
                  style={{
                    backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                  }}
                ></div>
              </Col>
              <Col xs={20} sm={20} md={18} lg={18} xl={18}>
                <p className={`${styles.testimonials_des} w-100`}>
                  {testimonialsData.TestimonialsDescription}
                </p>
              </Col>
              <Col xs={2} sm={2} md={3} lg={3} xl={3}>
                <div
                  className={`${styles.after_des_img}`}
                  style={{
                    backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                  }}
                ></div>
              </Col>
              <Col span={24}>
                <h5 className={`${styles.testimonials_author}`}>
                  {testimonialsData.TestimonialsAuthor}
                </h5>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Row className={`w-100`}>
              <Col span={24}>
                <h3 className={`${styles.testimonials_title}`}>Testimonials</h3>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <div
                  className={`${styles.before_des_img}`}
                  style={{
                    backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                  }}
                ></div>
              </Col>
              <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                <p className={`${styles.testimonials_des} w-100`}>
                  {testimonialsData.TestimonialsDescription}
                </p>
              </Col>
              <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                <div
                  className={`${styles.after_des_img}`}
                  style={{
                    backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                  }}
                ></div>
              </Col>
              <Col span={24}>
                <h5 className={`${styles.testimonials_author}`}>
                  {testimonialsData.TestimonialsAuthor}
                </h5>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={8} lg={7} xl={7}>
            <div className={`${styles.image_container} w-100`}>
              <div className={`${styles.testimonials_image_box}`}>
                {testimonialsData && testimonialsData.TestimonialsImage && (
                  <Image
                    src={
                      process.env.BASE_URL +
                      testimonialsData.TestimonialsImage.url
                    }
                    alt="card-img"
                    width="200"
                    height="200"
                    className={`${styles.testimonials_image}`}
                  />
                )}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div className={`${styles.image_container} w-100`}>
              <div className={`${styles.testimonials_image_box}`}>
                {testimonialsData && testimonialsData.TestimonialsImage && (
                  <Image
                    src={
                      process.env.BASE_URL +
                      testimonialsData.TestimonialsImage.url
                    }
                    alt="card-img"
                    width="200"
                    height="200"
                    className={`${styles.testimonials_image}`}
                  />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
