/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ProgramModel,
  LuApplicationProgram,
  ProgramsApplicationreq,
  Degree,
  Fieldsofstudy,
} from "@prisma/client";

export class ProgramModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProgramModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelCountArgs>
  ): Promise<number> {
    return this.prisma.programModel.count(args);
  }

  async findMany<T extends Prisma.ProgramModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelFindManyArgs>
  ): Promise<ProgramModel[]> {
    return this.prisma.programModel.findMany(args);
  }
  async findOne<T extends Prisma.ProgramModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelFindUniqueArgs>
  ): Promise<ProgramModel | null> {
    return this.prisma.programModel.findUnique(args);
  }
  async create<T extends Prisma.ProgramModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelCreateArgs>
  ): Promise<ProgramModel> {
    return this.prisma.programModel.create<T>(args);
  }
  async update<T extends Prisma.ProgramModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelUpdateArgs>
  ): Promise<ProgramModel> {
    return this.prisma.programModel.update<T>(args);
  }
  async delete<T extends Prisma.ProgramModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProgramModelDeleteArgs>
  ): Promise<ProgramModel> {
    return this.prisma.programModel.delete(args);
  }

  async findLuApplicationPrograms(
    parentId: number,
    args: Prisma.LuApplicationProgramFindManyArgs
  ): Promise<LuApplicationProgram[]> {
    return this.prisma.programModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .luApplicationPrograms(args);
  }

  async findProgramsApplicationreqs(
    parentId: number,
    args: Prisma.ProgramsApplicationreqFindManyArgs
  ): Promise<ProgramsApplicationreq[]> {
    return this.prisma.programModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .programsApplicationreqs(args);
  }

  async getDegree(parentId: number): Promise<Degree | null> {
    return this.prisma.programModel
      .findUnique({
        where: { id: parentId },
      })
      .degree();
  }

  async getFieldsofstudy(parentId: number): Promise<Fieldsofstudy | null> {
    return this.prisma.programModel
      .findUnique({
        where: { id: parentId },
      })
      .fieldsofstudy();
  }
}
