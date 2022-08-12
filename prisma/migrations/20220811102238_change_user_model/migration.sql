-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "birthplace" TEXT NOT NULL,
    "zodiacalSign" TEXT NOT NULL,
    "favColor" TEXT NOT NULL,
    "favTvShow" TEXT NOT NULL,
    "eyeColor" TEXT NOT NULL,
    "favPizza" TEXT NOT NULL,
    "favBand" TEXT NOT NULL
);
INSERT INTO "new_User" ("age", "birthplace", "eyeColor", "favBand", "favColor", "favPizza", "favTvShow", "name", "surname", "zodiacalSign") SELECT "age", "birthplace", "eyeColor", "favBand", "favColor", "favPizza", "favTvShow", "name", "surname", "zodiacalSign" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
CREATE UNIQUE INDEX "User_surname_key" ON "User"("surname");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
