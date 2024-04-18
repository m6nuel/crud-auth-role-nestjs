import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register({ name, email, password }: RegisterDto) {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('User already exits');
    }
    const phash = await bcrypt.hash(password, 10);
    await this.userService.create({ name, email, password: phash });
    return { name, email };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.userService.findByEmailWhitPassword(email);
    if (!user) {
      throw new UnauthorizedException('Credenciales Invalidas');
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      throw new UnauthorizedException('Credenciales Invalidas');
    }
    const payload = {
      email: user.email,
      role: user.role,
    };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
      email: user.email,
    };
  }

  async profile({ email /* role*/ }: { email: string; role: string }) {
    return await this.userService.findOneByEmail(email);
  }
}
