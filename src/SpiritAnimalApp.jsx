import {useCallback, useState} from 'react'
import WorkflowForm from './components/SpiritAnimalForm0.jsx'

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

    const nextStep = useCallback(() => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }, [workflow]);

    const myFunction = () => {
        alert("Hi");
    }


    return (
        <>
            <WorkflowForm workflow={workflow} handleClick={nextStep} />
        </>
    )
}

export default SpiritAnimalApp