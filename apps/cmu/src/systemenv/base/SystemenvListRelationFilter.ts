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
import { SystemenvWhereInput } from "./SystemenvWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SystemenvListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SystemenvWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemenvWhereInput)
  @IsOptional()
  @Field(() => SystemenvWhereInput, {
    nullable: true,
  })
  every?: SystemenvWhereInput;

  @ApiProperty({
    required: false,
    type: () => SystemenvWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemenvWhereInput)
  @IsOptional()
  @Field(() => SystemenvWhereInput, {
    nullable: true,
  })
  some?: SystemenvWhereInput;

  @ApiProperty({
    required: false,
    type: () => SystemenvWhereInput,
  })
  @ValidateNested()
  @Type(() => SystemenvWhereInput)
  @IsOptional()
  @Field(() => SystemenvWhereInput, {
    nullable: true,
  })
  none?: SystemenvWhereInput;
}
export { SystemenvListRelationFilter as SystemenvListRelationFilter };
