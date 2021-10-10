import {ErrorRequestHandler} from 'express'; 
import {ValidationError} from 'yup';

interface ValidationErros {
    [key: string]: string[];
}

const errohandler: ErrorRequestHandler = (error, request, response, next) => {

    if(error instanceof ValidationError){
        let errors: ValidationErros = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({message: 'Validation fails', errors})
    }

    console.log(error);

    return response.status(500).json({message: "Erro interno do servidor"})    
}

export default errohandler;