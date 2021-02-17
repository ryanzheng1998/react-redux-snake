import React, { useEffect, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { Manager, Swipe } from 'hammerjs'
import { KeyPress } from '../../reduce/action'

interface propType {
    children: ReactNode
}

const TouchScrrenSideEffect: React.FC<propType> = (prop) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const element = document.getElementById('touchEvent')
        if (element) {
            const hammer = new Manager(element)
            const swipe =  new Swipe()

            hammer.add(swipe)

            hammer.on('swipe', (e) => {
                const direction = 
                      e.direction === 2
                        ? 'ArrowLeft'
                    : e.direction === 4
                        ? 'ArrowRight'
                    : e.direction === 8
                        ? 'ArrowUp'
                    : e.direction === 16
                        ? 'ArrowDown'
                        : ''

                dispatch(KeyPress(direction))
            })
        } else {
            throw Error('Touch Secrenn Side Effect Error')
        }
    }, [])

    return <div id='touchEvent'>
        {prop.children}
    </div>
}

export default TouchScrrenSideEffect