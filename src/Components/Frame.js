import { useState, useContext, useReducer, useEffect } from 'react'
import Image from './image'
import { AllImgArrContext, SetCurrentPageContext } from '../App'












const Frame = ({ setEvent }) => {

    console.log("Frame");
    const AllImgArr = useContext(AllImgArrContext);
    const setCurrentPage = useContext(SetCurrentPageContext);
    const [imgArr, setImgArr] = useState([]);
    const [index, setIndex] = useState({ firstIndex: 0, lastIndex: 6 });
    const [isLoding, setIsLoding] = useState(true);


    function setData() {
        const temp = AllImgArr.slice(index.firstIndex, index.lastIndex)
        console.log("FirstTime=", index.firstIndex, index.lastIndex);
        console.log(temp);
        setImgArr(temp);
    }

    const nextFrame = () => {
        if (index.lastIndex < AllImgArr.length) {
            index.firstIndex += 6;
            index.lastIndex += 6;
        }
        else {
            alert("End")
            return
        }
        console.log('index.firstIndex=, index.lastIndex=', index.firstIndex, index.lastIndex);
        setCurrentPage(index.lastIndex / 6);
        setImgArr(AllImgArr.slice(index.firstIndex, index.lastIndex));
    }

    const preFrame = () => {
        if (index.firstIndex > 0) {
            index.firstIndex -= 6;
            index.lastIndex -= 6;
        } else {
            alert("First Frame")
            return
        }
        setCurrentPage(index.lastIndex / 6);
        setImgArr(AllImgArr.slice(index.firstIndex, index.lastIndex));

    }

    useEffect(() => {
        console.log('useEffect');
        setEvent({ nextFrame, preFrame });
        if (AllImgArr.length){
            setData();
            setIsLoding(false);
        }

    }, [AllImgArr])

    return (
        <>


            <div className="frame row" >{
                isLoding ? (
                    <div className='d-flex align-items-center justify-content-center '>
                        <div className=' spinner-grow m-5 fw-bold fs-5 text-danger'></div>
                        <div className=' spinner-grow m-5 fw-bold fs-5 text-danger'></div>
                        <div className=' spinner-grow m-5 fw-bold fs-5 text-danger'></div>
                    </div >
                ) : (
                    imgArr.map((img) => <Image {...img} />)
                )
            }
            </div>


        </>

    );
}

export default Frame;