import { useState } from "react";

const Image = ({ ...data }) => {
  const [isLoding, setIsLoding] = useState(true);

  //   <div
  //   className='d-flex align-items-center justify-content-center border border-danger'
  // >
  //   <div className=' spinner-border m-5 fw-bold fs-5'>
  //   </div>
  // </div>

  console.log('img=rerender');

  setTimeout(() => {
    setIsLoding(false);
  }, 2000)
  return (

    <div className="col-md-6 col-sm-12 col-lg-4 border border-danger ">
      {
        isLoding ? (
          <div
            className='d-flex align-items-center justify-content-center'
          >
            <div className=' spinner-border m-5 fw-bold fs-5'>
            </div>
          </div>
        ) : (
          <img
            className="img-fluid"
            src={`${data.download_url}`}
            onClick={() => console.log("call")} />
        )
      }

    </div>

  )

}
export default Image;