import { configureStore } from '@reduxjs/toolkit'

import topItemsReducer from '@/lib/slices/topItemsSlice'
import navbarSlice from '@/lib/slices/navbarSlice'

export default configureStore({
    reducer: {
        topItems: topItemsReducer,
        navbar: navbarSlice
    },
    devTools: true
})