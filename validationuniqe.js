import { body } from 'express-validator';

const registerValidation=() =>(

    body('firstname','Name is required').not().isEmpty(),
    body('email','invalid email found').isEmail().normalizeEmail({gmail_remove_dots:true}),
    body('password','invalid password').isStrongPassword({
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1
    })
)
// package name is npm i express-validator   or npm i validator

export {registerValidation}