"use client"
import Image from "next/image"
import { useState } from "react"

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const [inputFocus, setInputFocus] = useState(false)
    const [loading, setLoading] = useState(false)

    const HandleSubmit = (e:any) => {
        e.preventDefault()
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={HandleSubmit} className="flex flex-col gap-3" onFocus={()=> setInputFocus(true)} onBlur={() => setInputFocus(false)} >
                <div className={`flex items-center gap-3 px-7 w-100 py-4 rounded-[10px] bg-neutral-600/30 ${inputFocus? 'outline-2 outline-amber-100' : ""}`}>
                    <label htmlFor="Search">
                        <Image src="./images/icon-search.svg" alt="Search" width={24} height={24} />
                    </label>
                    <input type="text" autoComplete="off" id="Search" className="text-white flex-1 text-2xl w-full border-none outline-none" placeholder="Search for a place..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <button type="submit" className="cursor-pointer w-100 bg-blue-500 p-3 text-2xl text-white rounded-xl  ">Search</button>
            </form>
        </div>
    )
}

export default SearchBar