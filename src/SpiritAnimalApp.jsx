import {useCallback, useState} from 'react'
import WorkflowForm from './components/SpiritAnimalForm0.jsx'

function SpiritAnimalApp() {

    const [workflow, setWorkflow] = useState({
        id: 237,
        step: 0,
        name: null,
        animalName: null,
        whatIs: null,
        poem: null,
        updatedPoem: null,
        liked: false,
        feedback: null
    });

    const getSpiritAnimal = useCallback((e) => {
        e.preventDefault();
        setWorkflow({...workflow, name: e.target.name.value, animalName: 'Firefox', step: workflow.step + 1 });
    }, [workflow]);

    const getPoem = useCallback(() => {
        setWorkflow({...workflow, poem: 'Firefoxes are red, \nThey are not blue, \nThey are not green, \nThey are red.', step: workflow.step + 1 });
    }, [workflow]);

    const addToPoem = useCallback(() => {
        setWorkflow({...workflow, updatedPoem: 'Firefoxes are red, \nThey are not blue, \nThey are not green, \nThey are red. Also Taylor Swift.', step: workflow.step + 1 });
    }, [workflow]);

    const submitFeedback = useCallback((e) => {
        setWorkflow({...workflow, feedback: e.feedback, step: workflow.step + 1 });
    }, [workflow]);

    const nextStep = useCallback(() => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }, [workflow]);

    const handleLike = useCallback(() => {
        setWorkflow({...workflow, liked: true });
    }, [workflow]);

    const callbacks = {
        getSpiritAnimal,
        getPoem,
        addToPoem,
        submitFeedback,
        nextStep,
        handleLike
    }

    return (
        <>
            <WorkflowForm workflow={workflow} callbacks={callbacks} />
        </>
    )
}

export default SpiritAnimalApp