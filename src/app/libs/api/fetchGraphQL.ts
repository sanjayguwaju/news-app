export const fetchGraphQL = async (query: any, variables = {}) => {
    const response = await fetch('http://localhost:5000/api/graphql/homepage-layout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const result = await response.json();

    if (result.errors) {
        console.error(result.errors);
        throw new Error('Failed to fetch GraphQL data.');
    }

    return result.data;
};


export const fetchSinglePosts = async (query: any, variables = {}) => {
    const response = await fetch('http://localhost:5000/api/graphql/single-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const result = await response.json();

    if (result.errors) {
        console.error(result.errors);
        throw new Error('Failed to fetch GraphQL data.');
    }

    return result.data;
};