// Component
import Entertainment from "../container/entertainment&Games/Entertainment&Games";
//service
import { fetchService } from "../services/fetchService";
//CONSTANT
import { CONST } from "../constant";

export default function EntertainmentPage({ socialMediaIcon, gameData, footerLink }) {
  return (
    <>
      <Entertainment
        socialMediaIcon={socialMediaIcon}
        gameData={gameData}
        footerLink={footerLink}
      />
    </>
  );
}

// StaticProp
export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let gameUrl = process.env.BASE_URL + process.env.PATH.GAMES;
  let footerLinkUrl = process.env.BASE_URL + process.env.PATH.GAMES;

  const [socialMediaIcon, gameData, footerLink] = await Promise.all([
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(gameUrl, CONST.API_METHOD.GET),
    await fetchService(footerLinkUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      socialMediaIcon,
      gameData,
      footerLink,
    },
  };
}
