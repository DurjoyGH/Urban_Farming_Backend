/*
  Warnings:

  - Changed the type of `certificationStatus` on the `VendorProfile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CertificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "VendorProfile" DROP COLUMN "certificationStatus",
ADD COLUMN     "certificationStatus" "CertificationStatus" NOT NULL;
