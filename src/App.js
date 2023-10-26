import './App.css';

// import '../cssFiles/Pagination.css'
import { useState, useEffect, createContext } from 'react'
import Frame from './Components/Frame'
import axios from 'axios'

const AllImgArrContext = createContext(null);
const SetCurrentPageContext = createContext('');

const App = () => {
  const [allImgArr, setAllImgArr] = useState([]);
  const [CframeNumber, setCframeNumbe] = useState(1);
  const [TframeNumber, setTframeNumbe] = useState(0);
  const [props, setProps] = useState({});
  // const [isLoding, setIsLoding] = useState(true);

  async function get_allData() {
    let res = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    setAllImgArr(res.data);
    setTframeNumbe(Math.ceil(res.data.length / 6));
  }

  const setEvent = (props) => {
    console.log(props);
    setProps(props)
  }

  useEffect(() => {
    get_allData();
  }, [])


  return (

    <div className='main-container'>


      <SetCurrentPageContext.Provider value={setCframeNumbe}>
        <div className='container text-center'>
        
          <AllImgArrContext.Provider value={allImgArr} >
            <Frame setEvent={setEvent} />
          </AllImgArrContext.Provider>
          
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <button
            className="btn btn-danger fa-solid fa-circle-left fs-3 "
            onClick={props.preFrame}
          >
          </button>

          <span className="number fw-bold fs-5 m-1">
            <p>{CframeNumber} of {TframeNumber}</p>
          </span>

          <button
            className=" btn btn-danger fs-3 fa-solid fa-circle-right"
            onClick={props.nextFrame}
          >
          </button>
        </div>
      </SetCurrentPageContext.Provider >

    </div >

  );
}
// export default Pagination;
export { AllImgArrContext, SetCurrentPageContext }

export default App;
