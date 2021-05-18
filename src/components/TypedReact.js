import {useEffect} from 'react';
import Typed from 'typed.js';

// Component to display an instruction

const TypedReact = ({text}) => {
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: text,
            typeSpeed: 50,
            smartBackspace: true,
            backSpeed: 40,
            loop: true,

        };

        // New Typed instance
        const typed = new Typed('#type-react', options);

        // Destroy Typed instance on unmounting the component to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, [text]);

    return (    
        <span id='type-react'></span>
    );
};

export default TypedReact;

