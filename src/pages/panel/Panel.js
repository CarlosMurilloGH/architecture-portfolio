import React,{ useState} from 'react';
import { storage } from '../../fb/fb';
import { ref, uploadBytes} from 'firebase/storage';
import {v4} from "uuid";
import { Input } from '@mui/material';


function Panel() {

  const [imageUpload, setImageUpload] = useState(null);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
     alert("imagen subida");
      });
    };


  return (
    <div className="App">
      <Input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
    </div>
  );
}

export default Panel