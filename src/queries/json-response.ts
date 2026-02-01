export interface JsonResponse<T> extends Response {
  readonly data: T;
}
