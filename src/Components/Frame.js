import { useState, useContext, useReducer, useEffect } from 'react'
import Image from './image'
import { AllImgArrContext, SetCurrentPageContext } from '../App'

const Frame = ({ setEvent }) => {

    console.log("Frame");
    const AllImgArr = useContext(AllImgArrContext);
    const setCurrentPage = useContext(SetCurrentPageContext);
    const [imgArr, setImgArr] = useState([]);
    const [index, setIndex] = useState({ firstIndex: 0, lastIndex: 6 });


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
        if (AllImgArr.length)
            setData()
       
    }, [AllImgArr])

    return (
        <div className="frame row">
            {imgArr.map((img) => <Image className="border border-danger" {...img} />)}
        </div>
    );
}

export default Frame;