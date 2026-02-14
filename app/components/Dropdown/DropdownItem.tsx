import { DropdownItemProps } from "@/types/dropdown"
import Image from "next/image"

export default function DropdownItem({title, active, onClick}: DropdownItemProps) {
    return (
        <div className="flex justify-between p-1 hover:bg-gray-600 rounded-md cursor-pointer" onClick={onClick} >
            <p>{title}</p>
            {
                active && <Image src="/images/icon-checkmark.svg" alt="icon check" width={14} height={11}/>
            }
        </div>
    )
}