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
import { DuolingoDataCopyWhereInput } from "./DuolingoDataCopyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DuolingoDataCopyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DuolingoDataCopyWhereInput,
  })
  @ValidateNested()
  @Type(() => DuolingoDataCopyWhereInput)
  @IsOptional()
  @Field(() => DuolingoDataCopyWhereInput, {
    nullable: true,
  })
  every?: DuolingoDataCopyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DuolingoDataCopyWhereInput,
  })
  @ValidateNested()
  @Type(() => DuolingoDataCopyWhereInput)
  @IsOptional()
  @Field(() => DuolingoDataCopyWhereInput, {
    nullable: true,
  })
  some?: DuolingoDataCopyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DuolingoDataCopyWhereInput,
  })
  @ValidateNested()
  @Type(() => DuolingoDataCopyWhereInput)
  @IsOptional()
  @Field(() => DuolingoDataCopyWhereInput, {
    nullable: true,
  })
  none?: DuolingoDataCopyWhereInput;
}
export { DuolingoDataCopyListRelationFilter as DuolingoDataCopyListRelationFilter };
