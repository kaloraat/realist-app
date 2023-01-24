import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: "https://realist-app-udemy-course-bucket.s3.amazonaws.com/q6FJqA0V-0Ryx1UC7MDQa.jpeg",
    width: 4,
    height: 3,
  },
  {
    src: "https://realist-app-udemy-course-bucket.s3.amazonaws.com/FpP5Z2pYaPqTTOrJu2MzN.jpeg",
    width: 1,
    height: 1,
  },
];

export default function AdView() {
  // state
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // hooks
  const params = useParams();

  useEffect(() => {
    if (params?.slug) fetchAd();
  }, [params?.slug]);

  const fetchAd = async () => {
    try {
      const { data } = await axios.get(`/ad/${params.slug}`);
      setAd(data?.ad);
      setRelated(data?.related);
    } catch (err) {
      console.log(err);
    }
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrent(0);
    setIsOpen(false);
  };

  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={current}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <pre>{JSON.stringify({ ad, related }, null, 4)}</pre>
    </>
  );
}
