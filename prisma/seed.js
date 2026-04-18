const bcrypt = require("bcrypt");
const prisma = require("../src/config/prisma");

async function main() {
  console.log("🌱 Seeding started...");

  await prisma.plantTracking.deleteMany();
  await prisma.communityPost.deleteMany();
  await prisma.order.deleteMany();
  await prisma.sustainabilityCert.deleteMany();
  await prisma.produce.deleteMany();
  await prisma.rentalSpace.deleteMany();
  await prisma.vendorProfile.deleteMany();
  await prisma.user.deleteMany();

  // 🔐 Hash password
  const password = await bcrypt.hash("123456", 10);

  // 🧑 Create Admin
  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password,
      role: "ADMIN",
      status: "ACTIVE",
    },
  });

  console.log("✅ Admin created");

  // 👥 Create Customers
  const customers = [];
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Customer ${i}`,
        email: `customer${i}@example.com`,
        password,
        role: "CUSTOMER",
        status: "ACTIVE",
      },
    });
    customers.push(user);
  }

  console.log("✅ Customers created");

  // 🧑‍🌾 Create Vendors (User + VendorProfile)
  const vendors = [];

  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `Vendor ${i}`,
        email: `vendor${i}@example.com`,
        password,
        role: "VENDOR",
        status: "ACTIVE",
      },
    });

    const vendorProfile = await prisma.vendorProfile.create({
      data: {
        userId: user.id,
        farmName: `Green Farm ${i}`,
        farmLocation: `Location ${i}`,
        certificationStatus: "APPROVED",
      },
    });

    vendors.push(vendorProfile);
  }

  console.log("✅ Vendors created");

  // 🥕 Create 100 Products
  const categories = ["Vegetable", "Fruit", "Herb"];

  for (let i = 1; i <= 100; i++) {
    const vendor = vendors[i % vendors.length];

    await prisma.produce.create({
      data: {
        vendorId: vendor.id,
        name: `Product ${i}`,
        description: `Fresh organic product ${i}`,
        price: Math.floor(Math.random() * 100) + 10,
        category: categories[i % categories.length],
        certificationStatus: "APPROVED",
        availableQuantity: Math.floor(Math.random() * 100) + 20,
      },
    });
  }

  console.log("✅ 100 Products created");

  // 🏡 Create Rental Spaces
  for (let i = 0; i < vendors.length; i++) {
    await prisma.rentalSpace.create({
      data: {
        vendorId: vendors[i].id,
        location: `Farm Area ${i + 1}`,
        size: `${Math.floor(Math.random() * 50) + 10} sq ft`,
        price: Math.floor(Math.random() * 500) + 100,
        availability: true,
      },
    });
  }

  console.log("✅ Rental spaces created");

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });