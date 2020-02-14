import React, { useEffect } from "react";

const hash = () => {

    useEffect(() => {
        fetch("https://api.netlify.com/build_hooks/5e46c14171b65b2676e068ce", { method: "POST" })
    }, [])

    return <div>Build Triggered!</div>
}

export default hash
