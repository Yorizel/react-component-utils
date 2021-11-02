import React, {useCallback, useEffect, useMemo} from 'react'
import { Template } from './Template'
interface IfElseProps {
    condition: boolean
}
export const IfElse: React.FC<IfElseProps> = ({ condition, children }) => {
    const childs = useMemo(() => [] as React.ReactNode[],[])
    const getChildren = useCallback(() => {
        React.Children.map(children,(child) => {
            childs.push(child)
        })
    },[])
    useEffect(() => {
        getChildren()
    },[])
    return <Template>{condition ? childs[0]: childs[1]}</Template>
}
