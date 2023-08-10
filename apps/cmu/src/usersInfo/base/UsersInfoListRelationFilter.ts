/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsersInfoWhereInput } from "./UsersInfoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UsersInfoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UsersInfoWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersInfoWhereInput)
  @IsOptional()
  @Field(() => UsersInfoWhereInput, {
    nullable: true,
  })
  every?: UsersInfoWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsersInfoWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersInfoWhereInput)
  @IsOptional()
  @Field(() => UsersInfoWhereInput, {
    nullable: true,
  })
  some?: UsersInfoWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsersInfoWhereInput,
  })
  @ValidateNested()
  @Type(() => UsersInfoWhereInput)
  @IsOptional()
  @Field(() => UsersInfoWhereInput, {
    nullable: true,
  })
  none?: UsersInfoWhereInput;
}
export { UsersInfoListRelationFilter as UsersInfoListRelationFilter };
