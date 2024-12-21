import React from "react";
import { useParams, Link } from "react-router-dom";
import { CircularProgress, Typography, Grid } from "@mui/material";
import useFetch from "../hooks/useFetch";

const AlbumDetail = () => {
  const { albumId } = useParams();
  const { data: album, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const { data: photos } = useFetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h4">{album.title}</Typography>
      <Typography variant="h6">Photos:</Typography>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <div className="photo-item">
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <Typography variant="body2" className="photo-title">
                {photo.title}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Link to={`/users/${album.userId}`} style={{ textDecoration: "none" }}>
        The creator of the album
      </Link>
    </div>
  );
};

export default AlbumDetail;
