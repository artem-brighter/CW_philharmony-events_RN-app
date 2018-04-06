const SERVER_URL = 'https://philharmony-backend.herokuapp.com/';

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