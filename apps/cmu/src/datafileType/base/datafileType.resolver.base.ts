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
import { CreateDatafileTypeArgs } from "./CreateDatafileTypeArgs";
import { UpdateDatafileTypeArgs } from "./UpdateDatafileTypeArgs";
import { DeleteDatafileTypeArgs } from "./DeleteDatafileTypeArgs";
import { DatafileTypeCountArgs } from "./DatafileTypeCountArgs";
import { DatafileTypeFindManyArgs } from "./DatafileTypeFindManyArgs";
import { DatafileTypeFindUniqueArgs } from "./DatafileTypeFindUniqueArgs";
import { DatafileType } from "./DatafileType";
import { DatafileTypeService } from "../datafileType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DatafileType)
export class DatafileTypeResolverBase {
  constructor(
    protected readonly service: DatafileTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "read",
    possession: "any",
  })
  async _datafileTypesMeta(
    @graphql.Args() args: DatafileTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DatafileType])
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "read",
    possession: "any",
  })
  async datafileTypes(
    @graphql.Args() args: DatafileTypeFindManyArgs
  ): Promise<DatafileType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DatafileType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "read",
    possession: "own",
  })
  async datafileType(
    @graphql.Args() args: DatafileTypeFindUniqueArgs
  ): Promise<DatafileType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DatafileType)
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "create",
    possession: "any",
  })
  async createDatafileType(
    @graphql.Args() args: CreateDatafileTypeArgs
  ): Promise<DatafileType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DatafileType)
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "update",
    possession: "any",
  })
  async updateDatafileType(
    @graphql.Args() args: UpdateDatafileTypeArgs
  ): Promise<DatafileType | null> {
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

  @graphql.Mutation(() => DatafileType)
  @nestAccessControl.UseRoles({
    resource: "DatafileType",
    action: "delete",
    possession: "any",
  })
  async deleteDatafileType(
    @graphql.Args() args: DeleteDatafileTypeArgs
  ): Promise<DatafileType | null> {
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
