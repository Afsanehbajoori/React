
// code snippet to create functional component is 'rfce'



import React from 'react'

function FunctionClick() {
    function clickHanddler() {
        console.log('Button clicked!')
    }

    return (
        <div>
            <button onClick={clickHanddler}>Click</button>
            {/* remmber that clickHandler have to be without () beacaue its an event not method and it has to work after we click on the button  */}
        </div>
    )
}

export default FunctionClick


