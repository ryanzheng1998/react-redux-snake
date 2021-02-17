import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rootStateType } from '../../reduce/reducers/root'
import { GameTick } from '../../reduce/action'

const AnimationSideEffect: React.FC = () => {
    const dispach = useDispatch()

    const selectCommand = (state: rootStateType) => state.command
    const command = useSelector(selectCommand)

    const animationRef = useRef(0)

    const step = (t1: number) => (t2: number) => {
        if (t2 - t1 > 50) {
            dispach(GameTick({x: Math.random(), y: Math.random()}))
            animationRef.current = requestAnimationFrame(step(t2))
        } else {
            animationRef.current = requestAnimationFrame(step(t1))
        }
    }
    
    useEffect(() => {
        if(command.gameTick === true) {
            animationRef.current = requestAnimationFrame(step(0))
        }
        return () => cancelAnimationFrame(animationRef.current)
    }, [command.gameTick])

                                           
    return null
}

export default AnimationSideEffect