/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface ListenOptions {
  port: number
  host: string
}
export interface JsResponse {
  body?: string
  headers?: Record<string, any>
}
export function serve(options: ListenOptions, callback: (...args: any[]) => any): void
