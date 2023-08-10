/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LuUsersUsertypesOrig } from "@prisma/client";

export class LuUsersUsertypesOrigServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LuUsersUsertypesOrigCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigCountArgs>
  ): Promise<number> {
    return this.prisma.luUsersUsertypesOrig.count(args);
  }

  async findMany<T extends Prisma.LuUsersUsertypesOrigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigFindManyArgs>
  ): Promise<LuUsersUsertypesOrig[]> {
    return this.prisma.luUsersUsertypesOrig.findMany(args);
  }
  async findOne<T extends Prisma.LuUsersUsertypesOrigFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigFindUniqueArgs>
  ): Promise<LuUsersUsertypesOrig | null> {
    return this.prisma.luUsersUsertypesOrig.findUnique(args);
  }
  async create<T extends Prisma.LuUsersUsertypesOrigCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigCreateArgs>
  ): Promise<LuUsersUsertypesOrig> {
    return this.prisma.luUsersUsertypesOrig.create<T>(args);
  }
  async update<T extends Prisma.LuUsersUsertypesOrigUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigUpdateArgs>
  ): Promise<LuUsersUsertypesOrig> {
    return this.prisma.luUsersUsertypesOrig.update<T>(args);
  }
  async delete<T extends Prisma.LuUsersUsertypesOrigDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LuUsersUsertypesOrigDeleteArgs>
  ): Promise<LuUsersUsertypesOrig> {
    return this.prisma.luUsersUsertypesOrig.delete(args);
  }
}
