import React, {useState} from 'react'
import Header from '../../components/header'
function Calculator() {
    const [displayOperator, setDisplayOperator] = useState("-")
    const [currentNum, setCurrentNum] = useState("-")
    const [numOne, setNumOne] = useState([])
    const [numTwo, setNumTwo] = useState("-")
    const [numThree, setNumThree] = useState("-")
    const [operatorStatus, setOperatorStatus] = useState(0)
    const [addStatus, setAddStatus] = useState(false)
    const [minusStatus, setMinusStatus] = useState(false)
    const [multiplyStatus, setMultiplyStatus] = useState(false)
    const [divideStatus, setDivideStatus] = useState(false)
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let operators = ["+", "-", "*", "/", '=']
    console.log(currentNum)
  
    const add = (x, y) => x + y
    return(
        <>
        <Header/>
        <div>
            <h1 className="calc-header">Calculator</h1>
            <div className="calc-wrapper">
                <div className="calc-num">
                    {`${numTwo} ${displayOperator} ${numThree} =` }         
                </div>
                <div className="calc-answer">
                    {currentNum}
                </div>
               
                <div className="nums"> 
                    {nums.map(num => {
                        return <button className="eachnum" onClick={()=> {
                            if(operatorStatus === 0) {
                                numOne.push(num.toString())
                                setNumTwo(parseInt(numOne.reduce(add, '')))
                                console.log(numOne)
                                console.log(numTwo)
                            } 
                            
                           else if (operatorStatus === 1) {
                               numOne.push(num.toString())
                               console.log(numOne)
                               setNumThree(parseInt(numOne.reduce(add, '')))
                               console.log(numThree)
                           } 
                       }}key={num}> {num} </button> 
                     })}
                </div>
                <div className="operators-container"> 
                     {operators.map((symbol, index) => {
                         return (
                         <button 
                         key={symbol} 
                         className="operators" 
                         onClick={() => {
                             setOperatorStatus(1)
                            setNumOne([])
                            console.log(numTwo)
                            if (index === 0) {
                                setAddStatus(true)
                                setDisplayOperator(symbol)
                            }

                            if (index === 1) {
                                setMinusStatus(true)
                                setDisplayOperator(symbol)
                            }
                            if (index === 2) {
                                setMultiplyStatus(true)
                                setDisplayOperator(symbol)
                            }
                            if (index === 3) {
                                setDivideStatus(true)
                                setDisplayOperator(symbol)
                            }

                            if (index === 4) {
                                setOperatorStatus(0)
                                setNumOne([])
                                
                            }

                            if (index=== 4 && addStatus) {
                                setCurrentNum(numTwo + numThree)
                                setAddStatus(false)
                               
                            } else if(index=== 4 && minusStatus) {
                                setCurrentNum(numTwo - numThree)
                                setMinusStatus(false)
                            } 
                             else if(index=== 4 && multiplyStatus) {
                                setCurrentNum(numTwo * numThree)
                                setMultiplyStatus(false)
                            } 
                             else if(index=== 4 && divideStatus) {
                                setCurrentNum(numTwo / numThree)
                                setDivideStatus(false)
                                
                            } 

                        }}> 
                            {symbol} 
                         </button> 
                     )})}
                </div>
            </div>  
        </div>
    </>
    )
}

export default Calculator