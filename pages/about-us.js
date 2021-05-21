//component
import AboutUs from "../container/aboutUs/AboutUs";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function AboutUsPage({
  socialMediaIcon,
  sscMemberData,
  siteVideos,
  footerLink,
}) {
  return (
    <>
      <AboutUs
        socialMediaIcon={socialMediaIcon}
        sscMemberData={sscMemberData}
        siteVideos={siteVideos}
        footerLink={footerLink}
      />
    </>
  );
}

export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let memberUrl = process.env.BASE_URL + process.env.PATH.MEMBERS;
  let siteVideosUrl = process.env.BASE_URL + process.env.PATH.SITEVIDEOS;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [socialMediaIcon, sscMemberData, siteVideos, footerLink] =
    await Promise.all([
      await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
      await fetchService(memberUrl, CONST.API_METHOD.GET),
      await fetchService(siteVideosUrl, CONST.API_METHOD.GET),
      await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
    ]);

  return {
    props: {
      socialMediaIcon,
      sscMemberData,
      siteVideos,
      footerLink,
    },
  };
}
