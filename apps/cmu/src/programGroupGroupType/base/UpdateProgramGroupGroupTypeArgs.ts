/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProgramGroupGroupTypeWhereUniqueInput } from "./ProgramGroupGroupTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProgramGroupGroupTypeUpdateInput } from "./ProgramGroupGroupTypeUpdateInput";

@ArgsType()
class UpdateProgramGroupGroupTypeArgs {
  @ApiProperty({
    required: true,
    type: () => ProgramGroupGroupTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProgramGroupGroupTypeWhereUniqueInput)
  @Field(() => ProgramGroupGroupTypeWhereUniqueInput, { nullable: false })
  where!: ProgramGroupGroupTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProgramGroupGroupTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProgramGroupGroupTypeUpdateInput)
  @Field(() => ProgramGroupGroupTypeUpdateInput, { nullable: false })
  data!: ProgramGroupGroupTypeUpdateInput;
}

export { UpdateProgramGroupGroupTypeArgs as UpdateProgramGroupGroupTypeArgs };
