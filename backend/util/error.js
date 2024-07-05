class NotFoundError {
    constructor(message) {
        this.message = message;
        this.status = 401;
    }
}

exports.NotFoundError = NotFoundError;
