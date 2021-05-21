import { useState, useEffect } from "react";
import Head from "../../common_components/head/Head";
import Header from "../../common_components/header/Header";
import Footer from "../../common_components/footer/Footer";
import AppDrawer from "../../common_components/appDrawer/AppDrawer";

export default function Layout({ children, socialMediaIcon, footerLink }) {
  const [visbility, setVisbility] = useState(false);
  const [userLogedIn, setUserLogedIn] = useState(false);
  return (
    <>
      <Head logo={"/favicon.ico"} />
      <Header
        menuIcon={"/header/hambergurIcon.svg"}
        logo={[
          "/header/IsDB _ EN _ logo _ primary _ colour.png",
          "/header/SSCLOGO.png",
        ]}
        setDrawerVisbility={setVisbility}
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
      />
      {children}
      <Footer
        logo={"/footer/StaffSocialClub-Logo_footer.png"}
        socialMediaIcon={socialMediaIcon}
        footerLink={footerLink}
      />
      <AppDrawer
        visbility={visbility}
        setVisbility={setVisbility}
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
      />
    </>
  );
}
