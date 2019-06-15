using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProvaPedroWeb2.Models
{
    public partial class provadbContext : DbContext
    {
        public provadbContext()
        {
        }

        public provadbContext(DbContextOptions<provadbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Animal> Animal { get; set; }
        public virtual DbSet<Vacina> Vacina { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Server=localhost;Database=provadb;Port=5432;User Id=postgres;Password=postgres;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Animal>(entity =>
            {
                entity.HasKey(e => e.IdAnimal);

                entity.ToTable("animal");

                entity.Property(e => e.IdAnimal).HasColumnName("id_animal");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnName("descricao")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Vacina>(entity =>
            {
                entity.HasKey(e => e.IdVacina);

                entity.ToTable("vacina");

                entity.Property(e => e.IdVacina).HasColumnName("id_vacina");

                entity.Property(e => e.Aplicador)
                    .IsRequired()
                    .HasColumnName("aplicador")
                    .HasMaxLength(100);

                entity.Property(e => e.DescMedicamento)
                    .IsRequired()
                    .HasColumnName("desc_medicamento")
                    .HasMaxLength(100);

                entity.Property(e => e.Dosagem)
                    .HasColumnName("dosagem")
                    .HasColumnType("numeric(15,2)");

                entity.Property(e => e.DtVacina)
                    .HasColumnName("dt_vacina")
                    .HasDefaultValueSql("now()");

                entity.Property(e => e.IdAnimal).HasColumnName("id_animal");

                entity.Property(e => e.Peso)
                    .HasColumnName("peso")
                    .HasColumnType("numeric(15,2)");

                entity.HasOne(d => d.IdAnimalNavigation)
                    .WithMany(p => p.Vacina)
                    .HasForeignKey(d => d.IdAnimal)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("vacina_id_animal_fkey");
            });
        }
    }
}
