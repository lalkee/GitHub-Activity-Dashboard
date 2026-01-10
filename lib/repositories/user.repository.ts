import { prisma } from "@/lib/db/prisma";

export const UserRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  },

  create(email: string, password: string, role: "USER" | "ADMIN" = "USER") {
    return prisma.user.create({
      data: {
        email,
        password,
        role,
      },
    });
  },
};
