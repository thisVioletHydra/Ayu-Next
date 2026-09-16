/**
 * Примитивы в аннотациях (`string`, `number`) — белый `syntax.typeBuiltin` / fg.
 * Не имена интерфейсов/alias (салатовый замок) и не классы (cyan).
 * Владение scopes: src/syntax/roles.ts → syntax.typeBuiltin.
 */
export const typeBuiltinTyping = {
  role: 'syntax.typeBuiltin' as const,
  note: 'primitives stay #CBCCC6; salad lock must not own type.defaultLibrary',
} as const;
