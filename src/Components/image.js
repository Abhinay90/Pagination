// import { useState } from "react";

const Image = ({ ...data }) => {
  
  return (

    <div className="col-md-6 col-sm-12 col-lg-4">
          <img
            className="img-fluid p-3"
            src={`${data.download_url}`}
           />
    </div>

  )

}
export default Image;