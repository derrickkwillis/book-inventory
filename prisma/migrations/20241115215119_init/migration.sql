-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publicationDate" DATETIME NOT NULL,
    "isbn" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_isbn_key" ON "Inventory"("isbn");
