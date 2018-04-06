const SERVER_URL = 'http://localhost:8080/';

const fetchApi = (path, params) => {
    let full_path = SERVER_URL + 'api/' + path;
    return fetch(full_path).then(response => response.json())
};

export const getEvents = () => {
    return fetchApi('events/future')
};

export const getEvent = id => {
    return fetchApi('events/' + id)
};