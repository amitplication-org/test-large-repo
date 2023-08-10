/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, RegistrationFeePayment } from "@prisma/client";

export class RegistrationFeePaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RegistrationFeePaymentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentCountArgs>
  ): Promise<number> {
    return this.prisma.registrationFeePayment.count(args);
  }

  async findMany<T extends Prisma.RegistrationFeePaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentFindManyArgs>
  ): Promise<RegistrationFeePayment[]> {
    return this.prisma.registrationFeePayment.findMany(args);
  }
  async findOne<T extends Prisma.RegistrationFeePaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentFindUniqueArgs>
  ): Promise<RegistrationFeePayment | null> {
    return this.prisma.registrationFeePayment.findUnique(args);
  }
  async create<T extends Prisma.RegistrationFeePaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentCreateArgs>
  ): Promise<RegistrationFeePayment> {
    return this.prisma.registrationFeePayment.create<T>(args);
  }
  async update<T extends Prisma.RegistrationFeePaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentUpdateArgs>
  ): Promise<RegistrationFeePayment> {
    return this.prisma.registrationFeePayment.update<T>(args);
  }
  async delete<T extends Prisma.RegistrationFeePaymentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RegistrationFeePaymentDeleteArgs>
  ): Promise<RegistrationFeePayment> {
    return this.prisma.registrationFeePayment.delete(args);
  }
}
