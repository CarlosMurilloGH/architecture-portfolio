import { Button, Modal } from '@mui/material';
import React from 'react';
import logo512 from "./logo512.png";

function Prueba2() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};

  return (
    <div>
            <Button variant="text" color="primary" onClick={handleOpen}>
                <img src={logo512} alt="asd" />
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div>
                  <img src={logo512} alt="asd" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                    </p>
                </div>
            </Modal>
        </div>
  )
}

export default Prueba2