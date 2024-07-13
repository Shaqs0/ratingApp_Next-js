import { HtagProps } from "./Htag.props";

export function Htag ({ tag, children }: HtagProps) {
    return (
        <h1>{children}</h1>
    )
};