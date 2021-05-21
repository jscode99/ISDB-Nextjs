import BuysellSection from "../../container/buySell/BuySell";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function BuySell({ socialMediaIcon, footerLink }) {
  return (
    <>
      <BuysellSection
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
    </>
  );
}

export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;

  const [socialMediaIcon, footerLink, contactUsData] = await Promise.all([
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
