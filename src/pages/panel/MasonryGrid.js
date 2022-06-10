import React,{useState} from "react";
import { Masonry } from "@mui/lab";
import { Button, Modal } from "@mui/material";
import "./MasonryGrid.css;"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MasonryGrid = (props) => {

  const [open, setOpen]=useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

	const { data} = props;
  //https://codesandbox.io/s/gzsns?file=/src/App.js


	return (
		<div className="productCard" >
      <Masonry columns={{xs: 1, sm: 2, md: 4}} spacing={1}>

        <div key={data.id}>
        <Button variant="text" color="primary" onClick={handleOpen}>
        <img
        sx={style}
				className="productCardImg skeleton"
        src={`${data.imageURL}?w=162&auto=format`}
				alt={data.name}
				style={{ borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderTopLeftRadius:4,
          borderTopRightRadius:4,
          display: 'block',
          margin:'auto',
          width: '100%' }}
			  />
        </Button>
        </div>
        <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                    </p>
                </div>
            </Modal>
      </Masonry>
      <div className="skeleton"></div>
		</div>
	);
};
