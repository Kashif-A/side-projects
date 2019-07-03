using Microsoft.EntityFrameworkCore.Migrations;

namespace webapp.Migrations
{
    public partial class webappModelsEmployeeContextSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Id", "name" },
                values: new object[] { 1, "patrick" });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Id", "name" },
                values: new object[] { 2, "nick" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Employees",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
