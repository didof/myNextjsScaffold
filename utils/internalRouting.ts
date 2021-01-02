import { pushByIndex, pushByUrl } from '@/lib/slices/navbarSlice'
import { ensureIsClose } from '@/lib/slices/sideDrawSlice'

export function internalPushByIndex(dispatch, index: number) {
    dispatch(ensureIsClose())
    dispatch(pushByIndex({ index }))
}

export function internalPushByUrl(dispatch, url: string) {
    dispatch(ensureIsClose())
    dispatch(pushByUrl({ url }))
}