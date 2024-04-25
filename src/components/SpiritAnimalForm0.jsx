import React from "react";

const WorkflowForm = ({workflow, handleClick, handleLike}) => {
    if(workflow.step === 0) {
        return(
            <>
                <WorkflowForm00 workflow={workflow} handleClick={handleClick} handleLike={handleLike} />
            </>
        );
    }else if(workflow.step === 1){
        return(
            <>
                <WorkflowForm01 workflow={workflow} handleClick={handleClick} />
            </>
        );
    }else if(workflow.step === 2){
        return(
            <>
                <WorkflowForm02 workflow={workflow} handleClick={handleClick} />
            </>
        );
    }else if(workflow.step === 3){
        return(
            <>
                <WorkflowForm03 workflow={workflow} handleClick={handleClick} />
            </>
        );
    }else if(workflow.step ===4 ){
        return(
            <>
                <WorkflowForm03 workflow={workflow} handleClick={handleClick} />
            </>
        );
    }
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
const WorkflowForm00 = ({workflow, handleClick, handleLike}) => {
    return (
            <div>
                <h1>Get Your Spirit Animal!</h1>
                <p>{workflow.step}</p>
                <WorkflowDisplay workflow={workflow} />
                <form id={"workflow-form"}>
                <label>Name:</label>
                <input type="text" name="name" />
                <button onClick={handleLike}>Accept</button>
                <button onClick={handleClick}>Decline</button>
                </form>
            </div>
    );
}

const WorkflowForm01 = ({workflow, handleClick}) => {
    return (
            <div>
                <h1>What Is My Animal?</h1>
                <p>{workflow.step}</p>
                <WorkflowDisplay workflow={workflow} />
                <button onClick={handleClick}>Accept</button>
                <button onClick={handleClick}>Decline</button>
            </div>
    );
}

const WorkflowForm02 = ({workflow, handleClick}) => {
    return (
        <div>
            <h1>Does This Poem Change Your Mind?</h1>
            <p>{workflow.step}</p>
            <button onClick={handleClick}>Accept</button>
            <button onClick={handleClick}>Decline</button>
        </div>
    );
}

const WorkflowForm03 = ({workflow, handleClick}) => {
    return (
        <div>
            <h1>How About This Poem?</h1>
            <p>{workflow.step}</p>
            <button onClick={handleClick}>Accept</button>
            <button onClick={handleClick}>Decline</button>
        </div>
    );
}

const WorkflowForm04 = ({workflow, handleClick}) => {
    return (
        <div>
            <h1>What Did You Think of This App?</h1>
            <p>{workflow.step}</p>
            <button onClick={handleClick}>Accept</button>
            <button onClick={handleClick}>Decline</button>
        </div>
    );
}

export default WorkflowForm
