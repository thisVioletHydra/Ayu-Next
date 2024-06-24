import chalk from 'chalk';

/**
 * It takes any number of arguments, and throws an error with the arguments as the error message
 * @param {(string | number | unknown)[]} text - (string | number | unknown)[]
 */
export function useThrowError(...text: (number | string | unknown)[]): Error | never {
  const list = [...text].map((f) => f ?? typeof f);
  throw new Error(list.join(' '));
}

/**
 * It's a function that takes an error and a state, and returns a console log of the error
 * @param error - The error to display.
 * @param [state=error] - 'error' | 'log' | 'warn'
 * @returns A function that takes an error and a state and returns the console.error or console.log or
 * console.warn
 */
type DisplayError = (error: unknown, state?: 'error' | 'log' | 'warn', show?: boolean) => string;

export const useCatchError: DisplayError = (error, state = 'error', show = true) => {
  const generateIcon = () => {
    switch (state) {
      case 'error': { return '❌'; }
      case 'log': { return '[LOG]'; }
      case 'warn': { return '⚠️'; }

      default: { return '❓'; }
    }
  };

  const chalkColor = () => {
    switch (state) {
      case 'error': { return '#f8312f'; }
      case 'log': { return '#cbccc6'; }
      case 'warn': { return '#feaf2d'; }

      default: { return '#cbccc6'; }
    }
  };

  const generateError = () => {
    if (typeof error === 'string') return error;
    if (typeof error === 'object' && error instanceof Error) return error.message;
    if (typeof error === 'object') return JSON.stringify(error);

    return error;
  };

  const reColor = ({ callback }: { callback: (error: unknown) => string }) => callback(generateError());
  const color = reColor({ callback: chalk.hex(chalkColor()) });

  if (show) console[state]('[catch]', generateIcon(), color);

  return `[catch] ${generateIcon()} ${color}`;
};