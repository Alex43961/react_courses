import { useState } from 'react';
import generateRandomNumber from '../utils/generateRandomNum';

function RandomNumber({maxNum}) {
    const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum));
    const changeRandomNumber = () => {
        setRandomNum(generateRandomNumber(maxNum));
    }
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNumber}>Generate new random number</button>
        </div>
    )
}

export default RandomNumber