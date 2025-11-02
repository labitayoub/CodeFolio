export declare class VisitorsService {
    static getAll(): Promise<(import("mongoose").Document<unknown, {}, {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    static getById(id: string): Promise<(import("mongoose").Document<unknown, {}, {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    static create(data: any): Promise<import("mongoose").Document<unknown, {}, {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    static update(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    static delete(id: string): Promise<(import("mongoose").Document<unknown, {}, {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        pages_visited: string[];
        timestamp?: NativeDate | null | undefined;
        ip_address?: string | null | undefined;
        country?: string | null | undefined;
        city?: string | null | undefined;
        isp?: string | null | undefined;
        user_agent?: string | null | undefined;
        referrer?: string | null | undefined;
        accept_language?: string | null | undefined;
        screen_resolution?: string | null | undefined;
        device_type?: string | null | undefined;
        visit_time?: NativeDate | null | undefined;
        session_duration?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
