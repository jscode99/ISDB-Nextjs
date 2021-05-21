//component
import ServicesActivitiesCardSection from "../../../common_components/servicesActivitiesCardSection/ServicesActivitiesCardSection";
// css
import styles from "./services-activities-intro.module.sass";

export default function ServicesActivitiesIntro({ cardsData }) {
  return (
    <div
      className={`${styles.service_bg}`}
      // style={{
      //   backgroundImage: `url(/serviceActivities/Bg1.svg)`,
      // }}
    >
      <div className={`${styles.service_container} pb-5`}>
        <ServicesActivitiesCardSection cardsData={cardsData} />
      </div>
    </div>
  );
}
