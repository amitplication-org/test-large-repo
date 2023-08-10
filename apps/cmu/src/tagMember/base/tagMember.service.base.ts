/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TagMember } from "@prisma/client";

export class TagMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TagMemberCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberCountArgs>
  ): Promise<number> {
    return this.prisma.tagMember.count(args);
  }

  async findMany<T extends Prisma.TagMemberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberFindManyArgs>
  ): Promise<TagMember[]> {
    return this.prisma.tagMember.findMany(args);
  }
  async findOne<T extends Prisma.TagMemberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberFindUniqueArgs>
  ): Promise<TagMember | null> {
    return this.prisma.tagMember.findUnique(args);
  }
  async create<T extends Prisma.TagMemberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberCreateArgs>
  ): Promise<TagMember> {
    return this.prisma.tagMember.create<T>(args);
  }
  async update<T extends Prisma.TagMemberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberUpdateArgs>
  ): Promise<TagMember> {
    return this.prisma.tagMember.update<T>(args);
  }
  async delete<T extends Prisma.TagMemberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TagMemberDeleteArgs>
  ): Promise<TagMember> {
    return this.prisma.tagMember.delete(args);
  }
}
