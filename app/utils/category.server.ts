import { prisma } from "./db.server";

export async function getCategory() {
  // 2
  const category = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      product: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: 0,
    take: 9999,
  });
  let count = category.map((d) => ({
    id: d.id,
    name: d.name,
    productCount: d.product.length,
  }));
  return count;
}

export async function addCategory(name: string) {
  try {
    await prisma.category.create({ data: { name: name } });
    return "Success";
  } catch (error) {
    throw error;
  }
}
