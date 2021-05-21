import { Row, Col } from "antd";
//component
import ResponsiveView from "./ResponsiveView";
import AppSlider from "../../../common_components/appSlider/AppSlider";
// css
import styles from "./testimonials.module.sass";

export default function Testimonials({ testimonialsData }) {
  return (
    <div className={`${styles.testimonial_bg}`}>
      <AppSlider
        btnIcon={`/context/slider_btn_icon_dark.svg`}
        showIndicators={false}
        autoPlay={true}
        setAutoPlay={() => {}}
        stopOnHover={true}
      >
        {testimonialsData.map((data) => (
          <Row>
            <Col xs={0} sm={0} md={0} lg={24} xl={24}>
              <ResponsiveView view={"desktop"} testimonialsData={data} />
            </Col>
            <Col xs={0} sm={0} md={24} lg={0} xl={0}>
              <ResponsiveView view={"tablet"} testimonialsData={data} />
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <ResponsiveView view={"mobile"} testimonialsData={data} />
            </Col>
          </Row>
        ))}
      </AppSlider>
    </div>
  );
}
