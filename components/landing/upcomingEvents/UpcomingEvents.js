import React, { useState, useEffect } from "react";
import { Row } from "antd";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
import EventsCard from "../../../common_components/eventsCard/EventsCard";
//service
import { setBackground } from "../../../services/eventService";
//css
import styles from "./upcoming-events.module.sass";

const responsive = {
  0: { items: 1 },
  568: { items: 2.25 },
  1000: { items: 3.25 },
  1024: { items: 4.5 },
  1440: { items: 9 },
};

const items = [];

function setItem(data) {
  data.forEach((item, i) => {
    let [bg, bgImage, boxShadow] = setBackground(item);
    items.push(
      <div
        className={`item my-4 ${styles.event_card_container}`}
        data-value={i.toString}
      >
        <EventsCard
          data={item}
          bg={bg}
          bgImage={bgImage}
          boxShadow={boxShadow}
          btn={true}
        />
      </div>
    );
  });
}

export default function UpcomingEvents({ eventsData }) {
  // console.log("============eventsData===========>",eventsData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderFinalIndex, setSliderFinalIndex] = useState(3);
  const [prevBtn, setPrevBtn] = useState("disable");
  const [nextBtn, setNextBtn] = useState("enable");
  //upcomming events
  let upcommingEventsData = eventsData.filter(
    (eventData) =>
      new Date(eventData.EventStart).getTime() > new Date().getTime()
  );
  let finalIndex = parseInt(upcommingEventsData.length);

  useEffect(() => {
    if (window.innerWidth < 1440 && window.innerWidth > 1024)
      setSliderFinalIndex(3);

    if (window.innerWidth <= 1024 && window.innerWidth >= 768)
      setSliderFinalIndex(2);

    if (window.innerWidth < 768) setSliderFinalIndex(2);
  }, []);

  useEffect(() => {
    if (activeIndex === 0) setPrevBtn("disable");
    else setPrevBtn("enable");
    if (activeIndex === finalIndex - sliderFinalIndex) setNextBtn("disable");
    else setNextBtn("enable");
  }, [activeIndex]);

  setItem(upcommingEventsData);

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    if (activeIndex < finalIndex - sliderFinalIndex)
      setActiveIndex(activeIndex + 1);
  };

  const onSlideChanged = ({ item }) => setActiveIndex(item);

  return (
    upcommingEventsData &&
    upcommingEventsData.length > 0 && (
      <Row className={`pt-5`}>
        <div className={`${styles.events_container}`}>
          <CommonSectionHeader
            title={"Upcoming Events & Activities"}
            sliderSection={true}
            prevBtn={prevBtn}
            nextBtn={nextBtn}
            onClickPrev={slidePrev}
            onClickNext={slideNext}
          />
        </div>
        <AppMultiSlider
          responsive={responsive}
          items={items}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
          paddingLeft={100}
          paddingRight={50}
          animationType={"slide"}
          disableDotsControls={true}
        />
      </Row>
    )
  );
}
