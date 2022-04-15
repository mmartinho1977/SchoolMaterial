CREATE TABLE [dbo].[HortasZonas] (
    [Id]              INT             IDENTITY (1, 1) NOT NULL,
    [IdHorta]         INT             NOT NULL,
    [IdZona]          INT             NOT NULL,
    [Preco]           DECIMAL (18, 4) NOT NULL,
    [Activo]          BIT             NOT NULL,
    [DataCriacao]     DATETIME        NOT NULL,
    [DataAtualizacao] DATETIME        NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_HortasZonas_Hortas] FOREIGN KEY ([IdHorta]) REFERENCES [dbo].[Hortas] ([Id]),
    CONSTRAINT [FK_HortasZonas_Zonas] FOREIGN KEY ([IdZona]) REFERENCES [dbo].[Zonas] ([Id]),
    CONSTRAINT [CK_HortasZonas_IdHorta_IdZona] UNIQUE NONCLUSTERED ([IdHorta] ASC, [IdZona] ASC)
);

