import { useEffect } from "react"
import { useState } from "react"

const useAuth = (user) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        let cancelled = false;
        setError(null);
        if (user) {
            ;(async () => {
                setLoading(true)
                try {
                const response = await fetch("./.netlify/functions/fauna")
                if (!response.ok) {
                    const errorText = await response.text()
                    throw new Error(`Failed to fetch user data: ${errorText}`)
                }
                const body = await response.json();
                if (!cancelled) {
                    setData(body.data)
                }
                } catch (error) {
                setError(error)
                } finally {
                setLoading(false)
                }
            })()
        } else {
            setData([])
            setLoading(false)
        }
        return () => {
            cancelled = true
        }
    }, [user])

    return { data, loading, error }
}

export default useAuth