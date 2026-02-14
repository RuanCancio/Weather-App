'use client'

import { useState } from "react"
import Image from "next/image"
import DropdownSection from "./DropdownSection"
import DropdownItem from "./DropdownItem"

export default function Dropdown() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [celcius, setCelcius] = useState(false)
    const [fahrenheit, setFahrenheit] = useState(false)
    const [kmh, setKmh] = useState(false)
    const [mph, setMph] = useState(false)
    const [millimeters, setMillimeters] = useState(false)
    const [inches, setInches] = useState(false)
    return (
        <div className="flex flex-col gap-y-2 relative" >
            <div className="flex gap-x-1 bg-gray-700 px-2 py-1 w-max rounded-md items-center cursor-pointer self-end" onClick={() => setMenuOpen(!menuOpen)}  >
                <Image src="/images/icon-units.svg" alt="Menu icon" width={16} height={16} />
                <p className="text-white text-sm" >Units</p>
                <Image src="/images/icon-dropdown.svg" alt="" width={13} height={8} />
            </div>

            {
                menuOpen && (
                <div className="text-white bg-gray-700 p-1 px-2 rounded-md text-sm absolute top-10 right-0 w-[200px]" >
                    <button className="py-1 hover:bg-gray-600 cursor-pointer rounded-md w-full text-start px-1" >Switch to imperial</button>
                    <DropdownSection title="Temperature">
                        <DropdownItem title="Celsius (ºC)" active={celcius} onClick={() => setCelcius(!celcius)} />
                        <DropdownItem title="Fahrenheit (ºF)" active={fahrenheit} onClick={() => setFahrenheit(!fahrenheit)} />
                    </DropdownSection>

                    <DropdownSection title="Wind Speed">
                        <DropdownItem title="km/h" active={kmh} onClick={() => setKmh(!kmh)} />
                        <DropdownItem title="mph" active={mph} onClick={() => setMph(!mph)} />
                    </DropdownSection>

                    <DropdownSection title="Precipitation">
                        <DropdownItem title="Millimeters (mm)" active={millimeters} onClick={() => setMillimeters(!millimeters)}/>
                        <DropdownItem title="Inches (in)" active={inches} onClick={() => setInches(!inches)}/>
                    </DropdownSection>
                </div>)
            }
        </div>
    )
}