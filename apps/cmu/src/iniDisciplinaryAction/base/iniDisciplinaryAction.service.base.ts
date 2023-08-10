/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, IniDisciplinaryAction } from "@prisma/client";

export class IniDisciplinaryActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IniDisciplinaryActionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionCountArgs>
  ): Promise<number> {
    return this.prisma.iniDisciplinaryAction.count(args);
  }

  async findMany<T extends Prisma.IniDisciplinaryActionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionFindManyArgs>
  ): Promise<IniDisciplinaryAction[]> {
    return this.prisma.iniDisciplinaryAction.findMany(args);
  }
  async findOne<T extends Prisma.IniDisciplinaryActionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionFindUniqueArgs>
  ): Promise<IniDisciplinaryAction | null> {
    return this.prisma.iniDisciplinaryAction.findUnique(args);
  }
  async create<T extends Prisma.IniDisciplinaryActionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionCreateArgs>
  ): Promise<IniDisciplinaryAction> {
    return this.prisma.iniDisciplinaryAction.create<T>(args);
  }
  async update<T extends Prisma.IniDisciplinaryActionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionUpdateArgs>
  ): Promise<IniDisciplinaryAction> {
    return this.prisma.iniDisciplinaryAction.update<T>(args);
  }
  async delete<T extends Prisma.IniDisciplinaryActionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IniDisciplinaryActionDeleteArgs>
  ): Promise<IniDisciplinaryAction> {
    return this.prisma.iniDisciplinaryAction.delete(args);
  }
}
