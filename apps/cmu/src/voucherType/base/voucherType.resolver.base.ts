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
import { CreateVoucherTypeArgs } from "./CreateVoucherTypeArgs";
import { UpdateVoucherTypeArgs } from "./UpdateVoucherTypeArgs";
import { DeleteVoucherTypeArgs } from "./DeleteVoucherTypeArgs";
import { VoucherTypeCountArgs } from "./VoucherTypeCountArgs";
import { VoucherTypeFindManyArgs } from "./VoucherTypeFindManyArgs";
import { VoucherTypeFindUniqueArgs } from "./VoucherTypeFindUniqueArgs";
import { VoucherType } from "./VoucherType";
import { VoucherTypeService } from "../voucherType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoucherType)
export class VoucherTypeResolverBase {
  constructor(
    protected readonly service: VoucherTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "read",
    possession: "any",
  })
  async _voucherTypesMeta(
    @graphql.Args() args: VoucherTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [VoucherType])
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "read",
    possession: "any",
  })
  async voucherTypes(
    @graphql.Args() args: VoucherTypeFindManyArgs
  ): Promise<VoucherType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => VoucherType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "read",
    possession: "own",
  })
  async voucherType(
    @graphql.Args() args: VoucherTypeFindUniqueArgs
  ): Promise<VoucherType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoucherType)
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "create",
    possession: "any",
  })
  async createVoucherType(
    @graphql.Args() args: CreateVoucherTypeArgs
  ): Promise<VoucherType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoucherType)
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "update",
    possession: "any",
  })
  async updateVoucherType(
    @graphql.Args() args: UpdateVoucherTypeArgs
  ): Promise<VoucherType | null> {
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

  @graphql.Mutation(() => VoucherType)
  @nestAccessControl.UseRoles({
    resource: "VoucherType",
    action: "delete",
    possession: "any",
  })
  async deleteVoucherType(
    @graphql.Args() args: DeleteVoucherTypeArgs
  ): Promise<VoucherType | null> {
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
