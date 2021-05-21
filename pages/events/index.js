//component
import EventsActivities from "../../container/eventsActivities/EventsActivities";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function EventsActivitiesPage({
  eventsData,
  socialMediaIcon,
  footerLink,
}) {
  return (
    <>
      <EventsActivities
        eventsData={eventsData}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
    </>
  );
}

export async function getStaticProps() {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [eventsData, socialMediaIcon, footerLink, contactUsData] =
    await Promise.all([
      await fetchService(eventsUrl, CONST.API_METHOD.GET),
      await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
      await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
    ]);

  return {
    props: {
      eventsData,
      socialMediaIcon,
      footerLink,
    },
  };
}
