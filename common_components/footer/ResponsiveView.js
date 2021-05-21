import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
//css
import styles from "./footer.module.sass";

export default function ResponsiveView({
  view,
  logo,
  socialMediaIcon,
  footerLink,
}) {
  socialMediaIcon = socialMediaIcon.slice(0, 4);
  return (
    <div className={`${styles.navigation_container_bg} pt-5`}>
      <div
        className={`${styles.navigation_container} ${
          view === "tablet" ? "px-2" : "px-5"
        }`}
      >
        <div>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={7}
              lg={5}
              xl={5}
              className={`d-flex justify-content-center flex-column ${
                view === "mobile" ? styles.p_FooterLogo : ""
              }`}
            >
              <Image src={logo} alt="logo" width="180" height="116" />
              <div
                className={`mt-4 d-flex justify-content-center ${
                  view === "tablet" ? "px-2" : "px-4"
                }`}
              >
                {socialMediaIcon.map(icon => (
                  <span
                    className={`mx-2 ${styles.footer_list_cursor_pointer}`}
                    key={icon.id}
                    onClick={() => {
                      window.open(icon.Link);
                    }}
                  >
                    <Image
                      src={process.env.BASE_URL + icon.Logo.url}
                      alt={`${icon.toString()}`}
                      width="22"
                      height="18"
                    />
                  </span>
                ))}
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={7} xl={7}>
              <ul className={`${styles.footer_list}`}>
                <li
                  className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                >
                  IsDB Group
                </li>
                <li
                  className={`${styles.footer_list_address} ${styles.footer_list_cursor_auto}`}
                >
                  {`IsDB Group Staff Social Club`}
                  <br />
                  {`8111 King Khalid St. Al Nuzlah Al yamania Dist.`}
                  <br />
                  {`Unit No.1, Jeddah 22332-2444 `}
                  <br />
                  {`Kingdom of Saudi Arabia`}
                  <br />
                </li>
                <li className={`${styles.footer_list_cursor_auto}`}>
                  Tel: +966 (12) 636 1264
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <ul className={`${styles.footer_list}`}>
                <li
                  className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                >
                  Quick Links
                </li>
                <Link href={"/about-us"}>
                  <li>About</li>
                </Link>
                {footerLink &&
                  footerLink.length > 0 &&
                  footerLink.map(data => (
                    <li>
                      <a href={data.Link}>{data.Text}</a>
                    </li>
                  ))}
              </ul>
            </Col>
            <Col xs={24} sm={24} md={5} lg={6} xl={6}>
              <ul className={`${styles.footer_list}`}>
                <li
                  className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                >
                  Other Resources
                </li>
                <li>News</li>
                <li>Press Office</li>
                <li>Resources</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
