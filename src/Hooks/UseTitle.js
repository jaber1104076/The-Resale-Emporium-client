import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}--The Resale Emporium`
    }, [title])
}

export default useTitle;