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
import { PeriodApplicationWhereInput } from "./PeriodApplicationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PeriodApplicationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PeriodApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PeriodApplicationWhereInput)
  @IsOptional()
  @Field(() => PeriodApplicationWhereInput, {
    nullable: true,
  })
  every?: PeriodApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PeriodApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PeriodApplicationWhereInput)
  @IsOptional()
  @Field(() => PeriodApplicationWhereInput, {
    nullable: true,
  })
  some?: PeriodApplicationWhereInput;

  @ApiProperty({
    required: false,
    type: () => PeriodApplicationWhereInput,
  })
  @ValidateNested()
  @Type(() => PeriodApplicationWhereInput)
  @IsOptional()
  @Field(() => PeriodApplicationWhereInput, {
    nullable: true,
  })
  none?: PeriodApplicationWhereInput;
}
export { PeriodApplicationListRelationFilter as PeriodApplicationListRelationFilter };
