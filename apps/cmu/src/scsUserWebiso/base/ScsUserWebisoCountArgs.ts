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
import { ScsUserWebisoWhereInput } from "./ScsUserWebisoWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ScsUserWebisoCountArgs {
  @ApiProperty({
    required: false,
    type: () => ScsUserWebisoWhereInput,
  })
  @Field(() => ScsUserWebisoWhereInput, { nullable: true })
  @Type(() => ScsUserWebisoWhereInput)
  where?: ScsUserWebisoWhereInput;
}

export { ScsUserWebisoCountArgs as ScsUserWebisoCountArgs };
