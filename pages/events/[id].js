//component
import EventsDetails from "../../container/eventsActivities/EventsDetails";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function ServiceTypes({
  eventData,
  eventsData,
  socialMediaIcon,
  footerLink,
}) {
  return (
    <EventsDetails
      eventData={eventData}
      eventsData={eventsData}
      socialMediaIcon={socialMediaIcon}
      footerLinkUrl={footerLink}
    />
  );
}

export async function getStaticPaths() {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;

  const [eventsData] = await Promise.all([
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
  ]);

  const paths = eventsData.map(eventData => {
    return {
      params: {
        id: eventData.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [eventsData, socialMediaIcon, footerLink] = await Promise.all([
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);
  const id = context.params.id;
  const eventData = eventsData.find(
    eventData => eventData.id.toString() === id,
  );

  if (!eventData) {
    return {
      redirect: {
        destination: "/events",
        permanent: false,
      },
    };
  }

  return {
    props: {
      eventData,
      eventsData,
      socialMediaIcon,
      footerLink,
    },
    revalidate: 1,
  };
}
