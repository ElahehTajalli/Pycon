export const getInformation = (firstname, lastname, eng_firstname, eng_lastname, email, code, work, phone, postalCode, address) => ({
    type: 'GET_INFORMATION',
    firstname: firstname,
    lastname: lastname,
    eng_firstname: eng_firstname,
    eng_lastname: eng_lastname,
    email: email,
    code: code,
    work: work,
    phone: phone,
    postalCode: postalCode,
    address: address
  })
