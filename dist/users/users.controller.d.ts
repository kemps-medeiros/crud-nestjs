import { UsersService } from './users.service';
import { User } from './entities/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(userData: User): Promise<any>;
    index(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: any, userData: User): Promise<any>;
    delete(id: any): Promise<any>;
}
