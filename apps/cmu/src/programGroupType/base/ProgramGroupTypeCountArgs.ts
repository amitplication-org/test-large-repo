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
import { ProgramGroupTypeWhereInput } from "./ProgramGroupTypeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProgramGroupTypeCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProgramGroupTypeWhereInput,
  })
  @Field(() => ProgramGroupTypeWhereInput, { nullable: true })
  @Type(() => ProgramGroupTypeWhereInput)
  where?: ProgramGroupTypeWhereInput;
}

export { ProgramGroupTypeCountArgs as ProgramGroupTypeCountArgs };
