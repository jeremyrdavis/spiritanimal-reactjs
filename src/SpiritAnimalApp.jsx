import {useCallback, useState} from 'react'
import SpiritAnimalForm0 from './components/SpiritAnimalForm0.jsx'

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
            <SpiritAnimalForm0 workflow={workflow} handleClick={nextStep} />
        </>
    )
}

export default SpiritAnimalApp