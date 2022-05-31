import { Masonry } from "@mui/lab";
import React from "react";

export const MasonryGrid = (props) => {
	const { data} = props;


	return (
		<div className="productCard" >
      <Masonry columns={{xs: 1, sm: 2, md: 4}} spacing={1}>
        <div key={data.id}>
        <img
				className="productCardImg"
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
        </div>
      </Masonry>
		</div>
	);
};
