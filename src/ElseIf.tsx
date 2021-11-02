import React from 'react'
import { Template } from './Template'
interface ElseIfProps {
    condition: boolean
}
export const ElseIf: React.FC<ElseIfProps> = ({ condition, children }) => {
    return <Template>{condition && children}</Template>
}
