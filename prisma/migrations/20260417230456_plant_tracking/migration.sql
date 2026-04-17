-- CreateTable
CREATE TABLE "PlantTracking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "rentalId" INTEGER NOT NULL,
    "plantName" TEXT NOT NULL,
    "growthStage" TEXT NOT NULL,
    "health" TEXT NOT NULL,
    "notes" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlantTracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlantTracking" ADD CONSTRAINT "PlantTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantTracking" ADD CONSTRAINT "PlantTracking_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "RentalSpace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
