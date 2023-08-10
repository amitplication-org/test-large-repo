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
import { GresubjectscoreWhereInput } from "./GresubjectscoreWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GresubjectscoreListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GresubjectscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => GresubjectscoreWhereInput)
  @IsOptional()
  @Field(() => GresubjectscoreWhereInput, {
    nullable: true,
  })
  every?: GresubjectscoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => GresubjectscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => GresubjectscoreWhereInput)
  @IsOptional()
  @Field(() => GresubjectscoreWhereInput, {
    nullable: true,
  })
  some?: GresubjectscoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => GresubjectscoreWhereInput,
  })
  @ValidateNested()
  @Type(() => GresubjectscoreWhereInput)
  @IsOptional()
  @Field(() => GresubjectscoreWhereInput, {
    nullable: true,
  })
  none?: GresubjectscoreWhereInput;
}
export { GresubjectscoreListRelationFilter as GresubjectscoreListRelationFilter };
