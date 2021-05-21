//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import AboutUsIntroSection from "../../components/aboutUs/aboutUsIntroSection/AboutUsIntroSection";
import OurObjectiveSection from "../../components/aboutUs/ourMission/OurObjective";
import StaffSocialClub from "../../components/aboutUs/staffSocialClub/StaffSocialClub";
import VideoSection from "../../common_components/videoSection/VideoSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import ExeTeamStructure from "../../components/aboutUs/exeTeamStructure/ExeTeamStructure";
//css
import styles from "./about-us.module.sass";

export default function AboutUs({
  socialMediaIcon,
  sscMemberData,
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
          <InnerPageTitleSection title={"about us"} />
          <AboutUsIntroSection />
        </div>
        <OurObjectiveSection />
        <StaffSocialClub sscMemberData={sscMemberData} />
        <ExeTeamStructure />
        {videoArray && videoArray[0] && <VideoSection video={videoArray[0]} />}
      </Layout>
    </>
  );
}
