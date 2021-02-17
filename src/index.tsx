import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import View from './components/View'

import { Provider } from 'react-redux'
import store from './reduce/store'
import AnimationSideEffect from './components/SideEffects/Animation'
import KeyboardSideEffect from './components/SideEffects/Keyboard'
import TouchScrrenSideEffect from './components/SideEffects/TouchScreen'

ReactDom.render(
    <React.StrictMode>
        <Provider store={ store }>
            <TouchScrrenSideEffect>
                <AnimationSideEffect />
                <KeyboardSideEffect />
                <View />
            </TouchScrrenSideEffect>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)