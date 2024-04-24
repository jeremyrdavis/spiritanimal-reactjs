import { useState } from 'react'

function SpiritAnimalApp() {

    const [workflow, setWorkflow] = useState({
        id: 237,
        step: 0,
        name: '',
        animalName: '',
        whatIs: '',
        poem: '',
        updatedPoem: '',
        liked: false,
        feedback: ''
    });

    const nextStep = () => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }


    return (
        <>
            <div>
                <h1>Spirit Animal App</h1>
                <h2>{ workflow.step }</h2>
            </div>
            <div className="card">
                <button onClick={nextStep}>
                    Next
                </button>
                <p>
                    Edit <code>src/SpiritAnimalApp.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default SpiritAnimalApp