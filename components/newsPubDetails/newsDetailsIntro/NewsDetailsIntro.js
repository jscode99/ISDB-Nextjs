import Image from "next/image";
import React, { useState } from "react";
import { Row, Col } from "antd";
// Lib
import moment from "moment";
//components
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
import EventRegistrationModal from "../../../common_components/appModal/eventRegistrationModal/EventRegistrationModal";
import AppSlider from "../../../common_components/appSlider/AppSlider";

// css
import styles from "./news-intro-details.module.sass";

export default function EventDetailsIntro({ newsDetails }) {
  console.log("====================================");
  console.log(newsDetails);
  console.log("====================================");
  const [displayedImage, setDisplayedImage] = useState(
    newsDetails.Image[0].url,
  );

  return (
    <div className={`${styles.event_details_bg}`}>
      <div className={`${styles.event_details_container} py-5`}>
        <Row>
          {/* For Large screens */}
          <Col xs={0} sm={0} md={0} lg={12} xl={12}>
            <div>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {newsDetails && newsDetails.Title}
              </h3>
              <p>
                {newsDetails && newsDetails.Author && (
                  <Row>
                    <Col span={3} className={`${styles.event_details_heading}`}>
                      {`Author`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={20} className={`${styles.event_details_value}`}>
                      {newsDetails.Author}
                    </Col>
                  </Row>
                )}
              </p>
              {newsDetails && (
                <p className={`${styles.event_details_des}`}>
                  {newsDetails.Description}
                </p>
              )}
            </div>
          </Col>
          {/* For small screens */}
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={` px-5 `}>
              <h3 className={`${styles.event_details_title} mt-3 mb-4`}>
                {newsDetails && newsDetails.Title}
              </h3>
              <p>
                {newsDetails && newsDetails.Author && (
                  <Row>
                    <Col
                      xs={5}
                      sm={5}
                      md={3}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Author`}
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      md={1}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`:`}
                    </Col>
                    <Col
                      xs={18}
                      sm={18}
                      md={20}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {newsDetails.Author}
                    </Col>
                  </Row>
                )}
              </p>
              {newsDetails && (
                <p className={`${styles.event_details_des} pr-4`}>
                  {newsDetails.Description}
                </p>
              )}
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className={`${styles.event_details_image_box} mt-3 mb-5`}>
              <AppSlider
                showIndicators={false}
                autoPlay={true}
                setAutoPlay={() => {}}
                stopOnHover={false}
              >
                {newsDetails &&
                  newsDetails.Image.map(image =>
                    image.url ? (
                      <Image
                        src={`${process.env.BASE_URL}${image.url}`}
                        alt="ssc"
                        width="500"
                        height="418"
                        className={`${styles.event_details_image}`}
                      />
                    ) : (
                      <Image
                        src={`${process.env.BASE_URL}${displayedImage}`}
                        alt="ssc"
                        width="500"
                        height="418"
                        className={`${styles.event_details_image}`}
                      />
                    ),
                  )}
              </AppSlider>
            </div>
            <div className={`d-flex ${styles.thumbnail_container}`}>
              {newsDetails &&
                newsDetails.Image.slice(0, 4).map(image => (
                  <div
                    className={
                      `mx-3 `
                      // ${
                      //   displayedImage === image.url ? styles.selected : ""
                      //   }`
                    }
                    // onClick={() => setDisplayedImage(image.url)}
                  >
                    <Image
                      src={`${process.env.BASE_URL}${image.url}`}
                      alt="ssc"
                      width="100"
                      height="80"
                    />
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
