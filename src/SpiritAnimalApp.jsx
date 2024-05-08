import {useCallback, useState} from 'react'
import WorkflowForm from './components/SpiritAnimalForm0.jsx'
import { backend01, backend02, backend03, backend04, backend05, backend06 } from './Backend'

function SpiritAnimalApp() {

    const [workflow, setWorkflow] = useState({
        id: null,
        step: 1,
        name: null,
        animalName: null,
        whatIs: null,
        poem: null,
        updatedPoem: null,
        liked: false,
        feedback: null
    });

    const getSpiritAnimal = useCallback( async(e) => {
        e.preventDefault();
        let result = await backend01(e.target.name.value);
        console.log(result);
        let spiritAnimal = result.spiritAnimal;
        let workflowId = result.id;
        console.log(spiritAnimal);
        setWorkflow({...workflow, id: workflowId, name: e.target.name.value, animalName: spiritAnimal, step: workflow.step + 1 });
    }, [workflow]);

    const whatIsThisAnimal = useCallback(async (e) => {
        e.preventDefault();
        let result = await backend02(workflow.id);
        console.log(result);
        let whatIs = result.whatIs;
        setWorkflow({...workflow, whatIs: whatIs, step: workflow.step + 1 });
    }, [workflow]);

    const getPoem = useCallback(async () => {
        let result = await backend03(workflow.id)
        console.log(result);
        let poem = result.poem;
        setWorkflow({...workflow, poem: poem, step: workflow.step + 1 });
    }, [workflow]);

    const addToPoem = useCallback(async () => {
        let result = await backend04(workflow.id)
        console.log(result);
        let updatedPoem = result.updatedPoem;
        setWorkflow({...workflow, updatedPoem: updatedPoem, step: workflow.step + 1 });
    }, [workflow]);

    const submitFeedback = useCallback((e) => {
        e.preventDefault();
        setWorkflow({...workflow, feedback: e.target.feedback.value, step: workflow.step + 1 });
    }, [workflow]);

    const handleBye = useCallback((e) => {
        e.preventDefault();
        setWorkflow({...workflow, step: 1 });
    }, [workflow]);

    const nextStep = useCallback(() => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }, [workflow]);

    const handleLike = useCallback(async () => {
        let result = await backend05(workflow.id);
        console.log(result);
        let liked = result.liked;
        setWorkflow({...workflow, liked: liked, step: 6 });
    }, [workflow]);

    const callbacks = {
        getSpiritAnimal,
        whatIsThisAnimal,
        getPoem,
        addToPoem,
        submitFeedback,
        handleBye,
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