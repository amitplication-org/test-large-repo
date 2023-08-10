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
import { ApplicationreqWhereUniqueInput } from "../../applicationreq/base/ApplicationreqWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProgramModelWhereUniqueInput } from "../../programModel/base/ProgramModelWhereUniqueInput";

@InputType()
class ProgramsApplicationreqUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicationreqWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicationreqWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicationreqWhereUniqueInput, {
    nullable: true,
  })
  applicationreqs?: ApplicationreqWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProgramModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProgramModelWhereUniqueInput)
  @IsOptional()
  @Field(() => ProgramModelWhereUniqueInput, {
    nullable: true,
  })
  programs?: ProgramModelWhereUniqueInput;
}

export { ProgramsApplicationreqUpdateInput as ProgramsApplicationreqUpdateInput };
