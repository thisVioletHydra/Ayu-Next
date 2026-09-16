/**
 * ЖЁСТКИЙ ЗАМОК: имена типов и интерфейсов = салатовый НАВСЕГДА.
 * Никакой поздний патч (классы/функции) не имеет права перекрасить их.
 * Источник: эталон Nest app.controller.ts / правило Романа.
 */
export const TYPING_NAME_HEX = '#BAE67E' as const;

export type TypingNameHex = typeof TYPING_NAME_HEX;
