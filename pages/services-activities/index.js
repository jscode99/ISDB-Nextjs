//component
import ServicesActivities from "../../container/servicesActivities/ServicesActivities";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function ServicesActivitiesPage({
  socialMediaIcon,
  servicesActivities,
  siteVideos,
  footerLink,
}) {
  return (
    <ServicesActivities
      socialMediaIcon={socialMediaIcon}
      cardsData={servicesActivities}
      siteVideos={siteVideos}
      footerLink={footerLink}
    />
  );
}

export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let siteVideosUrl = process.env.BASE_URL + process.env.PATH.SITEVIDEOS;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.SITEVIDEOS;

  const [socialMediaIcon, servicesActivities, siteVideos, footerLink] = await Promise.all([
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
    await fetchService(siteVideosUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      socialMediaIcon,
      servicesActivities,
      siteVideos,
      footerLink,
    },
  };
}
