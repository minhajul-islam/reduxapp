const email = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
};
const phone = (phone) => {
    return (phone.length > 3 && phone.length < 16);
};
const empty = (text) => {
    return (text !== '');
};
const CheckEmptyNull = (text) => {

    if (text === undefined) {
        return '';
    }
    if (text === null) {
        return '';
    }
    if (text === '') {
        return '';
    }
    return text;
};

const Validate = {
    email, phone, empty, CheckEmptyNull,
};

export default Validate;
