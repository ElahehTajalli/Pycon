const initial = {
    firstname: '',
    lastname: '',
    eng_firstname: '',
    eng_lastname: '',
    email: '',
    code: '',
    work: '',
    phone: '',
    postalCode: '',
    address: '',
    en: false 
}


const pycon = (state = initial, action) => {
    switch(action.type) {
        case 'GET_INFORMATION':
            return {
                ...state,
                firstname: action.firstname,
                lastname: action.lastname,
                eng_firstname: action.eng_firstname,
                eng_lastname: action.eng_lastname,
                email: action.email,
                code: action.code,
                work: action.work,
                phone: action.phone,
                postalCode: action.postalCode,
                address: action.address
            }

            case 'GET_INFORMATION_ARTICLE':
                return {
                    ...state,
                    firstname: action.firstname,
                    lastname: action.lastname,
                    email: action.email,
                }  
            
            case 'GET_LANG':
                return {
                    ...state,
                    en: action.en
                }    
        

        default:
            return state    
    }
}

export default pycon