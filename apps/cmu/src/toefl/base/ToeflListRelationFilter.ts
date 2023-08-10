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
import { ToeflWhereInput } from "./ToeflWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ToeflListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ToeflWhereInput,
  })
  @ValidateNested()
  @Type(() => ToeflWhereInput)
  @IsOptional()
  @Field(() => ToeflWhereInput, {
    nullable: true,
  })
  every?: ToeflWhereInput;

  @ApiProperty({
    required: false,
    type: () => ToeflWhereInput,
  })
  @ValidateNested()
  @Type(() => ToeflWhereInput)
  @IsOptional()
  @Field(() => ToeflWhereInput, {
    nullable: true,
  })
  some?: ToeflWhereInput;

  @ApiProperty({
    required: false,
    type: () => ToeflWhereInput,
  })
  @ValidateNested()
  @Type(() => ToeflWhereInput)
  @IsOptional()
  @Field(() => ToeflWhereInput, {
    nullable: true,
  })
  none?: ToeflWhereInput;
}
export { ToeflListRelationFilter as ToeflListRelationFilter };
