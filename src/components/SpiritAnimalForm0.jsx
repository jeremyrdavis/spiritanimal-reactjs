import React from "react";

const WorkflowForm = ({workflow, callbacks}) => {
    if(workflow.step === 1) {
        return(
            <>
                <WorkflowForm01 workflow={workflow} handleClick={callbacks.getSpiritAnimal} handleLike={callbacks.handleLike} />
            </>
        );
    }else if(workflow.step === 2){
        return(
            <>
                <WorkflowForm02 workflow={workflow} handleClick={callbacks.whatIsThisAnimal} handleLike={callbacks.handleLike} />
            </>
        );
    }else if(workflow.step === 3){
        return(
            <>
                <WorkflowForm03 workflow={workflow} handleClick={callbacks.getPoem} handleLike={callbacks.handleLike} />
            </>
        );
    }else if(workflow.step === 4){
        return(
            <>
                <WorkflowForm04 workflow={workflow} handleClick={callbacks.addToPoem} handleLike={callbacks.handleLike} />
            </>
        );
    }else if(workflow.step === 5){
        return(
            <>
                <WorkflowForm05 workflow={workflow} handleClick={callbacks.nextStep} handleLike={callbacks.handleLike} />
            </>
        );
    }else if(workflow.step === 6 ){
        return(
            <>
                <WorkflowForm06 workflow={workflow} handleClick={callbacks.submitFeedback} />
            </>
        );
    }else if(workflow.step === 7){
        return(
            <>
                <WorkflowThankYou workflow={workflow} handleClick={callbacks.handleBye} />
            </>
        );
    }
}

const WorkflowForm01 = ({ workflow, handleClick }) => {
    return (
        <>
            <h1>Get Your Spirit Animal!</h1>
            <form id="nameform" onSubmit={handleClick}>
            <label>Name:</label>
            <input type="text" name="name" />
            <button type="submit" >Get My Spirit Animal!</button>
            </form>
            <WorkflowDisplay workflow={workflow} />
        </>
    );
}

const WorkflowForm02 = ({workflow, handleClick, handleLike}) => {
    return (
            <div>
                <h1>Your Animal is { determineIndefiniteArticle(workflow.animalName) } { workflow.animalName }</h1>
                <p>{ workflow.whatIs }</p>
                <button onClick={handleLike}>I Am { determineIndefiniteArticle(workflow.animalName) } { workflow.animalName }</button>
                <button onClick={handleClick}>I'm Not Sure</button>
                <WorkflowDisplay workflow={workflow} />
            </div>
    );

}

const WorkflowForm03 = ({workflow, handleClick, handleLike}) => {
    return (
            <div>
                <h1>What Is My Animal?</h1>
                <p>{ workflow.whatIs }</p>
                <button onClick={handleLike}>I'm Happy with My {workflow.animalName}</button>
                <button onClick={handleClick}>I'm Not Convinced</button>
                <WorkflowDisplay workflow={workflow} />
            </div>
    );
}

const WorkflowForm04 = ({workflow, handleClick, handleLike}) => {
    return (
        <div>
            <h1>Does This Poem Change Your Mind?</h1>
            <p>{ workflow.poem }</p>
            <button onClick={handleClick}>I Like My { workflow.animalName }</button>
            <button onClick={handleClick}>I'm Still Not Convinced</button>
            <WorkflowDisplay workflow={workflow} />
        </div>
    );
}

const WorkflowForm05 = ({workflow, handleClick, handleLike}) => {
    return (
        <div>
            <h1>How About This Poem?</h1>
            <p>{ workflow.updatedPoem }</p>
            <button onClick={handleLike}>I Am a Wild { workflow.animalName }!</button>
            <button onClick={handleClick}>Not Really</button>
            <WorkflowDisplay workflow={workflow} />
        </div>
    );
}

const WorkflowForm06 = ({workflow, handleClick}) => {
    return (
        <div>
            <h1>What Did You Think of This App?</h1>
            <form id={ "feedback-form-" + workflow.id } onSubmit={handleClick} >
                <input type="text" name="feedback" />
                <button type="submit" >Submit Feedback</button>
            </form>
            <WorkflowDisplay workflow={workflow} />
        </div>
    );
}

const WorkflowDisplay = ({workflow}) => {
    return (
        <div>
            <h1>Workflow</h1>
            <p>Step: {workflow.step}</p>
            <p>Name: {workflow.name}</p>
            <p>Animal Name: {workflow.animalName}</p>
            <p>What Is: {workflow.whatIs}</p>
            <p>Poem: {workflow.poem}</p>
            <p>Updated Poem: {workflow.updatedPoem}</p>
            <p>Liked: {workflow.liked}</p>
            <p>Feedback: {workflow.feedback}</p>
        </div>
    );
}

const WorkflowThankYou = ({workflow, handleClick}) => {
    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={handleClick}>Bye</button>
            <WorkflowDisplay workflow={workflow} />
        </div>
    );
}

const determineIndefiniteArticle = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
}

export default WorkflowForm
