export default async function backend01(name) {
        const response = await fetch('http://localhost:8080//spiritanimals/assign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: name
        });
        const data = await response.json();
        console.log(data);
        return data;
};

async function backend02(workflowId) {
    const response = await fetch('http://localhost:8080//spiritanimals/whatIs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: workflowId
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export { backend01, backend02 }


