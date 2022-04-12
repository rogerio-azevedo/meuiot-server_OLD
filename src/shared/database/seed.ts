import { prisma } from '../database/prismaClient'

async function seed() {
  await prisma.profile.createMany({
    data: [
      { name: 'Administrador', slug: 'admin' },
      { name: 'Cliente', slug: 'customer' },
      { name: 'Funcionário', slug: 'employee' },
      { name: 'Morador', slug: 'resident' },
      { name: 'Prestador de Serviços', slug: 'sevice' },
      { name: 'Visitante', slug: 'visitor' },
      { name: 'Zelador', slug: 'caretaker' },
    ],
  })
}

seed()
