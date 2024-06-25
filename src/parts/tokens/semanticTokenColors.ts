import { palette } from '@/src/palette';

export async function semanticTokenColors() {
  const _map = new Map([
    [
      '*.declaration', {
        foreground: palette('transparentPurple'),
        fontStyle: '',
      },
    ],
    [
      'class', {
        foreground: palette('lightCoral'),
        fontStyle: '',
      },
    ],
    [
      'class.declaration', {
        foreground: palette('lightCyan'),
        fontStyle: '',
      },
    ],
    [
      'class.defaultLibrary', {
        foreground: palette('lightCyan'),
        fontStyle: '',
      },
    ],
    [
      'comment', {
        foreground: palette('darkGray'),
        fontStyle: 'italic',
      },
    ],
    [
      'event', {
        foreground: palette('lightBlue'),
        fontStyle: '',
      },
    ],
    [
      'string', {
        foreground: palette('lightGreen'),
        fontStyle: '',
      },
    ],
    [
      'customLiteral', {
        foreground: '#DCDCAA',
        fontStyle: '',
      },
    ],
    [
      'function.declaration', {
        foreground: palette('lightSecondary'),
        fontStyle: '',
      },
    ],
    [
      'function', {
        foreground: palette('lightSecondary'),
        fontStyle: '',
      },
    ],
    [
      'keyword.operator.new', {
        foreground: palette('lightSecondary'),
        fontStyle: '',
      },
    ],
    [
      'method.declaration.async', {
        foreground: palette('lightSecondary'),
        fontStyle: '',
      },
    ],
    [
      'method.defaultLibrary', {
        foreground: palette('pink'),
        fontStyle: '',
      },
    ],
    [
      'method', {
        foreground: palette('lightSecondary'),
        fontStyle: '',
      },
    ],
    [
      'number', {
        foreground: palette('lightBlue'),
        fontStyle: '',
      },
    ],
    [
      'newOperator', {
        foreground: '#C586C0',
        fontStyle: '',
      },
    ],
    [
      'numberLiteral', {
        foreground: '#b5cea8',
        fontStyle: '',
      },
    ],
    [
      'readonly.local', {
        foreground: palette('lightGreen'),
        fontStyle: '',
      },
    ],
    [
      'stringLiteral', {
        foreground: '#ce9178',
        fontStyle: '',
      },
    ],
    [
      'support.defaultLibrary', {
        foreground: palette('pink'),
        fontStyle: '',
      },
    ],
    [
      'type', {
        foreground: palette('lightTeal'),
        fontStyle: '',
      },
    ],
    [
      'interface', {
        foreground: palette('lightTeal'),
        fontStyle: '',
      },
    ],
    [
      'property', {
        foreground: palette('neutral'),
        fontStyle: '',
      },
    ],
    [
      'property.declaration', {
        foreground: palette('lightGreen'),
        fontStyle: '',
      },
    ],
    [
      'parameter', {
        foreground: palette('neutral'),
        fontStyle: '',
      },
    ],
    [
      'parameter.declaration', {
        foreground: palette('transparentPurple'),
        fontStyle: '',
      },
    ],
    [
      'module', {
        foreground: palette('lightCoral'),
        fontStyle: '',
      },
    ],
    [
      'variable', {
        foreground: palette('neutral'),
        fontStyle: '',
      },
    ],
    [
      'variable.defaultLibrary', {
        foreground: '#59C9DE99',
        fontStyle: '',
      },
    ],
    [
      'variable.local', {
        foreground: palette('neutral'),
        fontStyle: '',
      },
    ],
    [
      'variable.language.this', {
        foreground: palette('lightCyan'),
        fontStyle: 'italic',
      },
    ],

  ]);

  return Promise.resolve(_map);
}