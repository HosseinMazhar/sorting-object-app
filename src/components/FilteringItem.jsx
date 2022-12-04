const FilteringItem = ({sorter}) => {

    return (
        <div id="container" className="flex flex-row items-center justify-center w-1/2 h-16 mt-5 bg-yellow-800 rounded-lg text-white">
                <select id="countries" onChange={(event)=>{
                    console.log(event.target.value);
                    switch (event.target.value) {
                        case 'upToDown':
                            sorter('upToDown');
                            break;
                        case 'DownToUp':
                            sorter('DownToUp');
                            break;
                        default:
                            break;
                    }
                }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Choose a Filter</option>
                    <option value="upToDown">Highest to Low</option>
                    <option value="DownToUp">Lowest to High</option>
                </select>
        </div>
    )
}

export default FilteringItem;