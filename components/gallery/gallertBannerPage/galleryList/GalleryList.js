import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Empty } from "antd";
import {RightOutlined} from '@ant-design/icons' 
import moment from "moment";
// Css
import styles from "./gallery-list.module.sass";
//Components
import AppRoundedBtn from "../../../../common_components/appRoundedBtn/AppRoundedBtn";

function paginationService(listData, listSize, pageNumber) {
  return listData.slice((pageNumber - 1) * listSize, listSize * pageNumber);
}

export default function GalleryList({ listData, listSize, pageNumber }) {
  const router = useRouter();
  const [paginatedListData, setPaginatedListData] = useState([]);

  useEffect(() => {
    if (listData && listData.length > 0)
      setPaginatedListData(paginationService(listData, listSize, pageNumber));
  }, [listSize, pageNumber, listData]);

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row>
          {paginatedListData.length > 0 ? (
            paginatedListData.map((listData, i) => (
              <Col span={24} className={`mb-3`}>
                <div className={`${styles.gallery_list_card}`}>
                  <Row className={`h-100`}>
                    <Col xs={0} sm={0} md={2} lg={2} xl={2}>
                      <div
                        className={`d-flex justify-content-center align-items-center h-100`}
                      >
                        <div
                          className={`${styles.list_number} d-flex justify-content-center align-items-center`}
                        >
                          {`${i + 1 + (listSize * pageNumber - listSize)}`}
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                      <div
                        className={`d-flex justify-content-center  align-items-start h-100 flex-column pl-2`}
                      >
                        <p
                          className={`${styles.list_label} d-flex justify-content-center align-items-center mb-2 `}
                        >
                          Event Name
                        </p>
                        <p
                          className={`${styles.list_text} d-flex justify-content-center align-items-center m-0`}
                        >
                          {listData.EventName}
                        </p>
                      </div>
                    </Col>
                    <Col span={3}>
                      <div
                        className={`d-flex justify-content-center  align-items-start h-100 flex-column`}
                      >
                        <p
                          className={`${styles.list_label} d-flex justify-content-center align-items-center mb-2`}
                        >
                          Date
                        </p>
                        <p
                          className={`${styles.list_text} d-flex justify-content-center align-items-center m-0`}
                        >
                          {moment(listData.EventOccurDate).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </Col>
                    <Col xs={0} sm={0} md={5} lg={5} xl={5}>
                      <div
                        className={`d-flex justify-content-center  align-items-start h-100 flex-column`}
                      >
                        <p
                          className={`${styles.list_label} d-flex justify-content-center align-items-center mb-2`}
                        >
                          Location
                        </p>
                        <p
                          className={`${styles.list_text} d-flex justify-content-center align-items-center m-0`}
                        >
                          {listData.Location}
                        </p>
                      </div>
                    </Col>
                  {/* For Small Screens */}
                    <Col xs={9} sm={9} md={0} lg={0} xl={0}>
                      <div
                        className={`d-flex justify-content-center  align-items-start h-100 flex-column pl-5`}
                      >
                        <AppRoundedBtn
                          text={""}
                          prefix={""}
                          suffix={<RightOutlined className={`ml-2 pt-1 mx-1`} />}
                          bg={"yellow"}
                          outline={"none"}
                          long={false}
                          href={"none"}
                          btnStyle={{ width: "80%", height: "50px" }}
                          onClickHandler={() => {
                            router.push(`/gallery/${listData.id}`);
                          }}
                          dropDown={false}
                        />
                      </div>
                    </Col>

                    {/* For Large Screens */}
                    <Col xs={0} sm={0} md={4} lg={4} xl={4}>
                      <div
                        className={`d-flex justify-content-center  align-items-start h-100 flex-column`}
                      >
                        <AppRoundedBtn
                          text={"View Media"}
                          prefix={""}
                          suffix={""}
                          bg={"yellow"}
                          outline={"none"}
                          long={false}
                          href={"none"}
                          btnStyle={{ width: "90%", height: "55px" }}
                          onClickHandler={() => {
                            router.push(`/gallery/${listData.id}`);
                          }}
                          dropDown={false}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))
          ) : (
            <Row>
              <Col span={24}>
                <Empty />
              </Col>
            </Row>
          )}
        </Row>
      </Col>
    </Row>
  );
}