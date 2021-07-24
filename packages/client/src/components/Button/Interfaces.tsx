import { ReactNode } from "react";

export interface ButtonStylesI {
    config: 'primary' | 'secondary' | 'ghost'
}

export interface ButtonI {
    config: 'primary' | 'secondary' | 'ghost'
    children: ReactNode
    onClick: () => void
}