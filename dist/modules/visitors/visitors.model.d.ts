import { Schema } from 'mongoose';
export declare const Visitors: import("mongoose").Model<{
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
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
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
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
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
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
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
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
