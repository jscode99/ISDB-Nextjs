//service
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
//Components
import NewsDetails from "../../container/newsPublications/NewsDetails";

export default function NewsTypes({
  newsDetails,
  news,
  socialMediaIcon,
  footerLink,
}) {
  return (
    <NewsDetails
      newsDetails={newsDetails}
      news={news}
      socialMediaIcon={socialMediaIcon}
      footerLink={footerLink}
    />
  );
}

export async function getStaticPaths() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;

  const [news] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
  ]);

  const paths = news.map(newsD => {
    return {
      params: {
        id: newsD.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.FOOTER_LINK;

  const [news, socialMediaIcon, footerLink] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);
  //Id match
  const id = context.params.id;
  const newsDetails = news.find(newsD => newsD.id.toString() === id);

  //No id found
  if (!newsDetails) {
    return {
      redirect: {
        destination: "/news-publications",
        permanent: false,
      },
    };
  }

  return {
    props: {
      newsDetails,
      news,
      socialMediaIcon,
      footerLink,
    },
  };
}
