import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectNavbar } from '@/lib/slices/navbarSlice'

interface RouterProps {
    children: JSX.Element
}
function Routing(props: RouterProps) {
    const { children } = props

    const { activeUrl } = useSelector(selectNavbar)
    const router = useRouter()

    useEffect(() => {
        router.push(activeUrl)
    }, [activeUrl])

    return children
}

export default Routing
