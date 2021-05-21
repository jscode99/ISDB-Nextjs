//component
import ServicesActivitiesType from "../../container/servicesActivities/ServicesActivitiesType";
//service
import { fetchService } from "../../services/fetchService";
import {
  mapTypeToRoutePath,
  mapRoutePathToType,
} from "../../services/serviceActivitieService";
//constant
import { CONST } from "../../constant";

export default function ServiceTypes({
  path,
  eventsData,
  socialMediaIcon,
  serviceActivity,
  footerLink,
}) {
  return (
    <ServicesActivitiesType
      socialMediaIcon={socialMediaIcon}
      eventsData={eventsData}
      serviceActivity={serviceActivity}
      path={path}
      footerLink={footerLink}
    />
  );
}

export async function getStaticPaths() {
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;

  const [servicesActivities] = await Promise.all([
    await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
  ]);

  const paths = servicesActivities.map((serviceActivity) => {
    return {
      params: {
        type: mapTypeToRoutePath(serviceActivity.Type),
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
  let servicesActivitiesUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;
  let footerLinkUrl =
    process.env.BASE_URL + process.env.PATH.SERVICES_ACTIVITIES;

  const [eventsData, socialMediaIcon, servicesActivities, footerLink] =
    await Promise.all([
      await fetchService(eventsUrl, CONST.API_METHOD.GET),
      await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
      await fetchService(servicesActivitiesUrl, CONST.API_METHOD.GET),
      await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
    ]);

  const path = context.params.type;
  const serviceActivity = servicesActivities.find(
    (serviceActivity) =>
      serviceActivity.Type.toString() === mapRoutePathToType(path)
  );

  if (!serviceActivity) {
    return {
      redirect: {
        destination: "/services-activities",
        permanent: false,
      },
    };
  }

  return {
    props: {
      path,
      eventsData,
      socialMediaIcon,
      serviceActivity,
      footerLink,
    },
    revalidate: 1,
  };
}
