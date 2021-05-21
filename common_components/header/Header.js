import { useState } from "react";
import Image from "next/image";
import useInView from "react-cool-inview";
import { Row, Col, Avatar, Button, Menu, Dropdown } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
//css
import styles from "./header.module.sass";

function Header({
  menuIcon,
  logo,
  setDrawerVisbility,
  userLogedIn,
  setUserLogedIn,
}) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView();
  const router = useRouter();
  const ddmenu = (
    <Menu>
      <Menu.Item>
        <Button
          type="text"
          className={`${styles.sign_in_btn}`}
          onClick={() => setUserLogedIn(false)}
        >{`Logout`}</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className={styles.header_container} ref={observe}>
      <Row>
        {/* desktop view */}
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div className={styles.header}>
            <Row>
              <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                <div className={`${styles.header_contain}`}>
                  <Button
                    type="text"
                    // className={`mb-2`}
                    icon={
                      // <MenuOutlined className={` ${styles.menu_icon} pr-4`} />
                      <Image src={menuIcon} alt="logo" width="33" height="26" />
                    }
                    onClick={() => setDrawerVisbility(true)}
                  />
                  <Button
                    type="text"
                    className={`${styles.menu_btn} px-4`}
                    onClick={() => setDrawerVisbility(true)}
                  >
                    Menu
                  </Button>
                </div>
              </Col>
              <Col xs={8} sm={8} md={11} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.logo}`}>
                  <Image src={logo[0]} alt="logo" width="180" height="100" />
                  <span className={`${styles.vertical_hr}`} />
                  <Image src={logo[1]} alt="logo" width="180" height="100" />
                </div>
              </Col>
              <Col xs={8} sm={8} md={7} lg={8} xl={8}>
                <div className={`${styles.header_contain} justify-content-end`}>
                  <Button
                    type="text"
                    icon={<SearchOutlined className={styles.search_icon} />}
                    className={`${styles.search_btn} mb-2`}
                  />
                  <div>
                    {!userLogedIn ? (
                      <>
                        <Button
                          type="text"
                          className={`${styles.sign_up_btn}`}
                          onClick={() => router.push("/registration")}
                        >
                          {`Sign up`}
                        </Button>
                        <Button
                          type="text"
                          className={`${styles.sign_in_btn}`}
                          onClick={() => setUserLogedIn(true)}
                        >{`Sign in`}</Button>
                      </>
                    ) : (
                      <Dropdown overlay={ddmenu}>
                        <Avatar
                          size={72}
                          src={
                            <Image
                              src={"/header/fake-avatar.jpg"}
                              alt="card-img"
                              width="150"
                              height="150"
                            />
                          }
                          className={`ml-5`}
                        >
                          <UserOutlined className={`${styles.avatar_img}`} />
                        </Avatar>
                      </Dropdown>
                    )}
                  </div>
                </div>
                {/* </div> */}
              </Col>
            </Row>
          </div>
        </Col>
        {/* mobile view */}
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className={styles.header}>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                {/* <div className={inView ? css(animationStyles.slideInLeft) : ""}> */}
                <div className={`${styles.header_contain}`}>
                  <Button
                    type="text"
                    // className={`mb-2`}
                    icon={
                      // <MenuOutlined className={` ${styles.menu_icon} pr-4`} />
                      <Image src={menuIcon} alt="logo" width="33" height="26" />
                    }
                    onClick={() => setDrawerVisbility(true)}
                  />
                  {/* <Button
                      type="text"
                      className={`${styles.menu_btn} px-4`}
                      onClick={() => setDrawerVisbility(true)}
                    >
                      Menu
                    </Button> */}
                </div>
                {/* </div> */}
              </Col>
              <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                {/* <div className={inView ? css(animationStyles.slideInDown) : ""}> */}
                <div className={`${styles.header_contain} ${styles.logo}`}>
                  <Image src={logo[0]} alt="logo" width="150" height="100" />
                  <span className={`${styles.vertical_hr}`} />
                  <Image src={logo[1]} alt="logo" width="150" height="100" />
                </div>
                {/* </div> */}
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                {/* <div
                  className={inView ? css(animationStyles.slideInRight) : ""}
                > */}
                <div className={`${styles.header_contain} justify-content-end`}>
                  {/* <Button
                      type="text"
                      icon={<SearchOutlined className={styles.search_icon} />}
                      className={`${styles.search_btn} mb-2`}
                    /> */}
                  <div>
                    {!userLogedIn ? (
                      <>
                        {/* <Button
                            type="text"
                            className={`${styles.sign_up_btn}`}
                          >{`Sign up`}</Button>
                          <Button
                            type="text"
                            className={`${styles.sign_in_btn}`}
                            onClick={() => setUserLogedIn(true)}
                          >{`Sign in`}</Button> */}
                      </>
                    ) : (
                      <Avatar
                        size={50}
                        src={
                          <Image
                            src={"/header/fake-avatar.jpg"}
                            alt="card-img"
                            width="120"
                            height="120"
                          />
                        }
                        className={`ml-5`}
                      >
                        <UserOutlined className={`${styles.avatar_img}`} />
                      </Avatar>
                    )}
                  </div>
                </div>
                {/* </div> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
