import Image from "next/image";
import { Row, Col } from "antd";
//component
import MultiImageView from "../../../common_components/multiImageView/MultiImageView";
import AppSlider from "../../../common_components/appSlider/AppSlider";
//css
import styles from "./staff-social-club.module.sass";
function getFinalData(data) {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(data);
  }
  return result;
}

export default function StaffSocialClub({ sscMemberData }) {
  // console.log("====================================");
  // console.log(sscMemberData);
  // console.log("====================================");
  return (
    <div
      className={`${styles.ssc_bg}`}
      style={{
        backgroundImage: `url(/aboutUs/sscbg.svg)`,
      }}
    >
      {/* For small screens */}
      <Row>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <h3 className={`${styles.mission_title} pl-2 pl-2 mt-4 mb-5`}>
              Meet Our Staff Social Club (SSC) Executive Team
            </h3>
          </Col>
          <AppSlider
            showIndicators={false}
            autoPlay={true}
            setAutoPlay={() => {}}
            stopOnHover={false}
            // fade={true}
            swipeable={false}
          >
            {sscMemberData &&
              sscMemberData.map(img => (
                <>
                  <Image
                    src={`${process.env.BASE_URL}${img.Image[0].url}`}
                    alt="Image"
                    width="250"
                    height="250"
                  />
                  <h5 className={`${styles.member_name} mt-3`}>{img.Name}</h5>
                  <p className={`${styles.member_degisnation}`}>
                    {img.Designation}
                  </p>
                </>
              ))}
          </AppSlider>
        </Col>
      </Row>
      {/* For large screen */}
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <MultiImageView
            title={`Meet Our Staff Social Club (SSC) Executive Team`}
            subTitle={`The SSC Executive Team shall comprise of a Chairperson, Deputy Chairperson, Treasurer and Members. It will be supported by a full-time coordinator`}
            finalData={sscMemberData}
            page={`ssc`}
          />
        </Col>
      </Row>
    </div>
  );
}
