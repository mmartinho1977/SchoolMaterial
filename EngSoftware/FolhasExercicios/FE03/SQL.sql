CREATE TABLE [dbo].[Zonas] (
    [Id]                INT     IDENTITY (1, 1)     NOT NULL,
    [Descricao]         NVARCHAR (250)              NOT NULL,
    [Activo]            BIT                         NOT NULL,
    [DataCriacao]       DATETIME                    NOT NULL,
    [DataAtualizacao]   DATETIME                    NOT NULL,

    CONSTRAINT [PK_Zona] PRIMARY KEY CLUSTERED ([Id] DESC)

);

CREATE TABLE [dbo].[Talhoes] (
    [Id]                INT     IDENTITY (1, 1)     NOT NULL,
    [Codigo]            nvarchar(5)                 NOT NULL,
    [HortaId]           INT                         NOT NULL,
    [UtilizadorId]      INT                         NOT NULL,
    //...
    [Activo]            BIT                         NOT NULL,
    [DataCriacao]       DATETIME                    NOT NULL,
    [DataAtualizacao]   DATETIME                    NOT NULL,

    CONSTRAINT [PK_Talhoes] PRIMARY KEY NONCLUSTERED ([Id]);
    CONSTRAINT [FK_Talhoes_Hortas] FOREIGN KEY ([HortaId]) REFERENCES [Hortas]([Id]);
    CONSTRAINT [FK_Talhoes_Utilizadores] FOREIGN KEY ([UtilizadorId]) REFERENCES [Utilizadores]([Id]);
    CONSTRAINT [CK_Talhoes_Codigo] UNIQUE (Codigo)
);

CREATE CLUSTERED INDEX IX_Talhoes_Codigo_Area (codigo ASC, area DESC);
CREATE NONCLUSTERED INDEX IX_Talhoes_Codigo_Area (codigo, area)



