const schema = {

    domain: {
        presence: { allowEmpty: false },
        type: 'string',
        pattern: /^[a-zA-Z0-9-.]+$/

    }
};

export default schema

