import React from "react";
//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import EventsIntroSection from "../../components/eventsActivities/eventsIntroSection/EventsIntroSection";
import AllEventsActivities from "../../components/eventsActivities/allEventsActivities/AllEventsActivities";
import Slider from "../../components/eventsActivities/slider/Slider";
import CommonInnerPagesTitleBg from "../../common_components/commonInnerPagesTitleBg/CommonInnerPagesTitleBg";
//services
import { setBackground } from "../../services/eventService";
//css
import styles from "./events-activities.module.sass";

const items = [];

function setSliderData(eventsData) {
  let title = "Upcoming Events";
  let filteredEventsData = eventsData.filter(
    eventData => new Date(eventData.StartDate).getTime() > new Date().getTime(),
  );
  if (filteredEventsData && filteredEventsData.length === 0) {
    title = "Recent Events";
    filteredEventsData = eventsData.filter(
      eventData =>
        new Date(eventData.StartDate).getTime() <= new Date().getTime() &&
        new Date(eventData.EndDate).getTime() >= new Date().getTime(),
    );
  }
  if (filteredEventsData && filteredEventsData.length === 0) {
    title = "Past Events";
    filteredEventsData = eventsData.filter(
      eventData => new Date(eventData.EndDate).getTime() < new Date().getTime(),
    );
  }

  console.log("--->", filteredEventsData);
  filteredEventsData.forEach((event, i) => {
    let [bg, bgImage, boxShadow] = setBackground(event);
    items.push(
      <div data-value={i.toString()}>
        <EventsIntroSection
          title={title}
          event={event}
          bg={bg}
          bgImage={bgImage}
          boxShadow={boxShadow}
        />
      </div>,
    );
  });
}

export default function EventsActivities({
  eventsData,
  socialMediaIcon,
  footerLink,
}) {
  setSliderData(eventsData);
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
          <InnerPageTitleSection title={"events & activities"} />
          <Slider items={items} eventsData={eventsData} />
        </div>
        <AllEventsActivities eventsData={eventsData} />
      </Layout>
    </>
  );
}
