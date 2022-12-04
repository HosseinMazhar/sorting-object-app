import { useState } from "react";

const AddingItemForm = ({dataHandler}) => {

    const [activeAdd, setActiveAdd] = useState(0);

    if (activeAdd === 0) {
        return (
            <div id="form-container" className="flex flex-col items-center justify-center w-1/2 h-16 mt-5 bg-blue-700 rounded-lg text-white">
                <button className="w-28 h-9 rounded-md bg-orange-600" onClick={() => {
                    setActiveAdd(1);
                }}>Add Item</button>
            </div>
        )
    } else {
        return (
            <div id="form-container" className="flex flex-col items-center justify-center w-1/2 h-96 mt-5 bg-blue-700 rounded-lg text-white">
                <form className="w-full h-full gap-6 flex flex-col items-center justify-center" onSubmit={(event)=>{
                    event.preventDefault();
                    dataHandler({
                        name: event.target[0].value,
                        number: event.target[1].value
                    })
                    event.target[0].value = '';
                    event.target[1].value = '';
                }}>
                <input type="text" className="text-black rounded-md w-72 h-8 p-3" placeholder="enter a name" required/>
                <input type="number" className="rounded-md text-black w-72 h-8 p-3" required/>
                <input type="submit" value={"Add Item"} className="w-28 h-9 mt-6 rounded-md bg-orange-600 cursor-pointer"/>
                </form>
            </div>
        )
    }

}

export default AddingItemForm;