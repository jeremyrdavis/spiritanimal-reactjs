import {useCallback, useState} from 'react'
import WorkflowForm from './components/SpiritAnimalForm0.jsx'

function SpiritAnimalApp() {

    const [workflow, setWorkflow] = useState({
        id: 237,
        step: 0,
        name: 'Jeremy',
        animalName: 'Firefox',
        whatIs: 'A Firefox is a red panda.',
        poem: 'Firfoxes are red, \nThey are not blue, \nThey are not green, \nThey are red.',
        updatedPoem: 'Firefoxes are red, \nThey are not blue, \nThey are not green, \nThey are red. Also Taylor Swift.',
        liked: false,
        feedback: 'Love it!'
    });

    const nextStep = useCallback(() => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }, [workflow]);

    const handleLike = useCallback(() => {
        setWorkflow({...workflow, liked: true });
    }, [workflow]);

    const myFunction = () => {
        alert("Hi");
    }


    return (
        <>
            <WorkflowForm workflow={workflow} handleClick={nextStep} handleLike={handleLike}/>
        </>
    )
}

export default SpiritAnimalApp