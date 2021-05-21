import { useEffect, useState } from "react";
//component
import Layout from "../../container/layout/Layout";
import Banner from "../../components/landing/banner/Banner";
import ServicesActivities from "../../components/landing/servicesActivities/ServicesActivities";
import NewsPublications from "../../components/landing/newsPublications/NewsPublications";
import UpcomingEvents from "../../components/landing/upcomingEvents/UpcomingEvents";
import Testimonials from "../../components/landing/testimonials/Testimonials";
import ContactUsSection from "../../components/landing/contactUsSection/ContactUsSection";
import Gallery from "../../components/landing/gallery/Gallery";
import VideoSection from "../../common_components/videoSection/VideoSection";
import Calendar from "../../components/landing/calendar/Calendar";

//css
import styles from "./landing.module.sass";

export default function Landing({
  news,
  bannerData,
  eventsData,
  servicesActivities,
  socialMediaIcon,
  testimonialsData,
  siteVideos,
  footerLink,
  gallery,
  galleryDetails,
}) {
  // let videoArray = siteVideos.sort(
  //   (a, b) =>
  //     new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  // );
  // console.log('videoArray',videoArray);
  // const [galleryContent, setGallerycontent] = useState([])

  // useEffect(() => {

  //   let galleryArray = []
  //   galleryArray = gallery.sort(
  //     (a, b) =>
  //       new Date(b.EventOccurDate).getTime() - new Date(a.EventOccurDate).getTime()
  //   );
  //   if (galleryArray && galleryArray.length > 0) {
  //     galleryArray = galleryArray.slice(0, 3)
  //   }

  //   let temp = galleryDetails.filter(data =>
  //     galleryArray.find(event => event.id.toString() === data.EventId)
  //   )
  //   let temp2 = temp.filter(data =>
  //     data.ContentType !== "Document"
  //   )
  //   setGallerycontent(temp2)

  // }, [gallery])

  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} footerLink={footerLink}>
        {bannerData && bannerData.length > 0 && (
          <Banner bannerData={bannerData} />
        )}
        {/* {servicesActivities && servicesActivities.length > 0 && (
          <ServicesActivities servicesActivities={servicesActivities} />
        )} */}
        {/* {videoArray && videoArray[0] && <VideoSection video={videoArray[0]} />} */}
        <div
          className={`${styles.new_testimonial_bg}`}
          style={{
            backgroundImage: `url(/background/newsTestimoni.svg)`,
          }}
        >
          {news && news.length > 0 && <NewsPublications newsData={news} />}
          {testimonialsData && testimonialsData.length > 0 && (
            <Testimonials testimonialsData={testimonialsData} />
          )}
        </div>
        <Calendar eventsData={eventsData} />
        {eventsData && eventsData.length > 0 && (
          <UpcomingEvents eventsData={eventsData} />
        )}

        {/* {galleryContent && galleryContent.length > 0 && (
          <Gallery galleryContent={galleryContent} />
        )} */}
        <ContactUsSection />
      </Layout>
    </>
  );
}
