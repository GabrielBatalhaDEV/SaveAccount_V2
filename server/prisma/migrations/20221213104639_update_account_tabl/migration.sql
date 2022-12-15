-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL
);
INSERT INTO "new_Account" ("email", "id", "password") SELECT "email", "id", "password" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
