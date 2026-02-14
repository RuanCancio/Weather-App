import { DropdownSectionProps } from "@/types/dropdown"

export default function DropdownSection ({title, children}: DropdownSectionProps){
    return (
        <div className="border-b py-1 flex flex-col border-gray-600 gap-y-1" >
            <p className="text-[13px] text-gray-500" >{title}</p>
            {children}
        </div>
    )
}