import React, { useEffect } from "react";
import { FeedPhotosItem } from "../FeedPhotosItem";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../services/api";
import { Error } from "../../Error";
import { Loading } from "../../Loading/Loading";
import styles from "./styles.module.css";
import { FeedPhotosProps } from "../types";

export const FeedPhotos = ({
  page,
  user,
  setModalPhoto,
  setInfinite,
}: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {/* {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))} */}
      </ul>
    );
  else return null;
};