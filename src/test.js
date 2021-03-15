import {useEffect} from 'react';


const Test = () =>
{
    useEffect(() =>{
    console.log("test Running");

    return () => console.log("unmount");
    }, []);
return <h1> Test Component </h1>;
};

export default Test;