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
import { CreateSlateMaterialArgs } from "./CreateSlateMaterialArgs";
import { UpdateSlateMaterialArgs } from "./UpdateSlateMaterialArgs";
import { DeleteSlateMaterialArgs } from "./DeleteSlateMaterialArgs";
import { SlateMaterialCountArgs } from "./SlateMaterialCountArgs";
import { SlateMaterialFindManyArgs } from "./SlateMaterialFindManyArgs";
import { SlateMaterialFindUniqueArgs } from "./SlateMaterialFindUniqueArgs";
import { SlateMaterial } from "./SlateMaterial";
import { SlateMaterialService } from "../slateMaterial.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateMaterial)
export class SlateMaterialResolverBase {
  constructor(
    protected readonly service: SlateMaterialService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "read",
    possession: "any",
  })
  async _slateMaterialsMeta(
    @graphql.Args() args: SlateMaterialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SlateMaterial])
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "read",
    possession: "any",
  })
  async slateMaterials(
    @graphql.Args() args: SlateMaterialFindManyArgs
  ): Promise<SlateMaterial[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SlateMaterial, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "read",
    possession: "own",
  })
  async slateMaterial(
    @graphql.Args() args: SlateMaterialFindUniqueArgs
  ): Promise<SlateMaterial | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateMaterial)
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "create",
    possession: "any",
  })
  async createSlateMaterial(
    @graphql.Args() args: CreateSlateMaterialArgs
  ): Promise<SlateMaterial> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateMaterial)
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "update",
    possession: "any",
  })
  async updateSlateMaterial(
    @graphql.Args() args: UpdateSlateMaterialArgs
  ): Promise<SlateMaterial | null> {
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

  @graphql.Mutation(() => SlateMaterial)
  @nestAccessControl.UseRoles({
    resource: "SlateMaterial",
    action: "delete",
    possession: "any",
  })
  async deleteSlateMaterial(
    @graphql.Args() args: DeleteSlateMaterialArgs
  ): Promise<SlateMaterial | null> {
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
