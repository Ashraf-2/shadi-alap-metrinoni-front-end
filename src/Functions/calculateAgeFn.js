export const calCulateAge = (dob) => {
    // console.log(dob)
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    // let ageMonth = today.getMonth() - birthDate.getMonth();
    // if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }
    // console.log('age: ', age);
    return age;
}