import React, { useEffect, useState } from "react";
import { app } from "../../fb/fb";
import { Formulario } from "./Formulario";
import { Masonry } from "@mui/lab";
import { MasonryGrid } from "./MasonryGrid";
import { SingleImageList } from "./SingleImageList";

const initialState = {
	id: "",
	name: "",
	price: "",
	description: "",
	imageURL: "",
};
export const Panel = () => {
	const [docs, setDocs] = useState([]);
	const [data, setData] = useState(initialState);
	const [selectedFile, setSelectedFile] = useState("");

	const getData = () => {
		app
			.firestore()
			.collection("products")
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

	const selectDoc = (id) => {
		const selected = docs.filter((doc) => doc.id === id);
		setData({
			id: id,
			name: selected[0].name,
			price: selected[0].price,
			description: selected[0].description,
		});
	};

	const clearData = () => {
		setData(initialState);
	};
	const saveData = async () => {
		if (!data.name) {
			alert("El nombre es obligatorio");
			return;
		}
		if (data.id) {
			app
				.firestore()
				.collection("products")
				.doc(data.id)
				.update({
					name: data.name,
					price: data.price,
					description: data.description,
				})
				.then(() => {
					console.log("Document successfully updated!");
				})
				.catch((error) => console.error(error));
		} else {
			const storageRef = app.storage().ref();
			const filePath = storageRef.child(data.name);
			await filePath.put(selectedFile);
			const url = await filePath.getDownloadURL();
			filePath
				.getDownloadURL()
				.then((url) => {
					app
						.firestore()
						.collection("products")
						.add({
							...data,
							imageURL: url,
						});
				})
				.then(() => {
					getData();
				})
				.catch((error) => console.error(error));
		}
		clearData();
        getData();
	};
	useEffect(() => {
		getData();
	}, []);

  return (
    <div className="homeContainer">
      <div className="productListGrid">
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
      </div>
      <div className="productformcontainer">
        <Formulario
          data={data}
          setData={setData}
          clearData={clearData}
          saveData={saveData}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
  );
};


