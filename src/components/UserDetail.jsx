import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  CircularProgress,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";
import useFetch from "../hooks/useFetch";

const UserDetail = () => {
  const { userId } = useParams();
  const { data: user, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: albums } = useFetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  if (loading) return <CircularProgress />;

  return (
    <Box sx={{ padding: 2, backgroundColor: "background.default" }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        {user.name}
      </Typography>
      <Typography sx={{ marginBottom: 1 }}>{user.email}</Typography>
      <Typography sx={{ marginBottom: 2 }}>{user.phone}</Typography>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Albums:
      </Typography>
      <List sx={{ padding: 0 }}>
        {albums.map((album) => (
          <ListItem
            key={album.id}
            component={Link}
            to={`/albums/${album.id}`}
            sx={{
              padding: "10px 0",
              textDecoration: "none",
              color: "primary.main",
              "&:hover": { color: "secondary.main" },
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {album.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserDetail;
