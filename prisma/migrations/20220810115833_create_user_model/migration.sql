-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthplace" TEXT NOT NULL,
    "zodiacalSign" TEXT NOT NULL,
    "favColor" TEXT NOT NULL,
    "favTvShow" TEXT NOT NULL,
    "eyeColor" TEXT NOT NULL,
    "favPizza" TEXT NOT NULL,
    "favBand" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_surname_key" ON "User"("surname");
