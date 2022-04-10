import { PrismaClient } from '@prisma/client'

async function seed() {
  const prisma = new PrismaClient({
    log: ['query'],
  })

  await prisma.profile.createMany({
    data: [
      { name: 'Administrador', slug: 'admin' },
      { name: 'Cliente', slug: 'customer' },
      { name: 'Funcionário', slug: 'employee' },
      { name: 'Morador', slug: 'resident' },
      { name: 'Prestador de Serviços', slug: 'sevice' },
      { name: 'Visitante', slug: 'visitor' },
    ],
  })
}

seed()
