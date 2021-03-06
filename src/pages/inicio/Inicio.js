import React, { useEffect, useState } from "react";
import { app } from "../../fb/fb";
import { Masonry } from "@mui/lab";
import Box from '@mui/material/Box';
import "./Inicio.css";
import { Modal } from "@mui/material";


export default function Inicio() {

  const [docs, setDocs] = useState([]);
  const [urlphoto,setUrlphoto] =useState("");
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [isLoading,setIsLoading] = useState(true);

  //get documents from firebase
	const getData = () => {
		app
			.firestore()
			.collection("/portafolio")
			.get()
			.then((querySnapshot) => {
				const data = [];
				querySnapshot.forEach((doc) => {
					data.push({ ...doc.data(), id: doc.id });
				});
				setDocs(data);
			})
	};

	useEffect(() => {
		getData();
    setIsLoading(false);
	}, []);  

  //get url from the clicked photo
   const getPhotoUrl=(imageURL)=>{
     setUrlphoto(imageURL);
     setOpen(true);
  }

  return (
    <Box m={2} pt={1}>
      {isLoading && <p>eta cargando</p>}
        <Masonry columns={{xs: 1, sm: 2, md: 4}} spacing={1}>
            {docs.length > 0 &&
          docs.map((doc) => (
            <div key={doc.id}>
            <img
            className="productCardImg"
            src={`${doc.imageURL}?w=162&auto=format`}
            alt={doc.name}
            style={{ borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius:4,
              borderTopRightRadius:4,
              display: 'block',
              margin:'auto',
              width: '100%' 
            }}
            onClick={(e)=>getPhotoUrl(doc.imageURL)}
          />
            </div>
                      ))}
          </Masonry>

          <Modal open={open} onClose={handleClose} className="lightboxcontainer">
            <img className="lightbox" src={urlphoto} alt="firebae" />
          </Modal>
    </Box>
  );
}




