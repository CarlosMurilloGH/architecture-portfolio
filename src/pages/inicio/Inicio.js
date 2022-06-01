import React, { useEffect, useState } from "react";
import { app } from "../../fb/fb";
import { Masonry } from "@mui/lab";
import Box from '@mui/material/Box';
import "./Inicio.css";


export default function Inicio() {

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
				});
				setDocs(data);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getData();
	}, []);

  return (
    <Box m={2} pt={1}>
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
              width: '100%' }}
          />
            </div>
                      ))}
          </Masonry>
    </Box>
  );
}




