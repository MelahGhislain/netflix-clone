export interface IAuth {
    password: string
    email: string
}

export const validate = (inputs: IAuth) => {
    let isValid = true
    let errors= {} as IAuth
    if (inputs.email.trim() === ""){
        errors['email'] = 'This field is required!'
        isValid = false
    }
    if(inputs.password.trim() === ""){
        errors['password'] = 'This field is required!'
        isValid = false
    }
    
    return {errors, isValid}
}