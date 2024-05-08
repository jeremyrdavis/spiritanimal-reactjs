import {useCallback, useState} from 'react'
import WorkflowForm from './components/SpiritAnimalForm0.jsx'
import { assignSpiritAnimal, whatIsMySpiritAnimal, aPoemAboutMySpiritAnimal, anotherPoemAboutMySpiritAnimal, likeMySpiritAnimal, submitFeedbackAboutThisDemo } from './Backend'

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
        let result = await assignSpiritAnimal(e.target.name.value);
        console.log(result);
        let spiritAnimal = result.spiritAnimal;
        let workflowId = result.id;
        console.log(spiritAnimal);
        setWorkflow({...workflow, id: workflowId, name: e.target.name.value, animalName: spiritAnimal, step: workflow.step + 1 });
    }, [workflow]);

    const whatIsThisAnimal = useCallback(async (e) => {
        e.preventDefault();
        let result = await whatIsMySpiritAnimal(workflow.id);
        console.log(result);
        let whatIs = result.whatIs;
        setWorkflow({...workflow, whatIs: whatIs, step: workflow.step + 1 });
    }, [workflow]);

    const getPoem = useCallback(async () => {
        let result = await aPoemAboutMySpiritAnimal(workflow.id)
        console.log(result);
        let poem = result.poem;
        setWorkflow({...workflow, poem: poem, step: workflow.step + 1 });
    }, [workflow]);

    const addToPoem = useCallback(async () => {
        let result = await anotherPoemAboutMySpiritAnimal(workflow.id)
        console.log(result);
        let updatedPoem = result.updatedPoem;
        setWorkflow({...workflow, updatedPoem: updatedPoem, step: workflow.step + 1 });
    }, [workflow]);

    const submitFeedback = useCallback(async (e) => {
        e.preventDefault();
        console.log("feedback: ", e.target.feedback.value);
        let result = await submitFeedbackAboutThisDemo(workflow.id, e.target.feedback.value);
        console.log(result);
        let feedback = result.feedback;
        setWorkflow({...workflow, feedback: feedback, step: workflow.step + 1 });
    }, [workflow]);

    const handleBye = useCallback((e) => {
        e.preventDefault();
        setWorkflow({...workflow, step: 1 });
    }, [workflow]);

    const nextStep = useCallback(() => {
        setWorkflow({...workflow, step: workflow.step + 1 });
    }, [workflow]);

    const handleLike = useCallback(async () => {
        let result = await likeMySpiritAnimal(workflow.id);
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