class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong" , errors = [], stack = "" ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
        
    }
}// stack gives the function which gives the error 
//errors is the stack of the errors 

export  {ApiError};