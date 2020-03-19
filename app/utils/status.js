const status = {
    success: 200,
    created: 201,
    noContent: 204,
    notModified: 304,
    badRequest: 400,
    unAuthorized: 401,
    notFound: 404,
    conflict: 409,
    errorServer: 500,
    notImplemented: 501,
    serviceUnavailabe: 503
}

class SuccessMessage {

    constructor() {
        this.message = 'success'
        this.data = ''
    }

    clearMessages() {
        this.message = 'success'
        this.data = ''
    }
}

class ErrorMessage {
    constructor() {
        this.message = 'error'
    }
}

export {
    status,
    ErrorMessage,
    SuccessMessage
}