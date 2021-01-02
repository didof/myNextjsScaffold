import { configureStore } from '@reduxjs/toolkit'

import bootSlice from '@/lib/slices/bootSlice'
import topItemsSlice from '@/lib/slices/topItemsSlice'
import navbarSlice from '@/lib/slices/navbarSlice'
import sideDrawSlice from '@/lib/slices/sideDrawSlice'

export default configureStore({
    reducer: {
        boot: bootSlice,
        topItems: topItemsSlice,
        navbar: navbarSlice,
        sideDraw: sideDrawSlice
    },
    devTools: true
})