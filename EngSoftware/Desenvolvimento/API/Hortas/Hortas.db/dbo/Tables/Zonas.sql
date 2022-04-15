CREATE TABLE [dbo].[Zonas] (
    [Id]              INT            IDENTITY (1, 1) NOT NULL,
    [Descricao]       NVARCHAR (250) NOT NULL,
    [Activo]          BIT            NOT NULL,
    [DataCriacao]     DATETIME       NOT NULL,
    [DataAtualizacao] DATETIME       NOT NULL,
    CONSTRAINT [PK_Zona] PRIMARY KEY CLUSTERED ([Id] DESC)
);

