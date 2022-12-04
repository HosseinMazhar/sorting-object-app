const ItemCard = (props) => {
    return (
        <>
        <div id="container" className="flex flex-row items-center justify-center w-1/2 h-16 mt-5 bg-orange-800 rounded-lg text-white">
            <h3>{props.name}</h3>
            <h1>{props.number}</h1>
        </div>
        </>
    )
}

export default ItemCard;