//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import ServicesActivitiesTypeIntro from "../../components/servicesActivities/servicesActivitiesTypeIntro/ServicesActivitiesTypeIntro";
import ConceptGallery from "../../components/servicesActivities/conceptGallery/ConceptGallery";
import RelatedEvents from "../../components/servicesActivities/relatedEvents/RelatedEvents";
//css
import styles from "./services-activities-type.module.sass";

function getFinalData(data) {
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(data);
  }
  return result;
}

export default function ServicesActivitiesType({
  socialMediaIcon,
  eventsData,
  serviceActivity,
  path,
  footerLink
}) {
  // let data = {
  //   image: "/testimonial.PNG",
  //   name: "Br. Abdurrahman York1",
  //   degisnation: "Member, IsDB",
  // };
  // let finalData = getFinalData(data);
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} footerLink={footerLink}>
        <div className={`position-relative`}>
          <div className={`${styles.bg_color}`}></div>
          <div
            className={`${styles.bg_pattern}`}
            style={{
              backgroundImage: `url(/hero.svg),url(/Dotted-line-path-301.svg)`,
            }}
          ></div>
          <InnerPageTitleSection title={"Services & Activities"} />
          <ServicesActivitiesTypeIntro serviceActivity={serviceActivity} />
        </div>
        <ConceptGallery
          galleryTitle={serviceActivity.Title}
          finalData={serviceActivity.Image}
        />
        <RelatedEvents
          title={serviceActivity.Title}
          eventsData={eventsData}
          path={path}
        />
      </Layout>
    </>
  );
}
