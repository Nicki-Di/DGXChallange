import "../App.css";

export default function DGXDropItem({item}) {
    return (
        <div className = "item size text">
            <img src={item.img} className={"car-img"}/>
            {item.name}
        </div>
    )
}