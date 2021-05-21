import Image from "next/image";
import React from "react";
import { Row, Col, Menu } from "antd";
import { useState, useEffect } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";

import AppRoundedBtn from "../../../common_components/appRoundedBtn/AppRoundedBtn";

import BuySellCard from "../buySellCard/BuySellCard";
import NewAdModal from "../../../common_components/appModal/newAdModal/NewAdModal";
//css
import styles from "./buysell-section.module.sass";

const { SubMenu } = Menu;

let ddmenu;
function setDDMenu(setSubMenu) {
  ddmenu = (
    <Menu>
      <Menu.Item>
        <a
          className={`${styles.dropDownList} py-3`}
          onClick={() => setSubMenu("All")}
        >
          All
        </a>
      </Menu.Item>
      <SubMenu title="Electronic" className={`${styles.dropDownList} py-3`}>
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Home Appliance")}
          >
            Home Appliance
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Gadgets")}
          >
            Gadgets
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Electronic")}
          >
            Electronic
          </a>
        </Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="Vehicle" className={`${styles.dropDownList} py-3`}>
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Car")}
          >
            Car
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Bike")}
          >
            Bike
          </a>
        </Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu
        title="Health and Beauty"
        className={`${styles.dropDownList} py-3`}
      >
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Health care")}
          >
            Health care
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Beauty care")}
          >
            Beauty care
          </a>
        </Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <SubMenu title="House Holds" className={`${styles.dropDownList} py-3`}>
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Furniture")}
          >
            Furniture
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Decorative")}
          >
            Decorative
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Clocks")}
          >
            Clocks
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a
            className={`${styles.dropDownList} py-3`}
            onClick={() => setSubMenu("Cleaning")}
          >
            Cleaning
          </a>
        </Menu.Item>
      </SubMenu>
      <Menu.Divider />
      <Menu.Item>
        <a
          className={`${styles.dropDownList} py-3`}
          onClick={() => setSubMenu("Others")}
        >
          Others
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default function BuysellSection() {
  const [subMenu, setSubMenu] = useState("All");
  const [newAdModal, setNewAdModal] = useState(false);
  const [eventId, setEventId] = useState("");

  const [cItems, setCitems] = useState(["Electronic", "Vehicles", "Others"]);
  const [subitems, setsubitems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory);

  useEffect(() => {
    switch (selectedCategory) {
      case "Electronic":
        setsubitems(["Home Appliance", "Gadgets", "Electronic"]);
        break;
      case "Vehicles":
        setsubitems(["Car", "Bike"]);
        break;
      default:
        setsubitems([]);
    }
  }, [selectedCategory]);

  let cardData = {
    image: [
      "/entertainment/card.png",
      "/entertainment/card.png",
      "/entertainment/card.png",
      "/entertainment/card.png",
    ],
    title: "Selling my 3 years old for Ford Mustang",
    data: "Sed ut perspiciatis unde omnis iste natus errorSed ut perspiciatis unde omnis iste natusSed ut perspiciatis unde omnis iste natus sit voluptat doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptat doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite..beatae vitae dicta sunt..",
    price: "75000 AED",
    username: "Ayaz Ahamed",
    userImage: "/entertainment/card.png",
    date: "12-12-2021",
    category: "Vehicle",
    subcategory: "Home Appliance",
    brand: "Ford",
    location: "KSA",
    phone: "+98568568",
    email: "https://www.youtube.com/",
  };

  let tempData = [];
  let filterData = [];
  for (var i = 0; i < 10; i++) {
    tempData.push(cardData);
  }
  if (subMenu.toLowerCase() === "all") {
    filterData = tempData;
  } else if (subMenu.toLowerCase() === "others") {
    filterData = tempData.filter(
      data => data.category.toLowerCase() === subMenu.toLowerCase(),
    );
  } else {
    filterData = tempData.filter(
      data => data.subcategory.toLowerCase() === subMenu.toLowerCase(),
    );
  }

  setDDMenu(setSubMenu);

  // console.log('=======>', newAdModal);
  return (
    <>
      <div className={`${styles.buysellsetion_section_bg}`}>
        <div className={`${styles.buysellsetion_section_container}`}>
          <Row className={"mb-4"}>
            <Col xs={24} sm={24} md={16} lg={18} xl={18} className={"mb-4"}>
              <h3
                className={`${styles.buysellsection_section_tilte} mb-0 d-flex h-100 align-items-center`}
              >
                All Items for Sale
              </h3>
            </Col>
            <Col xs={16} sm={16} md={8} lg={6} xl={6}>
              <div
                className={`d-flex h-100 align-items-center w-75 justify-content-between`}
              >
                <AppRoundedBtn
                  text={"Sell"}
                  prefix={<PlusSquareOutlined className={`ml-2 pt-1 mx-1`} />}
                  suffix={""}
                  bg={"yellow"}
                  outline={"none"}
                  long={false}
                  href={"none"}
                  onClickHandler={e => {
                    setNewAdModal(true);
                    // setEventId(1);
                  }}
                />
                <AppRoundedBtn
                  text={" "}
                  prefix={
                    <Image
                      src={"/eventsActivities/filter.svg"}
                      alt={"fliter-icon"}
                      width={20}
                      height={20}
                    />
                  }
                  suffix={""}
                  bg={"blue"}
                  outline={"dark"}
                  long={false}
                  href={"none"}
                  onClickHandler={() => {}}
                  dropDown={true}
                  dropDownData={ddmenu}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            {filterData.map(data => (
              <Col xs={24} sm={24} md={12} lg={8} xl={8} className={"pb-3"}>
                <BuySellCard cardData={data} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <NewAdModal
        setVisiblety={setNewAdModal}
        visible={newAdModal}
        citems={cItems}
        setSelectedCategory={setSelectedCategory}
        subitems={subitems}
        selectedCategory={selectedCategory}
      />
    </>
  );
}
