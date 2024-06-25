export type MapValue = string | number | boolean | undefined;
export type MapListValue = string | number | boolean | never | {};
export type MapModule = Map<string, MapValue>;

type Token = {
  name: string;
  scope: string[];
  settings: {
    foreground: string;
    fontStyle: string;
  };
};

export type TokenColors = {
  colors: Record<string, MapValue>;
  semanticTokenColors: Record<string, MapValue>;
  tokenColors: Token[];
};

export type MapFull = Map<string, MapValue>
    & Map<'colors', TokenColors['colors']>
    & Map<'semanticTokenColors', TokenColors['semanticTokenColors']>
    & Map<'tokenColors', TokenColors['tokenColors']>;