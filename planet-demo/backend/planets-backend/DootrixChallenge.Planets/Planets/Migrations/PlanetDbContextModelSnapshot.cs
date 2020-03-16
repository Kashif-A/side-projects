﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Planets.DataAccess;

namespace Planets.Migrations
{
    [DbContext(typeof(PlanetDbContext))]
    partial class PlanetDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Planets.Models.Planet", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Diameter");

                    b.Property<long>("DistanceFromSun");

                    b.Property<string>("ImageUrl")
                        .IsRequired();

                    b.Property<string>("Mass")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("Planets");

                    b.HasData(
                        new
                        {
                            Id = new Guid("c3611739-dfed-4ef6-9b78-2617e1341247"),
                            Diameter = 4879,
                            DistanceFromSun = 57900000L,
                            ImageUrl = "https://cdn.mos.cms.futurecdn.net/MTEiJvP99DScN3vkAsE9LA-320-80.jpg",
                            Mass = "3.301×1023 kg	",
                            Name = "Mercury"
                        },
                        new
                        {
                            Id = new Guid("0171633a-711e-49cd-8f24-6ed15182d8c1"),
                            Diameter = 12104,
                            DistanceFromSun = 108160000L,
                            ImageUrl = "https://cdn.mos.cms.futurecdn.net/kaPwBjHiUKax8syodHNPmF-320-80.jpg",
                            Mass = "4.867×1024 kg",
                            Name = "Venus"
                        },
                        new
                        {
                            Id = new Guid("2034c93f-cd6a-4f87-aa2b-67b6599a710a"),
                            Diameter = 12742,
                            DistanceFromSun = 149600000L,
                            ImageUrl = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F11%2F999px-Nasa_blue_marble.jpg",
                            Mass = "5.972×1024 kg",
                            Name = "Earth"
                        },
                        new
                        {
                            Id = new Guid("79bf2c1c-0d96-49b5-af0a-2747ab271138"),
                            Diameter = 6779,
                            DistanceFromSun = 227936640L,
                            ImageUrl = "https://space-facts.com/wp-content/uploads/mars.jpg",
                            Mass = "6.417×1023 kg",
                            Name = "Mars"
                        },
                        new
                        {
                            Id = new Guid("f5d63805-39e7-4a3c-a690-062c7f5a1f3d"),
                            Diameter = 139820,
                            DistanceFromSun = 778369000L,
                            ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Jupiter%27s_swirling_colourful_clouds.jpg",
                            Mass = "1.899×1027 kg",
                            Name = "Jupiter"
                        },
                        new
                        {
                            Id = new Guid("5afde4eb-557d-4808-a8c3-b92d7a4a3f44"),
                            Diameter = 116460,
                            DistanceFromSun = 1427034000L,
                            ImageUrl = "https://cdn.hswstatic.com/gif/saturn-lead-image.jpg",
                            Mass = "5.685×1026 kg",
                            Name = "Saturn"
                        },
                        new
                        {
                            Id = new Guid("188d7e00-046e-4306-b409-2008853d1936"),
                            Diameter = 50724,
                            DistanceFromSun = 2870658186L,
                            ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1200px-Uranus2.jpg",
                            Mass = "8.682×1025 kg",
                            Name = "Uranus"
                        },
                        new
                        {
                            Id = new Guid("9b3bd1c3-d417-48fe-8954-40a56e522887"),
                            Diameter = 49244,
                            DistanceFromSun = 4496976000L,
                            ImageUrl = "https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg",
                            Mass = "1.024×1026 kg",
                            Name = "Neptune"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}