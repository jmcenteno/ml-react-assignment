import defaults from 'superagent-defaults';

const request = defaults();

request
    .set({ 
        'Accept': 'application/json',
    });

export default request;
