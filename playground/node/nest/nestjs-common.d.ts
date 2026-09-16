declare module '@nestjs/common' {
  export class HttpException {
    constructor(response: unknown, status: number);
  }

  export const HttpStatus: {
    readonly BAD_REQUEST: number;
    readonly NOT_FOUND: number;
    readonly CREATED: number;
  };

  export function Injectable(): ClassDecorator;
  export function Controller(path?: string): ClassDecorator;
  export function Get(path?: string): MethodDecorator;
  export function Post(path?: string): MethodDecorator;
  export function HttpCode(code: number): MethodDecorator;
  export function Param(property?: string): ParameterDecorator;
  export function Query(property?: string): ParameterDecorator;
  export function Body(): ParameterDecorator;
}
