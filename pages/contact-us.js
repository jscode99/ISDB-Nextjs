// Components
import ContactUs from "../container/contactUs/ContactUs";
//service
import { fetchService } from "../services/fetchService";
//CONSTANT
import { CONST } from "../constant";

export default function ContactUsDetails({ socialMediaIcon, footerLink }) {
  return (
    <>
      <ContactUs socialMediaIcon={socialMediaIcon} footerLink={footerLink} />
    </>
  );
}

// StaticProp
export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [socialMediaIcon, footerLink] = await Promise.all([
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      socialMediaIcon,
      footerLink,
    },
  };
}
