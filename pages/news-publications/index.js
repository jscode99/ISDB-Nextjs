//component
import NewsPublications from "../../container/newsPublications/NewsPublications";
//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";

export default function NewsPublicationsPage({
  news,
  socialMediaIcon,
  footerLink,
}) {
  return (
    <>
      <NewsPublications
        news={news}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
    </>
  );
}

export async function getStaticProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [news, socialMediaIcon, footerLink] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      socialMediaIcon,
      footerLink,
    },
  };
}
