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
import { CreateDomainUnitArgs } from "./CreateDomainUnitArgs";
import { UpdateDomainUnitArgs } from "./UpdateDomainUnitArgs";
import { DeleteDomainUnitArgs } from "./DeleteDomainUnitArgs";
import { DomainUnitCountArgs } from "./DomainUnitCountArgs";
import { DomainUnitFindManyArgs } from "./DomainUnitFindManyArgs";
import { DomainUnitFindUniqueArgs } from "./DomainUnitFindUniqueArgs";
import { DomainUnit } from "./DomainUnit";
import { DomainUnitService } from "../domainUnit.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DomainUnit)
export class DomainUnitResolverBase {
  constructor(
    protected readonly service: DomainUnitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "read",
    possession: "any",
  })
  async _domainUnitsMeta(
    @graphql.Args() args: DomainUnitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DomainUnit])
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "read",
    possession: "any",
  })
  async domainUnits(
    @graphql.Args() args: DomainUnitFindManyArgs
  ): Promise<DomainUnit[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DomainUnit, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "read",
    possession: "own",
  })
  async domainUnit(
    @graphql.Args() args: DomainUnitFindUniqueArgs
  ): Promise<DomainUnit | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DomainUnit)
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "create",
    possession: "any",
  })
  async createDomainUnit(
    @graphql.Args() args: CreateDomainUnitArgs
  ): Promise<DomainUnit> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DomainUnit)
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "update",
    possession: "any",
  })
  async updateDomainUnit(
    @graphql.Args() args: UpdateDomainUnitArgs
  ): Promise<DomainUnit | null> {
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

  @graphql.Mutation(() => DomainUnit)
  @nestAccessControl.UseRoles({
    resource: "DomainUnit",
    action: "delete",
    possession: "any",
  })
  async deleteDomainUnit(
    @graphql.Args() args: DeleteDomainUnitArgs
  ): Promise<DomainUnit | null> {
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
