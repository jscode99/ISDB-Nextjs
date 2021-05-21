import Image from "next/image";
import { Row, Col } from "antd";
// Css
import styles from "./gaming-card.module.sass";
// LIB
import moment from "moment";

// Components
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";

export default function GamingCard({ cardData }) {
  //process.env.BASE_URL +
  return (
    <div className={`${styles.gaming_card}`}>
      <div className={`${styles.gaming_card_image}`}>
        <Image
          src={process.env.BASE_URL + cardData.Image[0].url}
          alt="card-img"
          layout={`fill`}
        />
      </div>
      <div className={`${styles.text_container_game}`}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <div className={`${styles.gaming_card_text} px-4 pt-4 mb-2`}>
              <h3 className={`mb-3`}>{cardData.Title}</h3>
              <p className={`mb-3`}>
                {moment(cardData.Date).format("D MMM YYYY")}
              </p>
              <p>
                Hosted by :{"  "}
                <span className={`${styles.gaming_class_span}`}>
                  KAFU Games
                </span>
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={`${styles.gaming_card_text} px-4 pt-4`}>
              <h3 className={`mb-3`}>{cardData.Title}</h3>
              <p className={`mb-3`}>
                {moment(cardData.Date).format("D MMM YYYY")}
              </p>
              <p>
                <Row>
                  <Col xs={8} sm={8} md={12} lg={12} xl={12}>
                    Hosted by :
                  </Col>
                  <Col xs={8} sm={8} md={12} lg={12} xl={12}>
                    <span className={`${styles.gaming_class_span}`}>
                      KAFU Games
                    </span>
                  </Col>
                </Row>
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Row className={`w-100`}>
        {/* <Col xs={0} sm={0} md={0} lg={12} xl={12}>
          <div
            className={`d-flex justify-content-center align-items-center h-100`}
          >
            <p className={`${styles.gaming_registered} m-0`}>
              {`${cardData.registered} Registered`}
            </p>
          </div>
        </Col> */}
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div
            className={`d-flex justify-content-center align-items-center h-100 py-4`}
          >
            <AppRoundedBtn
              text={"Register Now"}
              prefix={""}
              suffix={""}
              bg={"yellow"}
              outline={"none"}
              long={false}
              href={cardData.Link}
              onClickHandler={() => {}}
            />
          </div>
        </Col>
        {/* <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <div
            className={`d-flex justify-content-center align-items-center h-100`}
          >
            <p className={`${styles.gaming_registered} m-0`}>
              {`${cardData.registered} Registered`}
            </p>
          </div>
        </Col> */}
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <div
            className={`d-flex justify-content-center align-items-center h-100 py-4`}
          >
            <AppRoundedBtn
              text={"Register Now"}
              prefix={""}
              suffix={""}
              bg={"yellow"}
              outline={"none"}
              long={false}
              href={cardData.Link}
              onClickHandler={() => {}}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
