export type DropdownProps = {
    label: React.ReactNode,
    children: React.ReactNode
}

export type DropdownSectionProps = {
    title: string,
    children: React.ReactNode
}

export type DropdownItemProps = {
    title: string,
    active: boolean,
    onClick?: () => void
}