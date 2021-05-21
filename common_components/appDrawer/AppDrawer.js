import { useRouter } from "next/router";
import { Drawer, Row, Col, Button } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
//
import styles from "./drawer.module.sass";

export default function AppDrawer({
  visbility,
  setVisbility,
  userLogedIn,
  setUserLogedIn,
}) {
  const router = useRouter();

  let menuLists = [
    {
      header: "Discover",
      links: [
        {
          name: "Home",
          link: "/",
        },
        // {
        //   name: "Gallery",
        //   link: "/gallery",
        // },
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Events",
          link: "/events",
        },
        {
          name: "News",
          link: "/news-publications",
        },
        // {
        //   name: "Services & Activities",
        //   link: "/services-activities",
        // },
        // {
        //   name: "Online Games",
        //   link: "/entertainment-games",
        // },
      ],
    },
    // {
    //   header: "Services",
    //   links: [
    //     {
    //       name: "Wellbeing Awareness",
    //       link: "/services-activities/wellbeing-awareness",
    //     },
    //     {
    //       name: "Virtual Sports & Recreational",
    //       link: "/services-activities/virtual-sports-recreational",
    //     },
    //     {
    //       name: "Religious Activities",
    //       link: "/services-activities/religious-activities",
    //     },
    //     {
    //       name: "Educational Courses",
    //       link: "/services-activities/educational-courses",
    //     },
    //     {
    //       name: "Family & Social",
    //       link: "/services-activities/family-social",
    //     },
    //     {
    //       name: "Entertainment & Online Games",
    //       link: "/services-activities/entertainment-online-game",
    //     },
    //     {
    //       name: "IsDB Group Activities",
    //       link: "/services-activities/isDB-group-activities",
    //     },
    //     {
    //       name: "Buy & Sell",
    //       link: "/services-activities/buy-sell",
    //     },
    //   ],
    // },
    {
      header: "Media",
      links: [
        {
          name: "News",
          link: "https://www.google.co.in/",
        },
        {
          name: "Press Office",
          link: "https://www.google.co.in/",
        },
        {
          name: "Resources",
          link: "https://www.google.co.in/",
        },
      ],
    },
  ];
  return (
    <>
      <Drawer
        placement={"top"}
        closable={false}
        height={"100vh"}
        onClose={() => setVisbility(false)}
        visible={visbility}
        key={"top"}
        // className={`${styles.drawer_bg}`}
        bodyStyle={{ background: "#000000FA", color: "#fff" }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <span onClick={() => setVisbility(false)} className={`d-flex mb-3`}>
              <CloseOutlined className={`${styles.close_Icon_btn}`} />
              <p
                className={`d-flex ml-4 m-0 align-items-center ${styles.close_btn}`}
              >
                Close
              </p>
            </span>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Button
              type="text"
              icon={<SearchOutlined className={styles.search_icon} />}
              className={`${styles.search_btn} mb-2`}
            />
          </Col>
          {menuLists.map(listItem => (
            <Col
              xs={0}
              sm={0}
              md={8}
              lg={8}
              xl={8}
              className={`d-flex justify-content-center`}
            >
              <div className={`${styles.list_header}`}>
                {listItem.header}
                <ul className={`${styles.list_items} mt-4 pl-4`}>
                  {listItem.links.map(list => (
                    <li className={`mb-4`}>
                      <a
                        onClick={() => {
                          setVisbility(false);
                          router.push(list.link);
                        }}
                      >
                        {list.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            {!userLogedIn ? (
              <>
                <Button
                  type="text"
                  className={`${styles.sign_up_btn}`}
                  onClick={() => router.push("/registration")}
                >{`Sign up`}</Button>
                <Button
                  type="text"
                  className={`${styles.sign_in_btn}`}
                  onClick={() => setUserLogedIn(true)}
                >{`Sign in`}</Button>
              </>
            ) : (
              <Button
                type="text"
                className={`${styles.sign_in_btn}`}
                onClick={() => setUserLogedIn(false)}
              >{`Logout`}</Button>
            )}
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
