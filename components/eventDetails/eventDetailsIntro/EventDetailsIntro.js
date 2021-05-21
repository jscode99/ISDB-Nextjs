import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
// Lib
import moment from "moment";
//components
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";
import EventRegistrationModal from "../../../common_components/appModal/eventRegistrationModal/EventRegistrationModal";
import AppSlider from "../../../common_components/appSlider/AppSlider";

// css
import styles from "./event-details-intro.module.sass";

export default function EventDetailsIntro({ eventData }) {
  // Modal state
  // const [autoPlay, setAutoPlay] = useState(true);
  const [eventRegistrationModal, setEventRegistrationModal] = useState(false);
  const [displayedImage, setDisplayedImage] = useState(eventData.Image[0].url);

  return (
    <div className={`${styles.event_details_bg}`}>
      <div className={`${styles.event_details_container} py-5`}>
        <Row>
          {/* For Large screens */}
          <Col xs={0} sm={0} md={0} lg={10} xl={12}>
            <div>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {eventData && eventData.Title}
              </h3>
              <p>
                {eventData && eventData.Author && (
                  <Row>
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Organizer`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {eventData.Author}
                    </Col>
                  </Row>
                )}
              </p>
              <p>
                {eventData && eventData.StartDate && (
                  <Row>
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Event Date`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {moment(eventData.StartDate).format("ddd, D MMMM YYYY")}
                    </Col>
                  </Row>
                )}
              </p>
              <p>
                {eventData && eventData.StartDate && (
                  <Row>
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Time`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {moment(eventData.StartDate).format("h:mm a [onwards]")}
                    </Col>
                  </Row>
                )}
              </p>
              <p className={`mb-4`}>
                {eventData && eventData.Location && (
                  <Row>
                    <Col span={6} className={`${styles.event_details_heading}`}>
                      {`Location`}
                    </Col>
                    <Col span={1} className={`${styles.event_details_heading}`}>
                      {`:`}
                    </Col>
                    <Col span={17} className={`${styles.event_details_value}`}>
                      {eventData.Location}
                    </Col>
                  </Row>
                )}
              </p>
              {eventData && (
                <p className={`${styles.event_details_des} pr-4`}>
                  {eventData.Description}
                </p>
              )}
            </div>
            {/* <div className={`d-flex justify-content-center`}>
              <AppRoundedBtn
                text={eventData.RegistrationLink ? `Join Now` : `Register Now`}
                prefix={""}
                suffix={""}
                bg={"yellow"}
                outline={"none"}
                long={true}
                href={
                  eventData.RegistrationLink
                    ? eventData.RegistrationLink
                    : "none"
                }
                onClickHandler={
                  eventData.RegistrationLink
                    ? () => {}
                    : e => {
                        setEventRegistrationModal(true);
                      }
                }
                btnStyle={{ width: `210px`, height: "55px" }}
              />
            </div>
            <EventRegistrationModal
              setVisiblety={setEventRegistrationModal}
              visible={eventRegistrationModal}
            /> */}
          </Col>
          {/* For small screens */}
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={` px-5 `}>
              <h3 className={`${styles.event_details_title} mb-5`}>
                {eventData && eventData.Title}
              </h3>
              <p>
                {eventData && eventData.Author && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Organizer`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {eventData.Author}
                    </Col>
                  </Row>
                )}
              </p>
              <p>
                {eventData && eventData.StartDate && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Event Date`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {moment(eventData.StartDate).format("ddd, D MMMM YYYY")}
                    </Col>
                  </Row>
                )}
              </p>
              <p>
                {eventData && eventData.StartDate && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Time`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {moment(eventData.StartDate).format("h:mm a [onwards]")}
                    </Col>
                  </Row>
                )}
              </p>
              <p className={`mb-4`}>
                {eventData && eventData.Location && (
                  <Row>
                    <Col
                      xs={8}
                      sm={8}
                      md={6}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_heading}`}
                    >
                      {`Location`}
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
                      xs={15}
                      sm={15}
                      md={17}
                      lg={0}
                      xl={0}
                      className={`${styles.event_details_value}`}
                    >
                      {eventData.Location}
                    </Col>
                  </Row>
                )}
              </p>
              {eventData && (
                <p className={`${styles.event_details_des} pr-4`}>
                  {eventData.Description}
                </p>
              )}
            </div>
            {/* <div className={`d-flex justify-content-center mb-5`}>
              <AppRoundedBtn
                text={`Register Now`}
                prefix={""}
                suffix={""}
                bg={"yellow"}
                outline={"none"}
                long={true}
                href={"none"}
                onClickHandler={e => {
                  setEventRegistrationModal(true);
                }}
                btnStyle={{ width: `210px`, height: "55px" }}
              />
            </div>
            <EventRegistrationModal
              title={`Event Registration`}
              setVisiblety={setEventRegistrationModal}
              visible={eventRegistrationModal}
            /> */}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={14}
            xl={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className={`${styles.event_details_image_box} mb-5`}>
              <AppSlider
                showIndicators={false}
                autoPlay={true}
                setAutoPlay={() => {}}
                stopOnHover={false}
              >
                {eventData &&
                  eventData.Image.map(image =>
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
              {eventData &&
                eventData.Image.slice(0, 4).map(image => (
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
