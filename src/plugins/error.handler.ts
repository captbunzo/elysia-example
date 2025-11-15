import { Elysia, type ErrorHandler } from 'elysia';

import { HttpStatusCode } from '@/types/http-status-code';
import { ApiError } from '@/types/api-errors';

const errorHandlerFunction: ErrorHandler = ({ code, error, set }) => {
    // console.error('Error ', error);
    // console.info('Code ', code);

    // TODO - Decide later if we really need / want to return error as a part of the response
    switch (code) {
        case 'NOT_FOUND': {
            set.status = HttpStatusCode.NotFound;
            return {
                message: error.message,
                code: HttpStatusCode.NotFound,
                error: error,
                success: false,
            };
        }

        case 'PARSE': {
            set.status = HttpStatusCode.BadRequest;
            return {
                message: 'Malformed request body',
                code: HttpStatusCode.BadRequest,
                error: error,
                success: false,
            };
        }

        case 'VALIDATION': {
            set.status = HttpStatusCode.UnprocessableEntity;
            return {
                message: 'Validation failed',
                code: HttpStatusCode.UnprocessableEntity,
                error: error,
                success: false,
            };
        }

        case 'INTERNAL_SERVER_ERROR': {
            set.status = HttpStatusCode.InternalServerError;
            return {
                message: 'Internal Server Error',
                code: HttpStatusCode.InternalServerError,
                error: error,
                success: false,
            };
        }

        case 'INVALID_COOKIE_SIGNATURE': {
            set.status = HttpStatusCode.Unauthorized;
            return {
                message: 'Invalid cookie signature',
                code: HttpStatusCode.Unauthorized,
                error: error,
                success: false,
            };
        }

        case 'INVALID_FILE_TYPE': {
            set.status = HttpStatusCode.BadRequest;
            return {
                message: 'Invalid file type',
                code: HttpStatusCode.BadRequest,
                error: error,
                success: false,
            };
        }

        case 'UNKNOWN': {
            set.status = HttpStatusCode.InternalServerError;
            return {
                message: 'An unidentified error occured',
                code: HttpStatusCode.InternalServerError,
                error: error,
                success: false,
            };
        }

        default: {
            if (error instanceof ApiError) {
                return error.toResponse();
            }

            set.status = HttpStatusCode.InternalServerError;
            return {
                message: 'An unhandled error occurred',
                code: HttpStatusCode.InternalServerError,
                error: error,
                success: false,
            };
        }
    }
};

export const errorHandler = new Elysia().onError(errorHandlerFunction);
