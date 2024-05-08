import React from "react";

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