import React from "react";

const WorkflowForm = ({workflow, handleClick}) => {
    if(workflow.step === 0) {
        return(
            <>
                <WorkflowForm00 workflow={workflow} handleClick={handleClick} />
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

const WorkflowForm00 = ({workflow, handleClick}) => {
    return (
            <div>
                <h1>Get Your Spirit Animal!</h1>
                <p>{workflow.step}</p>
                <button onClick={handleClick}>Accept</button>
                <button onClick={handleClick}>Decline</button>
            </div>
    );
}

const WorkflowForm01 = ({workflow, handleClick}) => {
    return (
            <div>
                <h1>What Is My Animal?</h1>
                <p>{workflow.step}</p>
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
