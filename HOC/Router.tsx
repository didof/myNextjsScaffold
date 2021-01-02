import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectNavbar } from '@/lib/slices/navbarSlice'
import { selectBoot } from '@/lib/slices/bootSlice'

interface RouterProps {
    children: JSX.Element
}
function Routing(props: RouterProps) {
    const { children } = props
    const router = useRouter()
    
    const boot = useSelector(selectBoot)
    useEffect(() => {
        if(process.env.NODE_ENV === 'production' && boot.prefetchUrls && boot.prefetchUrls.length > 0) {
            const { prefetchUrls } = boot
            if(prefetchUrls.length < 1) return;
            prefetchUrls.forEach(function(url) {
                router.prefetch(url)
            })
        }
    }, [])

    const { activeUrl } = useSelector(selectNavbar)
    useEffect(() => {
        router.push(activeUrl)
    }, [activeUrl])

    return children
}

export default Routing
