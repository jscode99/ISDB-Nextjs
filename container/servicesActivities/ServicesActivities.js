//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import ServicesActivitiesIntro from "../../components/servicesActivities/servicesActivitiesIntro/ServicesActivitiesIntro";
import VideoSection from "../../common_components/videoSection/VideoSection";
//css
import styles from "./services-activities.module.sass";

export default function ServicesActivities({
  socialMediaIcon,
  cardsData,
  siteVideos,
  footerLink,
}) {
  let videoArray = siteVideos.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
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
          <ServicesActivitiesIntro cardsData={cardsData} />
        </div>
        {videoArray && videoArray[0] && <VideoSection video={videoArray[0]} />}
      </Layout>
    </>
  );
}
