import React, {useState} from 'react'
import Header from '../../components/header'
function Calculator() {
    const [displayEquals, setDisplayEquals] = useState('')
    const [displayOperator, setDisplayOperator] = useState("")
    const [currentNum, setCurrentNum] = useState("")
    const [numOne, setNumOne] = useState([])
    const [numTwo, setNumTwo] = useState("")
    const [numThree, setNumThree] = useState("")
    const [operatorStatus, setOperatorStatus] = useState(0)
    const [addStatus, setAddStatus] = useState(false)
    const [minusStatus, setMinusStatus] = useState(false)
    const [multiplyStatus, setMultiplyStatus] = useState(false)
    const [divideStatus, setDivideStatus] = useState(false)
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let operators = ["c", "+", "-", "*", "/", '=']
   
  
    const add = (x, y) => x + y
    return(
        <>
        <Header/>
        <div>
            <h1 className="calc-header">Calculator</h1>
            <div className="calc-wrapper">
                <div className="calc-num">
                    {`${numTwo} ${displayOperator} ${numThree}` }         
                </div>
                <div className="calc-equal">
                    {displayEquals}
                </div>
                <div className="calc-answer">
                    {currentNum}
                </div>
               
                <div className="nums"> 
                    {nums.map(num => {
                        return <button className="eachnum" onClick={()=> {
                            setDisplayEquals('')
                            if(operatorStatus === 0) {
                                numOne.push(num.toString())
                                setNumTwo(parseInt(numOne.reduce(add, '')))
                               
                            } 
                            
                           else if (operatorStatus === 1) {
                               numOne.push(num.toString())
                               
                               setNumThree(parseInt(numOne.reduce(add, '')))
                               
                           } 
                           
                           else if (operatorStatus === 2) {
                               numOne.push(num.toString())
                            setNumThree(parseInt(numOne.reduce(add, '')))
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
                         onClick={(e) => {
                             setNumOne([])

                             if (operatorStatus === 0) {
                             setOperatorStatus(1)
                             }
                           
                            if (symbol === "+" ) {
                                setAddStatus(true)
                                setDisplayOperator(symbol)
                            }

                            else if (symbol === "-") {
                                setMinusStatus(true)
                                setDisplayOperator(symbol)
                            }
                            else if (symbol === "*") {
                                setMultiplyStatus(true)
                                setDisplayOperator(symbol)
                            }
                            else if (symbol === "/") {
                                setDivideStatus(true)
                                setDisplayOperator(symbol)
                            }

                            else if (symbol === "=") {
                                setOperatorStatus(2)
                                setNumOne([])
                                setDisplayEquals('=')
                               
                            }

                            if (symbol === "=" && addStatus) {
                                setCurrentNum(numTwo + numThree)
                                setAddStatus(false)
                               
                            } else if(symbol === "=" && minusStatus) {
                                setCurrentNum(numTwo - numThree)
                                setMinusStatus(false)
                            } 
                             else if(symbol === "=" && multiplyStatus) {
                                setCurrentNum(numTwo * numThree)
                                setMultiplyStatus(false)
                            } 
                             else if(symbol === "=" && divideStatus) {
                                setCurrentNum((numTwo / numThree).toFixed(2))
                                setDivideStatus(false)
                                
                            } 

                         if (operatorStatus === 2 && symbol === "=") {
                            setCurrentNum(eval(`${numTwo} ${displayOperator} ${numThree}`))
                        }
                            else if (operatorStatus === 2 && numThree) {
                                setNumTwo(eval(`${numTwo} ${displayOperator} ${numThree}`))
                                setNumThree('')
                                setOperatorStatus(1)
                            }

                            if(symbol === "c") {
                                setOperatorStatus(0)
                                setDisplayOperator('')
                                setDisplayEquals('')
                                setNumOne([])
                                setCurrentNum('')
                                setNumTwo('')
                                setNumThree('')
                                setAddStatus(false)
                                setMinusStatus(false)
                                setMultiplyStatus(false)
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