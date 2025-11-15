import { HttpStatusCode } from '@/types/http-status-code';

export abstract class ApiError extends Error {
    status: number;

    constructor(message: string, name: string, status: number) {
        super(message);
        this.name = name;
        this.status = status;
    }

    // TODO - Decide later if we really need / want to return error as a part of the response

    toResponse(): Response {
        return Response.json(
            {
                message: this.message,
                code: this.status,
                error: this,
                success: false,
            },
            {
                status: this.status,
            }
        );
    }
}

// Bad Request: 400
export class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, 'BadRequestError', HttpStatusCode.BadRequest);
    }
}

// Unauthorized: 401
export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(message, 'UnauthorizedError', HttpStatusCode.Unauthorized);
    }
}

// Forbidden: 403
export class ForbiddenError extends ApiError {
    constructor(message: string) {
        super(message, 'ForbiddenError', HttpStatusCode.Forbidden);
    }
}

// Not Found: 404
export class NotFoundError extends ApiError {
    constructor(message: string) {
        super(message, 'NotFoundError', HttpStatusCode.NotFound);
    }
}

// Method Not Allowed: 405
export class MethodNotAllowedError extends ApiError {
    constructor(message: string) {
        super(message, 'MethodNotAllowedError', HttpStatusCode.MethodNotAllowed);
    }
}

// Request Timeout: 408
export class RequestTimeoutError extends ApiError {
    constructor(message: string) {
        super(message, 'RequestTimeoutError', HttpStatusCode.RequestTimeout);
    }
}

// I'm a teapot: 418
export class ImATeapotError extends ApiError {
    constructor(message: string) {
        super(message, 'ImATeapotError', HttpStatusCode.ImATeapot);
    }
}

// Unprocessable Entity: 422
export class UnprocessableEntityError extends ApiError {
    constructor(message: string) {
        super(message, 'UnprocessableEntityError', HttpStatusCode.UnprocessableEntity);
    }
}

// Too Many Requests: 429
export class TooManyRequestsError extends ApiError {
    constructor(message: string) {
        super(message, 'TooManyRequestsError', HttpStatusCode.TooManyRequests);
    }
}

// Internal Server Error: 500
export class InternalServerError extends ApiError {
    constructor(message: string) {
        super(message, 'InternalServerError', HttpStatusCode.InternalServerError);
    }
}

// Not Implemented: 501
export class NotImplementedError extends ApiError {
    constructor(message: string) {
        super(message, 'NotImplementedError', HttpStatusCode.NotImplemented);
    }
}

// Service Unavailable: 503
export class ServiceUnavailableError extends ApiError {
    constructor(message: string) {
        super(message, 'ServiceUnavailableError', HttpStatusCode.ServiceUnavailable);
    }
}

// Insufficient Storage: 507
export class InsufficientStorageError extends ApiError {
    constructor(message: string) {
        super(message, 'InsufficientStorageError', HttpStatusCode.InsufficientStorage);
    }
}

export const apiErrors = {
    // Http Status Codes 4xx
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    RequestTimeoutError,
    ImATeapotError,
    UnprocessableEntityError,
    TooManyRequestsError,

    // Http Status Codes 5xx
    InternalServerError,
    NotImplementedError,
    ServiceUnavailableError,
    InsufficientStorageError,
};
