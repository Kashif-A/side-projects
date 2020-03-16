using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Planets.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Planets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: false),
                    DistanceFromSun = table.Column<long>(nullable: false),
                    Mass = table.Column<string>(nullable: false),
                    Diameter = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Planets", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Planets",
                columns: new[] { "Id", "Diameter", "DistanceFromSun", "ImageUrl", "Mass", "Name" },
                values: new object[,]
                {
                    { new Guid("c3611739-dfed-4ef6-9b78-2617e1341247"), 4879, 57900000L, "https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg", "3.301×1023 kg	", "Mercury" },
                    { new Guid("0171633a-711e-49cd-8f24-6ed15182d8c1"), 12104, 108160000L, "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF-320-80.jpg", "4.867×1024 kg", "Venus" },
                    { new Guid("2034c93f-cd6a-4f87-aa2b-67b6599a710a"), 12742, 149600000L, "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F11%2F999px-Nasa_blue_marble.jpg", "5.972×1024 kg", "Earth" },
                    { new Guid("79bf2c1c-0d96-49b5-af0a-2747ab271138"), 6779, 227936640L, "https://space-facts.com/wp-content/uploads/mars.jpg", "6.417×1023 kg", "Mars" },
                    { new Guid("f5d63805-39e7-4a3c-a690-062c7f5a1f3d"), 139820, 778369000L, "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jupiter%27s_swirling_colourful_clouds.jpg", "1.899×1027 kg", "Jupiter" },
                    { new Guid("5afde4eb-557d-4808-a8c3-b92d7a4a3f44"), 116460, 1427034000L, "https://cdn.hswstatic.com/gif/saturn-lead-image.jpg", "5.685×1026 kg", "Saturn" },
                    { new Guid("188d7e00-046e-4306-b409-2008853d1936"), 50724, 2870658186L, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg", "8.682×1025 kg", "Uranus" },
                    { new Guid("9b3bd1c3-d417-48fe-8954-40a56e522887"), 49244, 4496976000L, "https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg", "1.024×1026 kg", "Neptune" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Planets");
        }
    }
}
