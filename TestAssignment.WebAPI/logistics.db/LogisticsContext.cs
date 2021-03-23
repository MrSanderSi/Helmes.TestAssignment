using Microsoft.EntityFrameworkCore;


namespace Logistics.DB
{
    public class LogisticsContext : DbContext
    {
        public DbSet<Parcel> Parcels { get; set; }
        public DbSet<Letter> Letters { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
            @"Server=(localdb)\mssqllocaldb;Database=Logistics;Integrated Security=True");
        }
    }
}
