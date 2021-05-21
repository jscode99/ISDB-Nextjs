//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import NewsIntroSection from "../../components/newsPublications/newsIntroSection/NewsIntroSection";
import Slider from "../../components/newsPublications/slider/Slider";
import PublicationsSection from "../../components/newsPublications/publicationsSection/PublicationsSection";
import NewsSection from "../../components/newsPublications/newsSection/NewsSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
//css
import styles from "./news-publications.module.sass";
const items = [];

function setSliderData(news) {
  news.forEach((newsObject, i) => {
    items.push(
      <div data-value={i.toString()}>
        <NewsIntroSection
          news={newsObject}
          section={"intro"}
          imageWidth={"350"}
          imageHeight={"430"}
        />
      </div>,
    );
  });
}

export default function NewsPublications({
  news,
  socialMediaIcon,
  footerLink,
}) {
  setSliderData(news);
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
          <InnerPageTitleSection title={"News"} />
          {/* <Slider items={items} news={news} /> */}
        </div>
        {/* <PublicationsSection news={news} /> */}
        <NewsSection news={news} />
      </Layout>
    </>
  );
}
