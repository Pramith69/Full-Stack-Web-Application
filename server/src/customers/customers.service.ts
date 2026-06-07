import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    const customer = this.customersRepository.create(createCustomerDto);

    return this.customersRepository.save(customer);
  }

  findAll() {
    return this.customersRepository.find();
  }

  async findOne(id: number) {
    const customer = this.customersRepository.findOneBy({ id });

    if (!customer) throw new NotFoundException(`Customer id #${id} Not Found`);
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.findOne(id);
    await this.customersRepository.update(id, updateCustomerDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.customersRepository.delete(id);
    return `The Cusotmer id #${id} is deleted Successfully`;
  }
}
