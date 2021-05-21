import Image from "next/image";
import { useEffect, useState } from "react";
import VideoThumbnail from "react-video-thumbnail";
import moment from "moment";
import { Button } from "antd";
//component
import AppSlider from "../../../common_components/appSlider/AppSlider";
import VideoPlayerModal from "../../../common_components/appModal/videoPlayerModal/VideoPlayerModal";
//css
import styles from "./banner.module.sass";

function isMediaVideo(url) {
  let mediaFormat = url.split(".")[1];
  switch (mediaFormat.toLowerCase()) {
    case "mp4":
      return true;
  }
}

export default function Banner({ bannerData }) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [play, setPlay] = useState(false);

  //expire date banner should be filtered out
  let filteredBannerData = bannerData.filter(
    (banner) => new Date(banner.Expiration).getTime() > new Date().getTime()
  );
  return (
    <>
      <AppSlider
        btnIcon={`/context/slider_btn_icon_light.svg`}
        showIndicators={true}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
        stopOnHover={true}
      >
        {filteredBannerData.map((banner) => (
          <div className={`${styles.banner_container}`}>
            {banner.Type.toLowerCase() === "image" ? (
              <Image
                src={process.env.BASE_URL + banner.Image[0].url}
                alt={banner.Image[0].hash}
                layout="fill"
              />
            ) : (
              <div className={`${styles.video_thumbnail_container}`}>
                <div
                  className={`${styles.video_play_btn}`}
                  onClick={() => {
                    console.log(process.env.BASE_URL + banner.Image[0].url);
                    setVideoUrl(banner.VideoLink);
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
                  src={process.env.BASE_URL + banner.Image[0].url}
                  alt={banner.Image[0].hash}
                  layout="fill"
                />
              </div>
            )}
            <p className={`legend ${styles.text}`}>
              <div className={`pl-5`}>
                <h1 className={`${styles.text_title} mb-4`}>
                  {banner.Title && banner.Title}
                </h1>
                <p className={`${styles.text_des} mb-4`}>
                  {banner.Description && banner.Description.length > 100
                    ? `${banner.Description.substring(0, 100)}...`
                    : banner.Description}
                </p>
                <p className={`${styles.text_time}`}>
                  {`${moment(banner.CreatedDate).format("MMMM DD")} - ${moment(
                    banner.Expiration
                  ).format("MMMM DD")}`}
                </p>
                {banner.RegistrationLink && (
                  <Button
                    shape="round"
                    size={"large"}
                    className={`${styles.text_button}`}
                  >
                    Register Now
                  </Button>
                )}
              </div>
            </p>
          </div>
        ))}
      </AppSlider>
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
    </>
  );
}
