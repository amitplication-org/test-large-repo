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
import { DisabilityTypeWhereInput } from "./DisabilityTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DisabilityTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DisabilityTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => DisabilityTypeWhereInput)
  @IsOptional()
  @Field(() => DisabilityTypeWhereInput, {
    nullable: true,
  })
  every?: DisabilityTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => DisabilityTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => DisabilityTypeWhereInput)
  @IsOptional()
  @Field(() => DisabilityTypeWhereInput, {
    nullable: true,
  })
  some?: DisabilityTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => DisabilityTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => DisabilityTypeWhereInput)
  @IsOptional()
  @Field(() => DisabilityTypeWhereInput, {
    nullable: true,
  })
  none?: DisabilityTypeWhereInput;
}
export { DisabilityTypeListRelationFilter as DisabilityTypeListRelationFilter };
