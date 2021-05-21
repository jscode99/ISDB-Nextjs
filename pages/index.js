//component
import Landing from "../container/landing/Landing";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function Home({
  news,
  bannerData,
  eventsData,
  socialMediaIcon,
  servicesActivities,
  testimonialsData,
  siteVideos,
  footerLink,
  gallery,
  galleryDetails,
}) {
  return (
    <>
      <Landing
        news={news}
        bannerData={bannerData}
        eventsData={eventsData}
        servicesActivities={servicesActivities}
        socialMediaIcon={socialMediaIcon}
        testimonialsData={testimonialsData}
        siteVideos={siteVideos}
        footerLink={footerLink}
        gallery={gallery}
        galleryDetails={galleryDetails}
      />
    </>
  );
}

export async function getStaticProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let bannerUrl = process.env.BASE_URL + process.env.PATH.BANNER;
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let testimonialsUrl = process.env.BASE_URL + process.env.PATH.TESTIMONIS;
  let siteVideosUrl = process.env.BASE_URL + process.env.PATH.SITEVIDEOS;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;
  // let galleryUrl = process.env.BASE_URL + process.env.PATH.GALLERY_EVENTS;
  // let galleryDeatilsUrl = process.env.BASE_URL + process.env.PATH.GALLERY_DETAILS;

  const [
    news,
    bannerData,
    eventsData,
    socialMediaIcon,
    servicesActivities,
    testimonialsData,
    siteVideos,
    footerLink,
    // gallery,
    // galleryDetails,
  ] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(bannerUrl, CONST.API_METHOD.GET),
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
    await fetchService(testimonialsUrl, CONST.API_METHOD.GET),
    await fetchService(siteVideosUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
    // await fetchService(galleryUrl, CONST.API_METHOD.GET),
    // await fetchService(galleryDeatilsUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      bannerData,
      eventsData,
      socialMediaIcon,
      servicesActivities,
      testimonialsData,
      siteVideos,
      footerLink,
      // gallery,
      // galleryDetails
    },
  };
}
