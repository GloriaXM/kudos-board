/*
  Warnings:

  - Added the required column `gifSrc` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `upvotes` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "gifSrc" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "upvotes" INTEGER NOT NULL;
