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
import { StudentDecisionWhereInput } from "./StudentDecisionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StudentDecisionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StudentDecisionWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentDecisionWhereInput)
  @IsOptional()
  @Field(() => StudentDecisionWhereInput, {
    nullable: true,
  })
  every?: StudentDecisionWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentDecisionWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentDecisionWhereInput)
  @IsOptional()
  @Field(() => StudentDecisionWhereInput, {
    nullable: true,
  })
  some?: StudentDecisionWhereInput;

  @ApiProperty({
    required: false,
    type: () => StudentDecisionWhereInput,
  })
  @ValidateNested()
  @Type(() => StudentDecisionWhereInput)
  @IsOptional()
  @Field(() => StudentDecisionWhereInput, {
    nullable: true,
  })
  none?: StudentDecisionWhereInput;
}
export { StudentDecisionListRelationFilter as StudentDecisionListRelationFilter };
