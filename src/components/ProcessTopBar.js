import { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

export function ProcessTopBar() {
    const ref = useRef(null);

    useEffect(()=>{
        handleLoadSomething()
    }, [ref])

    const handleLoadSomething = () => {
        ref.current.continuousStart();
        setTimeout(() => {
            console.log("...loading something");
            ref.current.complete();
        }, 100);
    };

    return (
        <div>
            <LoadingBar color="#007cb8" ref={ref} />
        </div>
    )
}