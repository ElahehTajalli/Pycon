export const getInformation = (firstname, lastname, eng_firstname, eng_lastname, email,
  code, work, phone, postalCode, address, uniName, studentId, workplaceName, workplacePhone ) => ({
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
    address: address,
    uniName: uniName,
    studentId: studentId,
    workplaceName: workplaceName,
    workplacePhone: workplacePhone
  })


  export const getInformationArticle = (firstname, lastname, email) => ({
    type: 'GET_INFORMATION_ARTICLE',
    firstname: firstname,
    lastname: lastname,
    email: email,
  })


  export const getLang = (en ,changeLang) => ({
    type: 'GET_LANG',
    en: en,
    changeLang: changeLang
  })


  // export const getReqMethod = (reqMethod) => ({
  //   type: 'GET_REQ_METHOD',
  //   reqMethod: reqMethod
  // })
