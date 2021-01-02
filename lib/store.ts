import { configureStore } from '@reduxjs/toolkit'

import pageTransitionReducer from './slices/pageTransitionSlice'
import topItemsReducer from '@/lib/slices/topItemsSlice'
import navbarSlice from '@/lib/slices/navbarSlice'


export default configureStore({
    reducer: {
        pageTransition: pageTransitionReducer,
        topItems: topItemsReducer,
        navbar: navbarSlice
    },
    devTools: true
})