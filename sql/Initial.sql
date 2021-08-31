CREATE DATABASE [Todobernetes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Todobernetes', FILENAME = N'/var/opt/mssql/data/Todobernetes.mdf' , SIZE = 8192KB , FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Todobernetes_log', FILENAME = N'/var/opt/mssql/data/Todobernetes_log.ldf' , SIZE = 8192KB , FILEGROWTH = 65536KB )
GO

USE [Todobernetes]
GO

CREATE TABLE [TodoItems] (
	[Id] INT NOT NULL IDENTITY(1,1),
	[Name] NVARCHAR(MAX) NOT NULL,
	[Completed] BIT NOT NULL
)
GO

ALTER TABLE [TodoItems] ADD  PRIMARY KEY (Id)
GO