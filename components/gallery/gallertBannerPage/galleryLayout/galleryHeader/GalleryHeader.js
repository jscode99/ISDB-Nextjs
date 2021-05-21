import { useState } from "react";
import { Row, Col } from "antd";
// Components
import DropDown from "../../../../../common_components/formElement/Dropdown";
import DatePicker from "../../../../../common_components/formElement/DatePicker";
// CSS
import styles from "./gallery-header.module.sass";

function setSelectedCategory(value, category, setCategory) {
  setCategory(category[value]);
}

export default function GalleryHeader({
  toDate,
  setToDate,
  fromDate,
  setFromDate,
  selectedcategory,
  setCategory,
}) {
  const category = {
    All: "all",
    "Wellbeing Awareness": "WellbeingAwareness",
    "Family & Social": "FamilySocial",
    "Virtual Sports & Recreational": "VirtualSportsRecreational",
    "Religious Activities": "ReligiousActivities",
    "Entertainment & Online Games": "EntertainmentOnlineGames",
    "Educational Activities": "EducationalCourses",
  };
  return (
    <Row className={`mb-5`}>
      <Col xs={24} sm={24} md={9} lg={9} xl={9}>
        <h3
          className={`${styles.gallery_header_title} m-0 h-100 d-flex align-items-center`}
        >
          Multimedia Media Library
        </h3>
      </Col>
      <Col className={`px-2`} xs={8} sm={8} md={5} lg={5} xl={5}>
        <DatePicker
          label={`Date(From)`}
          mandatory={false}
          placeholder={`Select`}
          error={null}
          style={{ width: "100%", height: "45px" }}
          labelLite={true}
          thickBorder={true}
          value={fromDate}
          onChange={(e) => {
            console.log(new Date(e));
            setFromDate(e);
            setToDate(e);
          }}
        />
      </Col>
      <Col className={`px-2`} xs={8} sm={8} md={5} lg={5} xl={5}>
        <DatePicker
          label={`Date(To)`}
          mandatory={false}
          placeholder={`Select`}
          error={null}
          style={{ width: "100%", height: "45px" }}
          labelLite={true}
          thickBorder={true}
          value={toDate}
          onChange={(e) => {
            setToDate(e);
          }}
        />
      </Col>
      <Col className={`px-2`} xs={8} sm={8} md={5} lg={5} xl={5}>
        <DropDown
          label={`Category`}
          mandatory={false}
          placeholder={`Select`}
          options={Object.keys(category)}
          error={null}
          style={{ width: "100%", height: "45px" }}
          labelLite={true}
          thickBorder={true}
          onChange={(value) =>
            setSelectedCategory(value, category, setCategory)
          }
        />
      </Col>
    </Row>
  );
}
