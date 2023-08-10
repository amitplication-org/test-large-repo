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
import { CreateProgramTypeArgs } from "./CreateProgramTypeArgs";
import { UpdateProgramTypeArgs } from "./UpdateProgramTypeArgs";
import { DeleteProgramTypeArgs } from "./DeleteProgramTypeArgs";
import { ProgramTypeCountArgs } from "./ProgramTypeCountArgs";
import { ProgramTypeFindManyArgs } from "./ProgramTypeFindManyArgs";
import { ProgramTypeFindUniqueArgs } from "./ProgramTypeFindUniqueArgs";
import { ProgramType } from "./ProgramType";
import { ProgramTypeService } from "../programType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramType)
export class ProgramTypeResolverBase {
  constructor(
    protected readonly service: ProgramTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "read",
    possession: "any",
  })
  async _programTypesMeta(
    @graphql.Args() args: ProgramTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProgramType])
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "read",
    possession: "any",
  })
  async programTypes(
    @graphql.Args() args: ProgramTypeFindManyArgs
  ): Promise<ProgramType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProgramType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "read",
    possession: "own",
  })
  async programType(
    @graphql.Args() args: ProgramTypeFindUniqueArgs
  ): Promise<ProgramType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProgramType)
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "create",
    possession: "any",
  })
  async createProgramType(
    @graphql.Args() args: CreateProgramTypeArgs
  ): Promise<ProgramType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProgramType)
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "update",
    possession: "any",
  })
  async updateProgramType(
    @graphql.Args() args: UpdateProgramTypeArgs
  ): Promise<ProgramType | null> {
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

  @graphql.Mutation(() => ProgramType)
  @nestAccessControl.UseRoles({
    resource: "ProgramType",
    action: "delete",
    possession: "any",
  })
  async deleteProgramType(
    @graphql.Args() args: DeleteProgramTypeArgs
  ): Promise<ProgramType | null> {
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
