using Microsoft.EntityFrameworkCore.Migrations;

namespace Logistics.DB.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Letters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    bagNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    amountOfLetters = table.Column<int>(type: "int", nullable: false),
                    bagWeight = table.Column<float>(type: "real", nullable: false),
                    shippingPrice = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Letters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Parcels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    parcelNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    recipiantsName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    destinationCountry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    parcelWeight = table.Column<float>(type: "real", nullable: false),
                    parcelPrice = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Parcels", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Letters");

            migrationBuilder.DropTable(
                name: "Parcels");
        }
    }
}
