import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    return await this.catRepository.save(createCatDto);
  }

  async findAll() {
    return this.catRepository.find();
  }

  async findOne(id: number) {
    return await this.catRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.catRepository.update(id, updateCatDto); // 1:15:00
  }

  async remove(id: number) {
    return await this.catRepository.softDelete({ id }); // se le pasa el id
    // return await this.catRepository.softRemove({ id }); // se le pasa la instancia
  }
}
