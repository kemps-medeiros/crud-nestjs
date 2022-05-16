import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(user: User): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    delete(id: any): Promise<DeleteResult>;
    update(user: User): Promise<UpdateResult>;
}
