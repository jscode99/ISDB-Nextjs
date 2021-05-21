// Component
import MediaPage from "../../container/gallery/Media";
//service
import { fetchService } from "../../services/fetchService";
//CONSTANT
import { CONST } from "../../constant";

export default function Media({
  eventData,
  titleData,
  socialMediaIcon,
  footerLink,
}) {
  return (
    <>
      <MediaPage
        eventData={eventData}
        titleData={titleData}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
    </>
  );
}

// StaticPath
export async function getStaticPaths() {
  let eventsGalleryUrl =
    process.env.BASE_URL + process.env.PATH.GALLERY_DETAILS;

  const [eventsData] = await Promise.all([
    await fetchService(eventsGalleryUrl, CONST.API_METHOD.GET),
  ]);

  const paths = eventsData.map((eventData) => {
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

// StaticProp
export async function getStaticProps(context) {
  const id = context.params.id;
  let eventsGalleryUrl =
    process.env.BASE_URL + process.env.PATH.GALLERY_DETAILS;
  let titleUrl =
    process.env.BASE_URL + process.env.PATH.GALLERY_EVENTS + `/${id}`;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [eventsData, titleData, socialMediaIcon, footerLink] =
    await Promise.all([
      await fetchService(eventsGalleryUrl, CONST.API_METHOD.GET),
      await fetchService(titleUrl, CONST.API_METHOD.GET),
      await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
      await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
    ]);

  //Finding Ids
  const eventData = eventsData.filter(
    (eventData) => eventData.EventId.toString() === id
  );
  // No data
  if (!eventData) {
    return {
      redirect: {
        destination: "/gallery",
        permanent: false,
      },
    };
  }

  return {
    props: { eventData, titleData, socialMediaIcon, footerLink },
    revalidate: 1,
  };
}
