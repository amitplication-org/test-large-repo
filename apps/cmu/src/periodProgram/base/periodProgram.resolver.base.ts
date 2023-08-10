/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePeriodProgramArgs } from "./CreatePeriodProgramArgs";
import { UpdatePeriodProgramArgs } from "./UpdatePeriodProgramArgs";
import { DeletePeriodProgramArgs } from "./DeletePeriodProgramArgs";
import { PeriodProgramCountArgs } from "./PeriodProgramCountArgs";
import { PeriodProgramFindManyArgs } from "./PeriodProgramFindManyArgs";
import { PeriodProgramFindUniqueArgs } from "./PeriodProgramFindUniqueArgs";
import { PeriodProgram } from "./PeriodProgram";
import { PeriodProgramService } from "../periodProgram.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodProgram)
export class PeriodProgramResolverBase {
  constructor(
    protected readonly service: PeriodProgramService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "read",
    possession: "any",
  })
  async _periodProgramsMeta(
    @graphql.Args() args: PeriodProgramCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PeriodProgram])
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "read",
    possession: "any",
  })
  async periodPrograms(
    @graphql.Args() args: PeriodProgramFindManyArgs
  ): Promise<PeriodProgram[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PeriodProgram, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "read",
    possession: "own",
  })
  async periodProgram(
    @graphql.Args() args: PeriodProgramFindUniqueArgs
  ): Promise<PeriodProgram | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PeriodProgram)
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "create",
    possession: "any",
  })
  async createPeriodProgram(
    @graphql.Args() args: CreatePeriodProgramArgs
  ): Promise<PeriodProgram> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PeriodProgram)
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "update",
    possession: "any",
  })
  async updatePeriodProgram(
    @graphql.Args() args: UpdatePeriodProgramArgs
  ): Promise<PeriodProgram | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PeriodProgram)
  @nestAccessControl.UseRoles({
    resource: "PeriodProgram",
    action: "delete",
    possession: "any",
  })
  async deletePeriodProgram(
    @graphql.Args() args: DeletePeriodProgramArgs
  ): Promise<PeriodProgram | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
