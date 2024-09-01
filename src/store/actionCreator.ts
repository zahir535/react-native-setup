export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P>(type: T, payload: P): { type: T; payload: P };

export function typedAction(type: string, payload?: unknown) {
  return { type, payload };
}
