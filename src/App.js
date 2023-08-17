import {useState} from 'react';
import './App.css';
import GoogleLoginButton from "./GoogleLoginButton";

export default function App() {
    const [globalCount, setGlobalCount] = useState(0);

    function handleClick() {
        setGlobalCount(globalCount + 1);
    }

    return (
        <>
            <GoogleLoginButton/>

            <div>
                <h1>Welcome to my app</h1>
                <MyButton1/>
            </div>
            <hr/>

            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <hr/>

            {content}
            <div>
                {isLoggedIn ? (
                    <MyButton1/>
                ) : (
                    <MyButton2/>
                )}
            </div>
            <div>
                {isLoggedIn && <MyButton1/>}
            </div>
            <hr/>

            <ul>{listItems}</ul>
            <hr/>

            <MyButton3 count={globalCount} onClick={handleClick}/>
            <MyButton3 count={globalCount} onClick={handleClick}/>
        </>
    );
}

function MyButton1() {

    function handleClick() {
        alert('I am first Button');
    }

    return (
        // (X) onClick={handleClick()}
        <button onClick={handleClick}>
            I'm a button111!
        </button>
    );
}

function MyButton2() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            I'm a button222 Clicked {count} times
        </button>
    );
}

function MyButton3({count, onClick}) {
    return (
        <button onClick={onClick}>
            I have global count {count}
        </button>
    );
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

let content;
let isLoggedIn = false;
if (isLoggedIn) {
    content = <MyButton1/>;
} else {
    content = <MyButton2/>;
}

const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
];

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);