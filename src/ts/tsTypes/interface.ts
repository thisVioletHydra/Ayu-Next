import { TYPING_NAME_HEX } from './lock.js';

/**
 * Только имена интерфейсов (`TokenDto`).
 * Поля интерфейса сюда не входят — это propField.
 */
export const interfaceTypingPaint = {
  role: 'syntax.interface' as const,
  semantic: ['interface', 'interface.defaultLibrary'] as const,
  textmate: ['entity.name.type.interface'] as const,
};

/** Документация замка: этот конструктор обязан оставаться салатовым. */
export const interfaceTypingHex = TYPING_NAME_HEX;
