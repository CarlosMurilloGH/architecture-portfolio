import React, { useEffect, useState } from "react";
import { app } from "../../fb/fb";
import { Masonry } from "@mui/lab";
import { Button, Modal } from '@mui/material';
import "./Prueba.css";


export default function Prueba() {

  const [docs, setDocs] = useState([]);


	const getData = () => {
		app
			.firestore()
			.collection("/portafolio")
			.get()
			.then((querySnapshot) => {
				const data = [];
				querySnapshot.forEach((doc) => {
					data.push({ ...doc.data(), id: doc.id });
          console.log(doc);
				});
				setDocs(data);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getData();
	}, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  return (
      <div>
        <Masonry columns={{xs: 1, sm: 2, md: 4}} spacing={1}>
            {docs.length > 0 &&
          docs.map((doc) => (
            
            <div key={doc.id}>
            <Button variant="text" color="primary" onClick={handleOpen}>
            <img
            className="productCardImg"
            src={`${doc.imageURL}?w=162&auto=format`}
            alt={doc.name}
            style={{ 
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderTopLeftRadius:4,
              borderTopRightRadius:4,
              display: 'block',
              margin:'auto',
              width: '100%' }}
          />
                      </Button>
                      <Modal  className="imagegrid"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                    <div>
                        <img   src={`${doc.imageURL}`} alt={doc.name} />
                    </div>
            </Modal>
            </div>

                      ))}
          </Masonry>
         
        </div>
  );
}




