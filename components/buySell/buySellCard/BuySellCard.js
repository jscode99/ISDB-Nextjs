import { Row, Col, Button } from "antd";
import Image from "next/image";
import ViewAdModal from "../../../common_components/appModal/viewAdModal/ViewAdModal";
import { useState } from "react";

//css
import styles from "./buy-sell.module.sass";
//Library
import moment from "moment";

export default function BuySellCard({ cardData }) {
  //process.env.BASE_URL +
  const [viewAdModal, setViewAdModal] = useState(false);
  const [eventId, setEventId] = useState("");
  return (
    <>
      <div className={`${styles.buysell_card} my-2`}>
        <div className={`${styles.buysell_mainImgConatiner}`}>
          <Image src={cardData.image[0]} alt="card-img" layout={`fill`} />
          {/* <img src={"/entertainment/card.png"} className={`${styles.buysell_card_image}`}></img> */}
        </div>
        <div className={"pl-3 pr-3"}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className={`${styles.buysell_text} p-2`}>
                {cardData.title}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div
                className={`${styles.buysell_card_text} pl-2 pr-2 pt-2 pb-1`}
              >
                {cardData.data}
              </div>
            </Col>
          </Row>
          <Row className={"pr-2 pl-2 "}>
            <Col
              xs={5}
              sm={5}
              md={5}
              lg={5}
              xl={5}
              className={`${styles.buysell_PriceText}`}
            >
              {"Price"}
            </Col>
            <Col
              xs={19}
              sm={19}
              md={19}
              lg={19}
              xl={19}
              className={`${styles.buysell_price}`}
            >
              {cardData.price}
            </Col>
          </Row>
          <Row className={"pr-2 pl-2 p-1"}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className={`${styles.buysell_PriceText}`}>Posted By :</div>
            </Col>
          </Row>
          <Row className={"pr-2 pl-2 p-1"}>
            <Col
              xs={5}
              sm={5}
              md={5}
              lg={5}
              xl={5}
              className={`${styles.buysell_card_bottomimage_container}`}
            >
              <Image
                src={cardData.userImage}
                alt="card-img"
                layout={`fill`}
                className={`${styles.buysell_card_bottomimage_round}`}
              />
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} xl={14}>
              <Row>
                <Col className={`${styles.buysell_card_username}`}>
                  {cardData.username}
                </Col>
              </Row>
              <Row>
                <Col className={`${styles.buysell_card_date}`}>
                  {moment(cardData.date).format("D MMM YYYY")}
                </Col>
              </Row>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
              <Button
                onClick={e => {
                  console.log("Hi");
                  setViewAdModal(true);
                }}
                className={`${styles.buysell_linkBtn} `}
                icon={
                  <i className={`fa fa-external-link `} aria-hidden="true"></i>
                }
              ></Button>
            </Col>
          </Row>
        </div>
      </div>
      <ViewAdModal
        setVisiblety={setViewAdModal}
        //setVisiblety={true}
        visible={viewAdModal}
        //visible={true}
        eventId={eventId}
        cardData={cardData}
      />
    </>
  );
}
