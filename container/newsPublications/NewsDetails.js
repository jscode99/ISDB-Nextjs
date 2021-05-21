//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import NewsDetailsIntro from "../../components/newsPubDetails/newsDetailsIntro/NewsDetailsIntro";
import AllNews from "../../components/newsPubDetails/allNews/AllNews";
//css
import styles from "./news-details.module.sass";

export default function NewsDetails({
  newsDetails,
  news,
  socialMediaIcon,
  footerLink,
}) {
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
          <InnerPageTitleSection title={"News Details"} />
          <NewsDetailsIntro newsDetails={newsDetails} />
        </div>
        <AllNews news={news} />
      </Layout>
    </>
  );
}
