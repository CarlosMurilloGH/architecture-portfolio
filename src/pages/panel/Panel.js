import React, { useEffect, useState } from "react";
import { app } from "../../fb/fb";
import { Formulario } from "./Formulario";


const initialState = {
	id: "",
	imageURL: "",
};
export const Panel = () => {
	
	// eslint-disable-next-line
	const [docs, setDocs] = useState([]);
	const [data, setData] = useState(initialState);
	const [selectedFile, setSelectedFile] = useState("");

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
				.collection("/portafolio")
				.doc(data.id)
				.update({
					name: data.name

				})
				.then(() => {
					console.log("Document successfully updated!");
				})
				.catch((error) => console.error(error));
		} else {
			const storageRef = app.storage().ref();
			const filePath = storageRef.child(data.name);
			await filePath.put(selectedFile);
			// eslint-disable-next-line
			const url = await filePath.getDownloadURL();
			filePath
				.getDownloadURL()
				.then((url) => {
					app
						.firestore()
						.collection("/portafolio")
						.add({
							...data,
							imageURL: url,
						});
				})
				.then(() => {
					getData();
					window.alert("subido correctamente");
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


