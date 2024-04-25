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

    // const getAnimalName = (event) => {
    //    event.preventDefault();
    //    setWorkflow({...workflow, name: 'Foo', step: workflow.step + 1 });
    // }
    const getSpiritAnimal = useCallback((e) => {
        setWorkflow({...workflow, name: 'Foo', animalName: 'Firefox', step: workflow.step + 1 });
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

    const myFunction = () => {
        alert("Hi");
    }


    return (
        <>
            <WorkflowForm workflow={workflow} handleClick={getSpiritAnimal} handleLike={handleLike}/>
        </>
    )
}

export default SpiritAnimalApp