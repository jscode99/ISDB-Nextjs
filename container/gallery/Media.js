// Common Components
import Layout from "../layout/Layout";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
// Component
import GalleryInnerPageSection from "../../components/gallery/galleryInnerPage/galleryInnerPageSection/GalleryInnerPageSection";
//css
import styles from "./media.module.sass";

export default function Media({ socialMediaIcon, eventData, titleData,footerLink }) {
  // console.log("============EVENTS DATA========================");
  // console.log(eventData);
  // console.log("============EVENTS DATA========================");
  // console.log("============TITLE DATA========================");
  // console.log(titleData);
  // console.log("============TITLE DATA========================");
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} footerLink={footerLink}>
        <div className={`position-relative`}>
          <div className={`${styles.bg_color}`}></div>
          <div
            className={`${styles.bg_pattern}`}
            style={{
              backgroundImage: `url(/hero.svg),url(/gallery/gallery.svg)`,
            }}
          ></div>
          <InnerPageTitleSection title={"Media Gallery"} />
          <GalleryInnerPageSection
            eventData={eventData}
            titleData={titleData}
          />
        </div>
      </Layout>
    </>
  );
}
