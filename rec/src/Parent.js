import rect from 'react'

function increment(){
    const [Age,setAge] =useState(25)
    const [Sal,setSal] =useState(55000)

    const incrementSal = () =>{
        setSal(Sal+1000)
    }

    const incrementAge = () =>{
        setAge(Age+1)
    }

    return(
        <div>
        <Title />
        <Count text="Age" count={Age} />
        <button handClick={incrementAge}>incrememtAge</button>
        <Count text="Salary" count={Sal} />
        <button handClick={incrementSal}>incrememtSal</button>
        </div>
    )

}


export default Parent