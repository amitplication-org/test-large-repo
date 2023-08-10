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
import { CreateProgramGroupGroupTypeArgs } from "./CreateProgramGroupGroupTypeArgs";
import { UpdateProgramGroupGroupTypeArgs } from "./UpdateProgramGroupGroupTypeArgs";
import { DeleteProgramGroupGroupTypeArgs } from "./DeleteProgramGroupGroupTypeArgs";
import { ProgramGroupGroupTypeCountArgs } from "./ProgramGroupGroupTypeCountArgs";
import { ProgramGroupGroupTypeFindManyArgs } from "./ProgramGroupGroupTypeFindManyArgs";
import { ProgramGroupGroupTypeFindUniqueArgs } from "./ProgramGroupGroupTypeFindUniqueArgs";
import { ProgramGroupGroupType } from "./ProgramGroupGroupType";
import { ProgramGroupGroupTypeService } from "../programGroupGroupType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroupGroupType)
export class ProgramGroupGroupTypeResolverBase {
  constructor(
    protected readonly service: ProgramGroupGroupTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "read",
    possession: "any",
  })
  async _programGroupGroupTypesMeta(
    @graphql.Args() args: ProgramGroupGroupTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProgramGroupGroupType])
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "read",
    possession: "any",
  })
  async programGroupGroupTypes(
    @graphql.Args() args: ProgramGroupGroupTypeFindManyArgs
  ): Promise<ProgramGroupGroupType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProgramGroupGroupType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "read",
    possession: "own",
  })
  async programGroupGroupType(
    @graphql.Args() args: ProgramGroupGroupTypeFindUniqueArgs
  ): Promise<ProgramGroupGroupType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProgramGroupGroupType)
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "create",
    possession: "any",
  })
  async createProgramGroupGroupType(
    @graphql.Args() args: CreateProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProgramGroupGroupType)
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "update",
    possession: "any",
  })
  async updateProgramGroupGroupType(
    @graphql.Args() args: UpdateProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType | null> {
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

  @graphql.Mutation(() => ProgramGroupGroupType)
  @nestAccessControl.UseRoles({
    resource: "ProgramGroupGroupType",
    action: "delete",
    possession: "any",
  })
  async deleteProgramGroupGroupType(
    @graphql.Args() args: DeleteProgramGroupGroupTypeArgs
  ): Promise<ProgramGroupGroupType | null> {
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
