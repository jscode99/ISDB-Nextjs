import { useState, useEffect } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { FileTextOutlined, DownloadOutlined } from '@ant-design/icons'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// CSS
import styles from "./gallery-image-card.module.sass";
// Components
import AppBtn from "../../../../common_components/appBtn/AppBtn";
import VideoPlayerModal from "../../../../common_components/appModal/videoPlayerModal/VideoPlayerModal";

export default function GalleryImageCard({ filteredcardData, category }) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [play, setPlay] = useState(false);
  const [seeAll, setSeeAll] = useState(false);
  const [publicationData, setPublicationData] = useState(filteredcardData.slice(0, 9));
  const [photoUrl, setPhotoUrl] = useState("");
  const [isOpen, setIsopen] = useState(false)



  useEffect(() => {
    if (seeAll) {
      setPublicationData(filteredcardData);
    } else {
      setPublicationData(filteredcardData.slice(0, 9));
    }
  }, [seeAll, filteredcardData]);

  function viewImage(index) {
    setIsopen(true);
    setPhotoUrl(index)
  }



  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Row className={`w-100`}>

            {/* Image Data */}
            {publicationData &&
              publicationData.length > 0 &&
              category.toLowerCase() === "Image".toLowerCase() &&
              publicationData.map(data => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={`px-2 mt-3`}>
                  <div
                    className={`d-flex justify-content-center align-items-center w-100`}
                  >
                    <div className={`${styles.gallery_image_card}`} onClick={() => viewImage(data.Content[0].url)}>
                      <Image
                        alt="Media Data"
                        src={`${process.env.BASE_URL}${data.Content[0].url}`}
                        layout={`fill`}
                      />
                    </div>
                  </div>
                </Col>
              ))}

            {isOpen && photoUrl && (
              <Lightbox
                mainSrc={`${process.env.BASE_URL}${photoUrl}`}
                onCloseRequest={() => setIsopen(false)}
              />
            )}



            {/* Video Data */}
            {publicationData &&
              publicationData.length > 0 &&
              category.toLowerCase() === "Video".toLowerCase() &&
              publicationData[0].ContentType.toLowerCase() === "Video".toLowerCase() &&
              publicationData.map(data => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={`px-2 mt-3`}>
                  <div
                    className={`d-flex justify-content-center align-items-center w-100`}
                  >
                    <div className={`${styles.gallery_image_card}`}>
                      <div
                        className={`${styles.video_play_btn}`}
                        onClick={() => {
                          setVideoUrl(`${process.env.BASE_URL}${data.Content[0].url}`);
                          setPlay(true);
                          setModalVisibility(true);
                          setAutoPlay(false);
                        }}
                      >
                        <i
                          className={`fa fa-play ${styles.play_icon}`}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <Image
                        alt={data.Content[0].hash}
                        src={`${process.env.BASE_URL}${data.VideoImage[0].url}`}
                        layout={`fill`}
                      />
                    </div>
                  </div>
                </Col>
              ))}
            {play && (
              <VideoPlayerModal
                url={videoUrl}
                setVisiblety={setModalVisibility}
                visible={modalVisibility}
                play={play}
                setPlay={setPlay}
                setAutoPlay={setAutoPlay}
              />
            )}

            {/* Document Data */}
            {publicationData &&
              publicationData.length > 0 &&
              category.toLowerCase() === "Document".toLowerCase() &&
              publicationData.map(data => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={`px-2 mt-3`}>
                  <div
                    className={`d-flex justify-content-center align-items-center w-100`}
                  >
                    <div className={`${styles.gallery_image_card} d-flex justify-content-center align-items-center flex-column`}>
                      <div className={`d-flex justify-content-center align-items-center flex-column`}><FileTextOutlined style={{ color: "#ffffff", fontSize: '300%' }} />
                        <h3 className={`mt-3`}>
                          <a href={`${process.env.BASE_URL}${data.Content[0].url} `} target="_blank" className={`${styles.document_text}`} download>{data.Content[0].name}</a>
                        </h3>
                        <a href={`${process.env.BASE_URL}${data.Content[0].url} `} target="_blank" download><DownloadOutlined style={{ color: "#ffffff", fontSize: '200%' }} /></a>

                      </div>
                    </div>
                  </div>
                </Col>
              ))}

          </Row>
        </Col>
      </Row>
      <Row className={`mt-4`}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`d-flex justify-content-center align-items-center`}>
            <AppBtn text={seeAll ? `Load Less` : `Load More`} prefix={""} suffix={""} mode={"dark"} onClick={seeAll ? () => setSeeAll(false) : () => setSeeAll(true)} />
          </div>
        </Col>
      </Row>
    </>
  )
}
