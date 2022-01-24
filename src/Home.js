import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // lesson 9 stuff
    const [age, setAge] = useState(22);
    const [name, setName] = useState('Bob')

    const handleClick = () => {
        setAge(age+1);
    }
    const handleClick2 = () => {
        setAge(age-1);
    }
    const handleClick3 = () => {
        if (name === 'Bob') {
            setName('Joe');
        }
        else {
            setName('Bob');
        }
    }

    //lesson 20 stuff, making a custom hook
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All blogs"/>}
            
            
            <p>{ name } is { age } years old at the moment</p>
            <button onClick={handleClick} style={{marginRight: "10px", padding: "10px"}}>Increase age</button>
            <button onClick={handleClick2} style={{margin: "10px", padding: "10px"}}>Decrease age</button>
            <button onClick={handleClick3} style={{margin: "10px", padding: "10px"}}>Change name</button>
        </div>
    );
}
 
export default Home