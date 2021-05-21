import { useState } from "react";
import Image from "next/image";
import { Row, Col, notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import useInView from "react-cool-inview";
//animation
import { slideInLeft, slideInUp } from "react-animations";
import { StyleSheet, css } from "aphrodite";
//component
import AppBtn from "../../../common_components/appBtn/AppBtn";
//service
import {
  subscribeChangeHandler,
  onClickSubscribeHandler,
} from "./localService";
//css
import styles from "./contact-us-section.module.sass";

const openErrorNotification = ({ title, description }) => {
  notification.error({
    message: title,
    description: description,
    onClose: () => {},
    icon: <WarningOutlined className={`text-danger`} />,
  });
};

const openSuccessNotification = ({ title, description }) => {
  notification.success({
    message: title,
    description: description,
    onClose: () => {},
    // icon: <WarningOutlined className={`text-danger`} />,
  });
};

const animationStyles = StyleSheet.create({
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "1.5s",
  },
  slideInUp: {
    animationName: slideInUp,
    animationDuration: "1.5s",
  },
});

export default function ContactUsSection() {
  const [validEmail, setEmailValidation] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target leaves the viewport
    },
    // More useful options...
  });

  return (
    <div className={`${styles.contact_us_section}`}>
      <div className={`${styles.second_layer}`}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div
              className={`${styles.contact_us_container} pt-5`}
              style={{
                backgroundImage: `url('/background/contactUs.svg')`,
              }}
            >
              <div className={`${styles.contact_us_subcontainer} pt-5`}>
                <h3 className={`${styles.contact_us_text} mb-4`}>Contact us</h3>
                <p className={`${styles.contact_us_para} mb-2`}>
                  We’d love to discuss how we can help your queries.
                </p>
                <p className={`${styles.contact_us_para}`}>
                  Contact us for any issues.
                </p>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={10} xl={10}>
                    <AppBtn
                      text={`Get in Touch`}
                      prefix={""}
                      suffix={""}
                      mode={"light"}
                      href={"/contact-us"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={14} xl={14}>
                    <div
                      className={`d-flex justify-content-center flex-column h-100 pl-3`}
                    >
                      <p className={`m-0 ${styles.contact_us_subtext_title}`}>
                        SSC@isdb.org
                      </p>
                      <p className={`m-0 ${styles.contact_us_subtext_des}`}>
                        Monday - Friday, 9am
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div
              className={`${styles.group_img_bg}`}
              style={{
                backgroundImage: `url('/background/contactImgSec.svg')`,
              }}
            >
              <h3 className={`${styles.group_img_title}`}>IsDB GROUP</h3>

              <div className={`${styles.group_img_container}`} ref={observe}>
                <div className={inView ? css(animationStyles.slideInLeft) : ""}>
                  <div className={`d-flex justify-content-center`}>
                    <Image
                      src={"/IsdbGroup/IsDB-Logo.svg"}
                      alt="groupLogo"
                      width={157}
                      height={155}
                    />
                  </div>
                </div>
                <div className={inView ? css(animationStyles.slideInUp) : ""}>
                  <div className={`d-flex justify-content-center`}>
                    <Image
                      src={"/IsdbGroup/ICIEC-Logo.svg"}
                      alt="groupLogo"
                      width={157}
                      height={155}
                    />
                    <Image
                      src={"/IsdbGroup/ICD-Logo.svg"}
                      alt="groupLogo"
                      width={157}
                      height={155}
                    />
                    <Image
                      src={"/IsdbGroup/Itfc-Logo.svg"}
                      alt="groupLogo"
                      width={157}
                      height={155}
                    />
                    <Image
                      src={"/IsdbGroup/IDBF-Logo.svg"}
                      alt="groupLogo"
                      width={157}
                      height={155}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles.first_layer}`}>
        <div
          className={`${styles.newsletter_container}`}
          style={{
            backgroundImage: `url('/background/newsletter.svg')`,
          }}
        >
          <h2 className={`${styles.newsletter_title}`}>Our Newsletter</h2>
          <div className={`${styles.newsletter_input_container}`}>
            <input
              placeholder="Email Address"
              value={emailValue}
              className={`form-control ${
                validEmail === 0 ? "" : validEmail ? "is-valid" : "is-invalid"
              }`}
              onChange={e =>
                subscribeChangeHandler(e, setEmailValidation, setEmailValue)
              }
            />
            <button
              onClick={() =>
                onClickSubscribeHandler(
                  emailValue,
                  setEmailValue,
                  setEmailValidation,
                  openErrorNotification,
                  openSuccessNotification,
                )
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
