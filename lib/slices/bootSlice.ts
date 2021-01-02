import { createSlice } from '@reduxjs/toolkit'

import bootConfig from '@/configuration/boot.json'

interface BootInitialState {
    prefetchUrls?: string[]
}

const bootInitialState: BootInitialState = {}

if(bootConfig.enablePrefetch) {
    bootInitialState.prefetchUrls = bootConfig.prefetchUrls
}

const bootSlice = createSlice({
    name: 'boot',
    initialState: bootInitialState,
    reducers: {}
})

export const selectBoot = (state) => state.boot

export default bootSlice.reducer