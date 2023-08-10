/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LuUserDepartment } from "@prisma/client";

export class LuUserDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LuUserDepartmentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentCountArgs>
  ): Promise<number> {
    return this.prisma.luUserDepartment.count(args);
  }

  async findMany<T extends Prisma.LuUserDepartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentFindManyArgs>
  ): Promise<LuUserDepartment[]> {
    return this.prisma.luUserDepartment.findMany(args);
  }
  async findOne<T extends Prisma.LuUserDepartmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentFindUniqueArgs>
  ): Promise<LuUserDepartment | null> {
    return this.prisma.luUserDepartment.findUnique(args);
  }
  async create<T extends Prisma.LuUserDepartmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentCreateArgs>
  ): Promise<LuUserDepartment> {
    return this.prisma.luUserDepartment.create<T>(args);
  }
  async update<T extends Prisma.LuUserDepartmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentUpdateArgs>
  ): Promise<LuUserDepartment> {
    return this.prisma.luUserDepartment.update<T>(args);
  }
  async delete<T extends Prisma.LuUserDepartmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUserDepartmentDeleteArgs>
  ): Promise<LuUserDepartment> {
    return this.prisma.luUserDepartment.delete(args);
  }
}
