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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { ProgramModelCreateNestedManyWithoutDegreesInput } from "./ProgramModelCreateNestedManyWithoutDegreesInput";
import { Type } from "class-transformer";

@InputType()
class DegreeCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: () => ProgramModelCreateNestedManyWithoutDegreesInput,
  })
  @ValidateNested()
  @Type(() => ProgramModelCreateNestedManyWithoutDegreesInput)
  @IsOptional()
  @Field(() => ProgramModelCreateNestedManyWithoutDegreesInput, {
    nullable: true,
  })
  programs?: ProgramModelCreateNestedManyWithoutDegreesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  short!: string;
}

export { DegreeCreateInput as DegreeCreateInput };
