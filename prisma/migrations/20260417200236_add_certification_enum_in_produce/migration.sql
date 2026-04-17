/*
  Warnings:

  - Changed the type of `certificationStatus` on the `Produce` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Produce" DROP COLUMN "certificationStatus",
ADD COLUMN     "certificationStatus" "CertificationStatus" NOT NULL;
