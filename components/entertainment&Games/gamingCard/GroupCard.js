import Image from "next/image";
import { Row, Col } from "antd";
// Css
import styles from "./gaming-card.module.sass";

// Components
import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";

export default function GroupCard({ groupData }) {
  //process.env.BASE_URL +
  return (
    <div className={`${styles.gaming_card}`}>
      <div className={`${styles.gaming_card_image}`}>
        <Image
          src={process.env.BASE_URL + groupData.Image[0].url}
          alt="card-img"
          layout={`fill`}
        />
      </div>
      <div className={`${styles.text_container}`}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <div className={`${styles.gaming_card_text} px-4 pt-4 mb-2`}>
              <h3 className={`mb-3`}>{groupData.Title}</h3>
              {/* <p
                className={`${styles.gaming_class_span}`}
              >{`${groupData.members} Members`}</p> */}
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className={`${styles.gaming_card_text} px-4 pt-4`}>
              <h3 className={`mb-2`}>{groupData.Title}</h3>
              {/* <p
                className={`${styles.gaming_class_span}`}
              >{`${groupData.members} Members`}</p> */}
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={24}>
          <div
            className={`d-flex justify-content-center align-items-center h-100 py-4`}
          >
            <AppRoundedBtn
              text={"Join Now"}
              prefix={""}
              suffix={""}
              bg={"yellow"}
              outline={"none"}
              long={true}
              href={groupData.Link}
              onClickHandler={() => {}}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
