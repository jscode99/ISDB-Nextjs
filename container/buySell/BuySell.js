//component
import Layout from "../layout/Layout";
import BuysellSection from "../../components/buySell/buySellSection/BuysellSection";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection"
//css
import styles from "./buy-sell.module.sass";

export default function BuySell({ socialMediaIcon,footerLink }) {
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
          <InnerPageTitleSection title={"Buy & Sell"} />
          <BuysellSection />
        </div>
      </Layout>
    </>
  );
}
