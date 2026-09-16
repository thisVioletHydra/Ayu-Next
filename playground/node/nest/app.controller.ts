import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  Param,
  Post,
  Query,
} from '@nestjs/common';

type ThemeId = 'ayu-next' | 'mirage';

interface TokenDto {
  role: string;
  hex: string;
}

@Injectable()
export class ThemeService {
  private readonly accents = new Map<string, string>([
    ['accent.default', '#FFCC66'],
    ['accent.muted', '#707A8C'],
  ]);

  resolve(id: ThemeId): Readonly<{ id: ThemeId, accent: string }> {
    return { id, accent: this.accents.get('accent.default') ?? '#FFCC66' };
  }

  putToken(dto: TokenDto): TokenDto & { updatedAt: string } {
    if (!dto.hex.startsWith('#')) {
      throw new HttpException('hex must start with #', HttpStatus.BAD_REQUEST);
    }
    this.accents.set(dto.role, dto.hex);
    return { ...dto, updatedAt: new Date().toISOString() };
  }
}

@Controller('api/themes')
export class ThemeController {
  constructor(private readonly themes: ThemeService) {}

  @Get(':id')
  getTheme(@Param('id') id: string, @Query('preview') preview?: string) {
    if (id !== 'ayu-next' && id !== 'mirage') {
      throw new HttpException(`Unknown theme: ${id}`, HttpStatus.NOT_FOUND);
    }
    const theme = this.themes.resolve(id);
    return preview === '1' ? { ...theme, preview: true } : theme;
  }

  @Post('tokens')
  @HttpCode(HttpStatus.CREATED)
  createToken(@Body() body: TokenDto) {
    return this.themes.putToken(body);
  }
}

export type { ThemeId, TokenDto };
