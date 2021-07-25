import { ReactNode } from "react";

export interface DataGridI {
    data: {
        map: ({ }) => JSX.Element
    }
    type: String
}