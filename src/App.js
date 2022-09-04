import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import {useEffect, useState} from "react";
import dropItems from "./mock/drop-items.json"
import formData from "./mock/form-data.json"
import DGXDropItem from "./components/DGXDropItem";



function App() {

    const [result, setResult] = useState(formData.dropdown)
    const [text, setText] = useState("هیچ")
    //"یک مورد را انتخاب کنید"
    const findItem = (list, key) => {
        return list.filter(item => item.key === key)
    }
    useEffect(() => {
        setText(findItem(dropItems, result)[0].name)
    },[result])
    // const [result1, setResult1] = useState("")
    return (
        <div
            id = "app"
            className = "flex"
            style = {{backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")'}}
        >
            <DGXContainer className = "top">
                <DGXLogo className = "flex"/>
                    <DGXDropdown result = {result} setResult = {setResult} list={dropItems} text={text} DGXDropItem={DGXDropItem}/>
                    {/*<DGXDropdown result = {result1} setResult = {setResult1} list={list2}/>*/}
                <div className = "result">{text}</div>
            </DGXContainer>
        </div>
    );
}

export default App;
