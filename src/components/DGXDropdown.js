import {useEffect, useRef, useState} from "react";

export default function ({items, setResult, list, text, DGXDropItem}) {
    const [showList, setShowList] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (showList && ref.current && !ref.current.contains(e.target)) {
                setShowList(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showList])

    const handleClick = () => {
        setShowList(true)
    };
    const selectItem = (item) => {
        setShowList(false)
        setResult(item.key)
    };


    return (
        <div className = "drop-down" ref = {ref}>
            <div
                className = {`input size text color ${showList && "active"}`}
                onClick = {handleClick}
            >
                {text}
            </div>
            {showList && (
                <div className = "list size color">
                    {
                        list.map(item => {
                                return (
                                    <div onClick = {() => selectItem(item)} key={item.key}>
                                        {
                                            DGXDropItem({item})
                                        }
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            )}
        </div>
    );
};
