import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import useFetch from '../hooks/useFetch';

const AlbumList = () => {
  const { data: albums, loading } = useFetch('https://jsonplaceholder.typicode.com/albums');

  if (loading) return <CircularProgress />;

  return (
    <List>
      {albums.map(album => (
        <ListItem button key={album.id} component={Link} to={`/albums/${album.id}`} className="list-item">
          <ListItemText primary={album.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AlbumList;