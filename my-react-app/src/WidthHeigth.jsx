// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'

function WidthHeigthUseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event Listener Added');
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed')
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${heigth}`
    }, [width, heigth])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
    }


    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Heigth: {heigth}px</p>
        </div>
    )
    }

export default WidthHeigthUseEffect