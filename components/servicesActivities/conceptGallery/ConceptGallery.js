import Image from "next/image";
import { Col, Row } from "antd";
//Component
import MultiImageView from "../../../common_components/multiImageView/MultiImageView";
import AppSlider from "../../../common_components/appSlider/AppSlider";
//css
import styles from "./concept-gallery.module.sass";

export default function ConpceptGallery({ galleryTitle, finalData }) {
  console.log("====================================");
  console.log(finalData);
  console.log("====================================");
  return (
    <div
      className={`${styles.gallery_bg}`}
      style={{
        backgroundImage: `url(/serviceActivities/pinkRec.svg)`,
      }}
    >
      <Row>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <h3
              className={`${styles.miv_title}`}
            >{`${galleryTitle} Concept Gallery`}</h3>
          </Col>
          <div className={`mt-05`}>
            <AppSlider
              showIndicators={false}
              autoPlay={true}
              setAutoPlay={() => {}}
              stopOnHover={false}
              // fade={true}
              swipeable={false}
            >
              {finalData &&
                finalData.map(img => (
                  <>
                    <Col
                      className={`d-flex align-items-center flex-column mt-5`}
                    >
                      <div className={`${styles.miv_image_box} mb-5`}>
                        <Image
                          src={`${process.env.BASE_URL}${img.url}`}
                          alt={img.hash}
                          width="250"
                          height="250"
                        />
                      </div>
                    </Col>
                  </>
                ))}
            </AppSlider>
          </div>
        </Col>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <MultiImageView
            title={`${galleryTitle} Concept Gallery`}
            subTitle={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`}
            finalData={finalData}
            page={`serviceActivities`}
          />
        </Col>
      </Row>
    </div>
  );
}
