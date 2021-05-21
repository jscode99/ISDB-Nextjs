// Common Components
import Layout from "../layout/Layout";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";

// Components
import GalleryBannerImage from "../../components/gallery/gallertBannerPage/galleryBanner/GalleryBannerImage";
import GallerySection from "../../components/gallery/gallertBannerPage/gallerySection/GallerySection";
//css
import styles from "./gallery.module.sass";

export default function GalleryPage({ eventsData, socialMediaIcon,footerLink }) {
  // console.log("===", eventsData);
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} footerLink={footerLink}>
        <div
          className={`${styles.gallery_bg}`}
          style={{
            backgroundImage: `url(/hero.svg)`,
          }}
        >
          <InnerPageTitleSection title={"Media Gallery"} />
          <GalleryBannerImage />
        </div>
        <GallerySection eventsData={eventsData} />
      </Layout>
    </>
  );
}
