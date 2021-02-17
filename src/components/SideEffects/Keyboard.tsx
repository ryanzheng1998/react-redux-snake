import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { KeyPress } from '../../reduce/action'
import { rootStateType } from '../../reduce/reducers/root'

const KeyboardSideEffect: React.FC = () => {
    const dispatch = useDispatch()

    const selectKeyEventListenerCommand = (state: rootStateType) => state.command

    useEffect(() => {
        const keyPressEvent = (e: KeyboardEvent) => {
            dispatch(KeyPress(e.key))
        }

        window.addEventListener('keydown', keyPressEvent)

        return window.removeEventListener('keydown', keyPressEvent)

    }, [])

    return null
}

export default KeyboardSideEffect