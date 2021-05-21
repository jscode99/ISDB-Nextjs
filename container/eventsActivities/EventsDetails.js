//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
import EventDetailsIntro from "../../components/eventDetails/eventDetailsIntro/EventDetailsIntro";
import RecentEventActivities from "../../components/eventDetails/recentEventActivities/RecentEventActivities";
//css
import styles from "./events-details.module.sass";

export default function EventsDetails({
  socialMediaIcon,
  eventData,
  eventsData,
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
          <InnerPageTitleSection title={"Event Details"} />
          <EventDetailsIntro eventData={eventData} />
        </div>
        <RecentEventActivities eventsData={eventsData} />
      </Layout>
    </>
  );
}
