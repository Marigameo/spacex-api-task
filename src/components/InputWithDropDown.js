export default function InputWithDropDown({ input, setInput, filter, setFilter, searchCapsules }) {
    return (
        <div className="relative mt-1 rounded-md shadow-sm input-search">
            <input
                type="text"
                name="price"
                id="price"
                value={input}
                onChange={(e) => {
                    console.log('value', e.target.value);
                    setInput(e.target.value)
                }}
                className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                    Search By
                </label>
                <select
                    id="currency"
                    name="currency"
                    value={filter}
                    onChange={(e) => {
                        console.log('value', e.target.value);
                        setFilter(e.target.value)
                    }}
                    className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="status">Status</option>
                    <option value="original_launch">Launch</option>
                    <option value="type">Type</option>
                </select>
            </div>
        </div>
    )
}
