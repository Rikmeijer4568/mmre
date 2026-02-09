import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@mmre.nl' },
    update: {},
    create: {
      email: 'admin@mmre.nl',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })
  console.log('Created admin user:', adminUser.email)

  // Create neighborhoods
  const neighborhoods = [
    { slug: 'jordaan', name: 'Jordaan', description: 'Charming canals, boutique shops, and a vibrant arts scene', order: 0 },
    { slug: 'de-pijp', name: 'De Pijp', description: 'Diverse, trendy, and full of life', order: 1 },
    { slug: 'oud-zuid', name: 'Oud-Zuid', description: 'Elegant streets and museums', order: 2 },
    { slug: 'centrum', name: 'Centrum', description: 'Historic heart of Amsterdam', order: 3 },
    { slug: 'amsterdam-west', name: 'Amsterdam West', description: 'Creative, diverse, and up-and-coming', order: 4 },
    { slug: 'amsterdam-oost', name: 'Amsterdam Oost', description: 'Green, family-friendly, and diverse', order: 5 },
    { slug: 'amsterdam-noord', name: 'Amsterdam Noord', description: 'Creative frontier with space', order: 6 },
    { slug: 'amstelveen', name: 'Amstelveen', description: 'Quiet suburb with international appeal', order: 7 },
  ]

  for (const neighborhood of neighborhoods) {
    await prisma.neighborhood.upsert({
      where: { slug: neighborhood.slug },
      update: neighborhood,
      create: neighborhood,
    })
  }
  console.log('Created neighborhoods:', neighborhoods.length)

  // Create FAQs
  const faqs = [
    { question: 'What areas does MMRE cover?', answer: 'We primarily focus on Amsterdam and the greater Amsterdam area, including Amstelveen, Diemen, and parts of Noord-Holland.', category: 'general', order: 0 },
    { question: 'What languages do you support?', answer: 'Our team speaks English, Dutch, and German fluently. We can also assist in French and Spanish for basic communication.', category: 'general', order: 1 },
    { question: 'What budget should I have for renting in Amsterdam?', answer: 'The Amsterdam rental market starts around €1,500/month for studios. For a comfortable 2-bedroom apartment, expect €2,500-3,500/month.', category: 'tenants', order: 2 },
    { question: 'What documents do I need to rent?', answer: 'Typically you need: valid ID/passport, proof of income (employment contract, recent payslips), bank statements, and sometimes a reference from a previous landlord.', category: 'tenants', order: 3 },
    { question: 'What is your fee structure?', answer: 'Our standard fee is one month rent (excluding VAT) for finding a tenant. Additional property management services are available at competitive rates.', category: 'landlords', order: 4 },
    { question: 'How do you screen tenants?', answer: 'We verify employment and income (minimum 3x monthly rent), check references from previous landlords, verify identity documents, and assess overall reliability.', category: 'landlords', order: 5 },
  ]

  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: faq,
    })
  }
  console.log('Created FAQs:', faqs.length)

  // Create testimonials with messages
  const testimonials = [
    {
      name: 'Sarah M.',
      label: 'Expat from UK',
      messages: [
        { content: "Hi! I just moved to Amsterdam and need help finding an apartment.", isFromClient: true, timestamp: '10:32 AM', order: 0 },
        { content: "Welcome to Amsterdam! We'd be happy to help. What is your budget and preferred area?", isFromClient: false, timestamp: '10:33 AM', order: 1 },
        { content: "Thanks! Budget around €2500, ideally Jordaan or De Pijp area.", isFromClient: true, timestamp: '10:35 AM', order: 2 },
      ],
    },
    {
      name: 'Thomas K.',
      label: 'Landlord in Centrum',
      messages: [
        { content: "I want to rent out my apartment. Can you help?", isFromClient: true, timestamp: '2:15 PM', order: 0 },
        { content: "Of course! We can provide a free rental estimate. What is the address?", isFromClient: false, timestamp: '2:16 PM', order: 1 },
        { content: "Great service! Found a tenant within 2 weeks!", isFromClient: true, timestamp: '3:00 PM', order: 2 },
      ],
    },
  ]

  for (const testimonial of testimonials) {
    const { messages, ...testimonialData } = testimonial
    await prisma.testimonial.create({
      data: {
        ...testimonialData,
        messages: {
          create: messages,
        },
      },
    })
  }
  console.log('Created testimonials:', testimonials.length)

  // Create services
  const services = [
    { title: 'Property Valuation', description: 'Accurate rental price based on market analysis', icon: 'Home', order: 0 },
    { title: 'Professional Marketing', description: 'High-quality photos and premium listings', icon: 'Search', order: 1 },
    { title: 'Tenant Screening', description: 'Thorough background and income verification', icon: 'Users', order: 2 },
    { title: 'Contract Management', description: 'Legal rental agreements and documentation', icon: 'FileText', order: 3 },
    { title: 'Key Handover', description: 'Coordinated move-in and property inspection', icon: 'Key', order: 4 },
    { title: 'Ongoing Support', description: 'Point of contact for you and your tenant', icon: 'Headphones', order: 5 },
  ]

  for (const service of services) {
    await prisma.service.create({
      data: service,
    })
  }
  console.log('Created services:', services.length)

  // Create stats
  const stats = [
    { page: 'home', label: 'Satisfied Clients', value: '500+', order: 0 },
    { page: 'home', label: 'Years Experience', value: '10+', order: 1 },
    { page: 'rent-in', label: 'Expats Helped', value: '500+', order: 0 },
    { page: 'rent-in', label: 'Average Rating', value: '4.9', order: 1 },
    { page: 'rent-out', label: 'Properties Managed', value: '200+', order: 0 },
    { page: 'rent-out', label: 'Occupancy Rate', value: '98%', order: 1 },
  ]

  for (const stat of stats) {
    await prisma.stat.create({
      data: stat,
    })
  }
  console.log('Created stats:', stats.length)

  // Create settings
  const settings = [
    { key: 'whatsapp_number', value: '+31202101694' },
    { key: 'contact_email', value: 'info@mmre.nl' },
    { key: 'notification_email', value: 'team@mmre.nl' },
    { key: 'office_address', value: 'Amsterdam, Netherlands' },
  ]

  for (const setting of settings) {
    await prisma.settings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    })
  }
  console.log('Created settings:', settings.length)

  console.log('Database seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
