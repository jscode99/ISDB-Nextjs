// Common Components
import Layout from "../layout/Layout";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";

// Components
import GamingBannerImage from "../../components/entertainment&Games/gamingBanner/GamingBannerImage";
import OnlineGames from "../../components/entertainment&Games/gamingCardSection/OnlineGames";
import Tournament from "../../components/entertainment&Games/gamingCardSection/Tournament";
import TopGroups from "../../components/entertainment&Games/gamingCardSection/TopGroups";
//css
import styles from "./entertainment.module.sass";

export default function Entertainment({
  socialMediaIcon,
  gameData,
  footerLink,
}) {
  let onlineGames = [];
  let groupData = [];
  let tournaments = [];

  onlineGames = gameData.filter(
    (data) => data.Category.toLowerCase() === "OnlineGames".toLowerCase()
  );
  groupData = gameData.filter(
    (data) => data.Category.toLowerCase() === "TopGroups".toLowerCase()
  );
  tournaments = gameData.filter(
    (data) => data.Category.toLowerCase() === "Tournaments".toLowerCase()
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
          <InnerPageTitleSection title={"Online Games"} />
          <GamingBannerImage />
          {onlineGames && onlineGames.length > 0 && (
            <OnlineGames cardData={onlineGames} />
          )}
        </div>
        <div
          className={`${styles.gamecard_section_bg}`}
          style={{
            backgroundImage: `url(/eventsActivities/allEventsSectionBg.svg)`,
          }}
        >
          {groupData && groupData.length > 0 && (
            <TopGroups groupData={groupData} />
          )}
          {tournaments && tournaments.length > 0 && (
            <Tournament cardData={tournaments} />
          )}
        </div>
      </Layout>
    </>
  );
}
