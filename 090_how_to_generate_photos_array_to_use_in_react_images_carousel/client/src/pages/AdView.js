import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "../components/misc/ImageGallery";
import Logo from "../logo.svg";

export default function AdView() {
  // state
  const [ad, setAd] = useState({});
  const [related, setRelated] = useState([]);
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

  const generatePhotosArray = (photos) => {
    if (photos?.length > 0) {
      const x = photos?.length === 1 ? 2 : 4;
      let arr = [];

      photos.map((p) =>
        arr.push({
          src: p.Location,
          width: x,
          height: x,
        })
      );
      return arr;
    } else {
      return [
        {
          src: Logo,
          width: 2,
          height: 1,
        },
      ];
    }
  };

  return (
    <>
      <ImageGallery photos={generatePhotosArray(ad?.photos)} />
      <pre>{JSON.stringify({ ad, related }, null, 4)}</pre>
    </>
  );
}
