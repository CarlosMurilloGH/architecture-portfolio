import React,{useEffect, useState} from 'react';
import { ref, listAll,getDownloadURL } from 'firebase/storage';
import { storage } from '../../fb/fb';
import Box from '@mui/material/Box';
import "./Inicio.css";
import { Masonry } from '@mui/lab';
import Panel from '../panel/Panel';



export default function Inicio() {

  const [imageUrls, setImageUrls] = useState([]);
  
  //eslint-disable-next-line
  const imagesListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <Box m={2} pt={3}>
      <Panel />
      <Masonry columns={{xs: 1, sm: 2, md: 4}} spacing={1} >
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={`${url}?w=162&auto=format`}
              srcSet={`${url}?w=162&auto=format&dpr=2 2x`}
              alt={url.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                borderTopLeftRadius:4,
                borderTopRightRadius:4,
                display: 'block',
                margin:'auto',
                width: '100%'
              }}
            />
          </div>
        ))}
        </Masonry>
    </Box>
  );
}




