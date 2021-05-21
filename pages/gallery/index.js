// Component
import GalleryPage from "../../container/gallery/Gallery";
//service
import { fetchService } from "../../services/fetchService";
//CONSTANT
import { CONST } from "../../constant";

export default function Gallery({ eventsData, socialMediaIcon, footerLink }) {
  return (
    <>
      <GalleryPage
        eventsData={eventsData}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
    </>
  );
}

// StaticProp
export async function getStaticProps() {
  let eventsGalleryUrl = process.env.BASE_URL + process.env.PATH.GALLERY_EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [eventsData, socialMediaIcon, footerLink] = await Promise.all([
    await fetchService(eventsGalleryUrl, CONST.API_METHOD.GET),
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
