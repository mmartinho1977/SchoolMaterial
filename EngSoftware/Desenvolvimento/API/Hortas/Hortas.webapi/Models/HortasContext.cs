using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Hortas.webapi.Models
{
    public partial class HortasContext : DbContext
    {
        public HortasContext()
        {

        }

        public HortasContext(DbContextOptions<HortasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Horta> Hortas { get; set; }
        public virtual DbSet<HortasZona> HortasZonas { get; set; }
        public virtual DbSet<Zona> Zonas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//              #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-G3LLR20; Database =Hortas; Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Horta>(entity =>
            {
                entity.Property(e => e.Concelho)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.DataAtualizacao).HasColumnType("datetime");

                entity.Property(e => e.DataCriacao).HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<HortasZona>(entity =>
            {
                //entity.HasIndex(e => new { e.IdHorta, e.IdZona }, "CK_HortasZonas_IdHorta_IdZona")
                    //.IsUnique();
                entity.Property(e => e.IdHorta).HasColumnType("int");
                entity.Property(e => e.IdZona).HasColumnType("int");

                entity.Property(e => e.DataAtualizacao).HasColumnType("datetime");

                entity.Property(e => e.DataCriacao).HasColumnType("datetime");

                entity.Property(e => e.Preco).HasColumnType("decimal(18, 4)");

                entity.HasOne(d => d.IdHortaNavigation)
                    .WithMany(p => p.HortasZonas)
                    .HasForeignKey(d => d.IdHorta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HortasZonas_Hortas");

                entity.HasOne(d => d.IdZonaNavigation)
                    .WithMany(p => p.HortasZonas)
                    .HasForeignKey(d => d.IdZona)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HortasZonas_Zonas");
            });

            modelBuilder.Entity<Zona>(entity =>
            {
                entity.Property(e => e.DataAtualizacao).HasColumnType("datetime");

                entity.Property(e => e.DataCriacao).HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
