import { useState, useEffect } from "react";
// CSS
import styles from "./gallery-inner-section.module.sass";
// Components
import GalleryTitle from "../galleryTitle/GalleryTitle";
import GalleryImageCard from "../galleryImageCard/GalleryImageCard";

export default function GalleryInnerPageSection({ eventData, titleData }) {
  const [category, setCategory] = useState("Image");
  const [filteredcardData, setFilteredCardData] = useState([]);
  // Conditional Rendering
  useEffect(() => {
    let data = eventData.filter(
      data => data.ContentType.toLowerCase() === category.toLowerCase(),
    );
    setFilteredCardData(data);
  }, [category]);

  return (
    <div className={`${styles.gallery_inner_section_bg}`}>
      <div className={`${styles.gallery_inner_section_container}`}>
        <GalleryTitle titleData={titleData} setCategory={setCategory} />
        <GalleryImageCard
          filteredcardData={filteredcardData}
          category={category}
        />
      </div>
    </div>
  );
}
