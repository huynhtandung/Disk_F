USE [master]
GO
/****** Object:  Database [BGrade]    Script Date: 2019-11-13 8:28:30 PM ******/
CREATE DATABASE [BGrade]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BGrade', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\BGrade.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BGrade_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\BGrade_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [BGrade] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BGrade].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BGrade] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BGrade] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BGrade] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BGrade] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BGrade] SET ARITHABORT OFF 
GO
ALTER DATABASE [BGrade] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BGrade] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BGrade] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BGrade] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BGrade] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BGrade] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BGrade] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BGrade] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BGrade] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BGrade] SET  ENABLE_BROKER 
GO
ALTER DATABASE [BGrade] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BGrade] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BGrade] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BGrade] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BGrade] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BGrade] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BGrade] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BGrade] SET RECOVERY FULL 
GO
ALTER DATABASE [BGrade] SET  MULTI_USER 
GO
ALTER DATABASE [BGrade] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BGrade] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BGrade] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BGrade] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BGrade] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'BGrade', N'ON'
GO
ALTER DATABASE [BGrade] SET QUERY_STORE = OFF
GO
USE [BGrade]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [BGrade]
GO
/****** Object:  Table [dbo].[AcademicAffairsDepartment]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AcademicAffairsDepartment](
	[AAD_Username] [varchar](30) NOT NULL,
	[AAD_Password] [varchar](30) NULL,
	[AAD_Name] [nvarchar](30) NULL,
	[PrivateKey] [nchar](100) NULL,
	[WalletAddress] [nchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[AAD_Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Announce]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Announce](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Session_ID] [int] NULL,
	[OutLine_ID] [int] NULL,
	[DateTime] [varchar](40) NULL,
	[Type] [varchar](10) NULL,
	[Reason] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Class]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Class](
	[Class_ID] [int] IDENTITY(1,1) NOT NULL,
	[Class_Name] [nvarchar](20) NULL,
	[Class_Course] [int] NULL,
	[Class_Department] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Class_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[Course_ID] [varchar](20) NOT NULL,
	[Course_Name] [nvarchar](50) NULL,
	[Course_Number_Of_Learning_Unit] [int] NULL,
	[Course_Dep_ID] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Course_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dean]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dean](
	[Dean_Username] [varchar](30) NOT NULL,
	[Dean_Password] [varchar](30) NULL,
	[Dean_Name] [nvarchar](30) NULL,
	[PrivateKey] [nchar](100) NULL,
	[WalletAddress] [nchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Dean_Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[Dep_ID] [varchar](10) NOT NULL,
	[Dep_Name] [nvarchar](30) NULL,
	[Dep_Dean_Username] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[Dep_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[JoinSession]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[JoinSession](
	[JS_Session_ID] [int] NOT NULL,
	[JS_Student_ID] [varchar](15) NOT NULL,
 CONSTRAINT [pk_JoinSession] PRIMARY KEY CLUSTERED 
(
	[JS_Session_ID] ASC,
	[JS_Student_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lecturer]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lecturer](
	[Lecturer_ID] [varchar](15) NOT NULL,
	[Lecturer_Username] [varchar](30) NULL,
	[Lecturer_Password] [varchar](30) NULL,
	[Lecturer_Name] [nvarchar](30) NULL,
	[Lecturer_Gender] [bit] NULL,
	[Lecturer_Address] [nvarchar](100) NULL,
	[Lecturer_Email] [varchar](40) NULL,
	[Lecturer_Dep_ID] [varchar](10) NULL,
	[Lecturer_Year] [int] NULL,
	[PrivateKey] [nchar](100) NULL,
	[WalletAddress] [nchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[Lecturer_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OutLine]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OutLine](
	[OutLine_ID] [int] IDENTITY(1,1) NOT NULL,
	[OutLine_Session_ID] [int] NULL,
	[OutLine_Name] [nvarchar](30) NULL,
	[OutLine_Percent] [int] NULL,
	[OutLine_DeadLine] [date] NULL,
	[IsFinalTest] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[OutLine_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Request]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Lecturer_ID] [varchar](15) NULL,
	[Session_ID] [int] NULL,
	[OutLine_ID] [int] NULL,
	[Grade] [text] NULL,
	[DateTime] [varchar](50) NULL,
	[AcceptByDean] [int] NULL,
	[AcceptByPDT] [int] NULL,
	[STT] [int] NULL,
	[OldGrade] [text] NULL,
	[Reason] [text] NULL,
	[HasUpload] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Session]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Session](
	[Session_ID] [int] IDENTITY(1,1) NOT NULL,
	[Session_Course_ID] [varchar](20) NULL,
	[Session_Lecturer_ID] [varchar](15) NULL,
	[Session_Year] [char](10) NULL,
	[Session_Semester] [int] NULL,
	[Session_Start_Date] [date] NULL,
	[Session_End_Date] [date] NULL,
	[Session_Type] [nchar](10) NULL,
	[Session_IsUpload] [bit] NULL,
	[Session_IsSubmitFinalTest] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[Session_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[Student_ID] [varchar](15) NOT NULL,
	[Student_Username] [varchar](30) NULL,
	[Student_Password] [varchar](30) NULL,
	[Student_Name] [nvarchar](30) NULL,
	[Student_Gender] [bit] NULL,
	[Student_Address] [nvarchar](100) NULL,
	[Student_Email] [varchar](40) NULL,
	[Student_Dep_ID] [varchar](10) NULL,
	[Student_Year] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Student_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentClass]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentClass](
	[Class_ID] [int] NOT NULL,
	[Student_ID] [varchar](15) NOT NULL,
 CONSTRAINT [pk_studentclass] PRIMARY KEY CLUSTERED 
(
	[Class_ID] ASC,
	[Student_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrHash]    Script Date: 2019-11-13 8:28:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrHash](
	[TrHash_ID] [int] IDENTITY(1,1) NOT NULL,
	[TrHash_OutLine_ID] [int] NOT NULL,
	[TrHash] [text] NULL,
	[DateTime] [text] NULL,
 CONSTRAINT [pk_hash] PRIMARY KEY CLUSTERED 
(
	[TrHash_ID] ASC,
	[TrHash_OutLine_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[AcademicAffairsDepartment] ([AAD_Username], [AAD_Password], [AAD_Name], [PrivateKey], [WalletAddress]) VALUES (N'hoanglinhgiang', N'123', N'Hoàng Linh Giang', N'2c950eba9f6ddbc30db5d607f8db31b4aed7fa12fa9f74b8997cb09fb9af609e                                    ', N'0x6DeFAd2d9841203B9C7062c143FEd7295d065aaE                                                          ')
SET IDENTITY_INSERT [dbo].[Announce] ON 

INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (1, 7, 19, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (2, 5, 10, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (3, 3, 5, N'21:19 5/11/2019', N'PDT', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (4, 4, 9, N'21:19 5/11/2019', N'PDT', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (5, 3, 5, N'21:19 5/11/2019', N'PDT', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (6, 6, 18, N'21:19 5/11/2019', N'PDT', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (7, 5, 10, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (8, 3, 1, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (9, 4, 6, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (10, 4, 6, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (11, NULL, NULL, N'21:19 5/11/2019', NULL, NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (12, 4, 6, N'21:19 5/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (13, 7, 19, N'20:49 9/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (14, 7, 19, N'20:51 9/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (15, 7, 19, N'20:53 9/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (16, 7, 19, N'20:55 9/11/2019', N'Lecturer', NULL)
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (17, 7, 19, N'20:58 9/11/2019', N'Lecturer', N'Nhap nham')
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (18, 7, 19, N'20:59 9/11/2019', N'Lecturer', N'Nhap ham')
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (19, 3, 5, N'21:54 9/10/2019', N'PDT', N'Toi cung nhap nham')
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (20, 3, 5, N'21:58 9/10/2019', N'PDT', N'Nham')
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (21, 3, 5, N'22:40 12/10/2019', N'PDT', N'Sua cho vui')
INSERT [dbo].[Announce] ([ID], [Session_ID], [OutLine_ID], [DateTime], [Type], [Reason]) VALUES (22, 3, 5, N'22:42 12/10/2019', N'PDT', N'Thich thi sua')
SET IDENTITY_INSERT [dbo].[Announce] OFF
SET IDENTITY_INSERT [dbo].[Class] ON 

INSERT [dbo].[Class] ([Class_ID], [Class_Name], [Class_Course], [Class_Department]) VALUES (1, N'CMUTPM1', 22, N'DTQT')
INSERT [dbo].[Class] ([Class_ID], [Class_Name], [Class_Course], [Class_Department]) VALUES (2, N'CMUTPM2', 22, N'DTQT')
INSERT [dbo].[Class] ([Class_ID], [Class_Name], [Class_Course], [Class_Department]) VALUES (3, N'CMUTPM3', 23, N'CNTT')
INSERT [dbo].[Class] ([Class_ID], [Class_Name], [Class_Course], [Class_Department]) VALUES (4, N'CMUTPM4', 24, N'DTQT')
INSERT [dbo].[Class] ([Class_ID], [Class_Name], [Class_Course], [Class_Department]) VALUES (5, N'CMUTPM5', 25, N'DTQT')
SET IDENTITY_INSERT [dbo].[Class] OFF
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'CMU-CS 311 AIS', N'C++', 4, N'DTQT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'CMU-CS 447 AIS', N'Đồ Án CDIO', 1, N'DTQT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'CMU-SE 252 HIS', N'	Computer Science for Practicing Engineers', 3, N'DTQT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'IS 301 P', N'Cơ Sở Dữ Liệu', 2, N'CNTT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'IS 384 AIS', N'Kỹ Thuật Thương Mại Điện Tử (ASP.NET)', 3, N'CNTT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'MTH', N'Toán Tin 1', 3, N'DTQT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'TEST', N'Test', 4, N'DTQT')
INSERT [dbo].[Course] ([Course_ID], [Course_Name], [Course_Number_Of_Learning_Unit], [Course_Dep_ID]) VALUES (N'TEST1', N'Hehe', 2, N'DTQT')
INSERT [dbo].[Dean] ([Dean_Username], [Dean_Password], [Dean_Name], [PrivateKey], [WalletAddress]) VALUES (N'a', N'b', N'c', NULL, NULL)
INSERT [dbo].[Dean] ([Dean_Username], [Dean_Password], [Dean_Name], [PrivateKey], [WalletAddress]) VALUES (N'aa', N'bb', N'cc', NULL, NULL)
INSERT [dbo].[Dean] ([Dean_Username], [Dean_Password], [Dean_Name], [PrivateKey], [WalletAddress]) VALUES (N'aaaa', N'bbba', N'ccca', NULL, NULL)
INSERT [dbo].[Dean] ([Dean_Username], [Dean_Password], [Dean_Name], [PrivateKey], [WalletAddress]) VALUES (N'nguyenducman', N'123', N'Nguyễn Đức Mận', N'E2B5B2798E30B3302D3F4668492112DF83A7997CC29BAC06F338ECBBB5AFDF34                                    ', N'0x06fB399b9245cb14693Ea430323f2e6b15336E1b                                                          ')
INSERT [dbo].[Dean] ([Dean_Username], [Dean_Password], [Dean_Name], [PrivateKey], [WalletAddress]) VALUES (N'nguyentanthuan', N'123', N'Nguyễn Tấn Thuận', N'E2B5B2798E30B3302D3F4668492112DF83A7997CC29BAC06F338ECBBB5AFDF34                                    ', N'0x06fB399b9245cb14693Ea430323f2e6b15336E1b                                                          ')
INSERT [dbo].[Department] ([Dep_ID], [Dep_Name], [Dep_Dean_Username]) VALUES (N'CNTT', N'Công Nghệ Thông Tin', N'nguyentanthuan')
INSERT [dbo].[Department] ([Dep_ID], [Dep_Name], [Dep_Dean_Username]) VALUES (N'DTQT', N'Đào Tạo Quốc Tế', N'nguyenducman')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (3, N'2221128420')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (3, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (3, N'2221128423')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (3, N'2221128424')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (3, N'2221128425')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (4, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (4, N'2221128423')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (4, N'2221128424')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (4, N'2221128425')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (5, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (5, N'2221128423')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (5, N'2221128424')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (6, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (6, N'2221128423')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (6, N'2221128424')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (6, N'2221128425')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (7, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (7, N'2221128423')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (7, N'2221128424')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (7, N'2221128425')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (9, N'2221128422')
INSERT [dbo].[JoinSession] ([JS_Session_ID], [JS_Student_ID]) VALUES (12, N'2221128422')
INSERT [dbo].[Lecturer] ([Lecturer_ID], [Lecturer_Username], [Lecturer_Password], [Lecturer_Name], [Lecturer_Gender], [Lecturer_Address], [Lecturer_Email], [Lecturer_Dep_ID], [Lecturer_Year], [PrivateKey], [WalletAddress]) VALUES (N'001', N'huynhbadieu', N'123', N'Huỳnh Bá Diệu', 1, N'Đà Nẵng', N'dieuhb@gmail.com', N'DTQT', 2018, N'2c950eba9f6ddbc30db5d607f8db31b4aed7fa12fa9f74b8997cb09fb9af609e                                    ', N'0x6DeFAd2d9841203B9C7062c143FEd7295d065aaE                                                          ')
INSERT [dbo].[Lecturer] ([Lecturer_ID], [Lecturer_Username], [Lecturer_Password], [Lecturer_Name], [Lecturer_Gender], [Lecturer_Address], [Lecturer_Email], [Lecturer_Dep_ID], [Lecturer_Year], [PrivateKey], [WalletAddress]) VALUES (N'002', N'phanlong', N'123', N'Phan Long', 1, N'Quảng Nam', N'phanlong92@gmail.com', N'CNTT', 2018, N'2c950eba9f6ddbc30db5d607f8db31b4aed7fa12fa9f74b8997cb09fb9af609e                                    ', N'0x6DeFAd2d9841203B9C7062c143FEd7295d065aaE                                                          ')
INSERT [dbo].[Lecturer] ([Lecturer_ID], [Lecturer_Username], [Lecturer_Password], [Lecturer_Name], [Lecturer_Gender], [Lecturer_Address], [Lecturer_Email], [Lecturer_Dep_ID], [Lecturer_Year], [PrivateKey], [WalletAddress]) VALUES (N'003', N'hanhuhang', N'123', N'Ha Nhu Hang', 0, N'Đà Nẵng', N'hnh@gmail.com', N'DTQT', 2018, NULL, NULL)
SET IDENTITY_INSERT [dbo].[OutLine] ON 

INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (1, 3, N'Chuyên Cần', 10, CAST(N'2019-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (2, 3, N'Bài Tập Về Nhà', 15, CAST(N'2019-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (3, 3, N'Kiểm Tra Thường Kỳ', 15, CAST(N'2019-04-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (4, 3, N'Kiểm Tra Giữa Kỳ', 20, CAST(N'2019-05-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (5, 3, N'Kiểm Tra Cuối Kỳ', 40, CAST(N'2019-06-01' AS Date), 1)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (6, 4, N'Bài Tập', 10, CAST(N'2019-12-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (7, 4, N'Kiểm Tra Giữa Kỳ', 25, CAST(N'2019-11-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (8, 4, N'Đồ Án Cá Nhân', 20, CAST(N'2019-12-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (9, 4, N'Kiểm Tra Cuối Kỳ', 45, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (10, 5, N'Chuyên Cần', 5, CAST(N'2020-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (11, 5, N'Bài Tập Về Nhà', 10, CAST(N'2020-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (12, 5, N'Kiểm Tra Thường Kỳ', 15, CAST(N'2020-04-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (13, 5, N'Kiểm Tra Giữa Kỳ', 20, CAST(N'2020-05-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (14, 5, N'Đồ Án Cá Nhâ', 15, CAST(N'2020-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (15, 5, N'Kiểm Tra Cuối Kỳ', 35, CAST(N'2020-06-01' AS Date), 1)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (16, 6, N'Kiểm Tra Thường Kỳ', 20, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (17, 6, N'Đồ Án Nhóm', 25, CAST(N'2020-11-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (18, 6, N'Kiểm Tra Cuối Kỳ', 55, CAST(N'2020-12-01' AS Date), 1)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (19, 7, N'Ý Tưởng', 10, CAST(N'2019-02-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (20, 7, N'Thiết Kề', 15, CAST(N'2019-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (21, 7, N'Thực Hiện', 70, CAST(N'2019-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (22, 7, N'Vận Hành', 5, CAST(N'2019-06-01' AS Date), NULL)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (23, 9, N'Final grade', 100, NULL, 1)
INSERT [dbo].[OutLine] ([OutLine_ID], [OutLine_Session_ID], [OutLine_Name], [OutLine_Percent], [OutLine_DeadLine], [IsFinalTest]) VALUES (24, 12, N'Cot test', 100, NULL, NULL)
SET IDENTITY_INSERT [dbo].[OutLine] OFF
SET IDENTITY_INSERT [dbo].[Request] ON 

INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (10, N'001', 6, 17, N'10-10-10-10', N'7:28 2/10/2019', 0, 0, 1, N'6-6-6-6', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (11, N'001', 6, 16, N'6-6-6-6', N'7:30 2/10/2019', 1, 1, 0, N'7-7-7-7', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (12, N'002', 5, 10, N'2-2-2', N'13:24 5/11/2019', 0, 0, 0, N'8-8-8', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (13, N'002', 5, 10, N'10-10-10', N'13:36 5/11/2019', 0, 0, 0, N'3-3-3', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (14, N'002', 5, 10, N'2-2-2', N'13:44 5/11/2019', 0, 0, 0, N'10-10-10', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (15, N'002', 5, 10, N'10-10-10', N'13:46 5/11/2019', 0, 0, 0, N'10-10-7', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (16, N'002', 5, 10, N'2-2-2', N'15:22 8/11/2019', 1, 1, 0, N'10-10-10', NULL, -1)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (17, N'002', 5, 10, N'1-1-1', N'15:26 8/11/2019', 1, 1, 0, N'10-10-10', NULL, -1)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (18, N'001', 3, 3, N'10-10-10-10-10', N'19:54 9/11/2019', 1, 0, 2, N'6-6-6-6-6', NULL, 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (19, N'001', 6, 16, N'10-10-10-10-9', N'21:3 9/11/2019', 1, 1, 0, N'1-1-1-1-', N'Nham', 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (20, N'001', 6, 16, N'10-10-9-9', N'21:8 9/11/2019', 1, 0, 0, N'10-10-10-10', N'Nhap nham mot lan nua', 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (21, N'001', 6, 18, N'9.5-9.5-9.5-9.5-8', N'22:19 12/11/2019', 0, 0, 2, N'9.5-9.5-9.5-9.5-', N'No', 0)
INSERT [dbo].[Request] ([ID], [Lecturer_ID], [Session_ID], [OutLine_ID], [Grade], [DateTime], [AcceptByDean], [AcceptByPDT], [STT], [OldGrade], [Reason], [HasUpload]) VALUES (22, N'002', 5, 11, N'10-10-10', N'20:5 13/11/2019', 1, 1, 1, N'10-10-10', N'Nhap nham cot', 1)
SET IDENTITY_INSERT [dbo].[Request] OFF
SET IDENTITY_INSERT [dbo].[Session] ON 

INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (3, N'CMU-SE 252 HIS', N'001', N'2019-2020 ', 1, CAST(N'2019-01-01' AS Date), CAST(N'2019-11-11' AS Date), N'LEC       ', 0, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (4, N'IS 384 AIS', N'002', N'2019-2020 ', 2, CAST(N'2019-07-01' AS Date), CAST(N'2019-12-30' AS Date), N'LEC       ', 0, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (5, N'IS 301 P', N'002', N'2020-2021 ', 1, CAST(N'2020-01-01' AS Date), CAST(N'2019-12-30' AS Date), N'LEC       ', 1, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (6, N'CMU-CS 447 AIS', N'001', N'2020-2021 ', 2, CAST(N'2020-07-01' AS Date), CAST(N'2019-12-30' AS Date), N'LEC       ', 0, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (7, N'CMU-CS 311 AIS', N'001', N'2019-2020 ', 1, CAST(N'2019-01-01' AS Date), CAST(N'2019-12-30' AS Date), N'LEC       ', 1, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (8, N'MTH', N'001', N'2019-2020 ', 2, CAST(N'2019-01-01' AS Date), CAST(N'2019-12-30' AS Date), N'LEC       ', 0, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (9, N'TEST', N'003', N'2019-2020 ', 1, NULL, NULL, N'LEC       ', 0, NULL)
INSERT [dbo].[Session] ([Session_ID], [Session_Course_ID], [Session_Lecturer_ID], [Session_Year], [Session_Semester], [Session_Start_Date], [Session_End_Date], [Session_Type], [Session_IsUpload], [Session_IsSubmitFinalTest]) VALUES (12, N'TEST1', N'001', N'2019-2020 ', 2, NULL, NULL, N'LEC       ', 0, NULL)
SET IDENTITY_INSERT [dbo].[Session] OFF
INSERT [dbo].[Student] ([Student_ID], [Student_Username], [Student_Password], [Student_Name], [Student_Gender], [Student_Address], [Student_Email], [Student_Dep_ID], [Student_Year]) VALUES (N'2221128420', N'Ten test', N'123', N'Test', 1, N'Ha Tinh', N'@gmail.com', N'DTQT', 2018)
INSERT [dbo].[Student] ([Student_ID], [Student_Username], [Student_Password], [Student_Name], [Student_Gender], [Student_Address], [Student_Email], [Student_Dep_ID], [Student_Year]) VALUES (N'2221128422', N'huynhtandung', N'123', N'Huỳnh Tấn Dũng', 1, N'Quảng Nam', N'dunghuynh.010598@gmail.com', N'DTQT', 2018)
INSERT [dbo].[Student] ([Student_ID], [Student_Username], [Student_Password], [Student_Name], [Student_Gender], [Student_Address], [Student_Email], [Student_Dep_ID], [Student_Year]) VALUES (N'2221128423', N'leminhhoang', N'123', N'Lê Minh Hoàng', 1, N'Quảng Bình', N'hoang@gmail.com', N'DTQT', 2018)
INSERT [dbo].[Student] ([Student_ID], [Student_Username], [Student_Password], [Student_Name], [Student_Gender], [Student_Address], [Student_Email], [Student_Dep_ID], [Student_Year]) VALUES (N'2221128424', N'hoangkimquy', N'123', N'Hoàng Kim Quý', 1, N'Quảng Nam', N'quy@gmail.com', N'CNTT', 2018)
INSERT [dbo].[Student] ([Student_ID], [Student_Username], [Student_Password], [Student_Name], [Student_Gender], [Student_Address], [Student_Email], [Student_Dep_ID], [Student_Year]) VALUES (N'2221128425', N'maivanthanh', N'123', N'Mai Văn Thạnh', 1, N'Quảng Nam', N'thanh@gmail.com', N'CNTT', 2018)
INSERT [dbo].[StudentClass] ([Class_ID], [Student_ID]) VALUES (1, N'2221128422')
INSERT [dbo].[StudentClass] ([Class_ID], [Student_ID]) VALUES (1, N'2221128423')
INSERT [dbo].[StudentClass] ([Class_ID], [Student_ID]) VALUES (2, N'2221128424')
INSERT [dbo].[StudentClass] ([Class_ID], [Student_ID]) VALUES (3, N'2221128425')
INSERT [dbo].[StudentClass] ([Class_ID], [Student_ID]) VALUES (4, N'2221128422')
SET IDENTITY_INSERT [dbo].[TrHash] ON 

INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (1, 1, N'0x3bbaa961930f08f1c9e9bd4f409acb1202f44fdf91345b6d885564e68026eae3', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (2, 1, N'0xacfa3e4e472115cc73f885199e8717b7cfe9453a77bf22475138fcefbbf9c778', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (4, 5, N'0xa44a6cc6cdd4287d8d7fc086bd332e4451abb35d9d4686730dca63f35835aa04', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (5, 1, N'0x685035166a8eed3392dadb79429974b5d9179a90156f4251f33461bf3ca4f58c', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (6, 1, N'0xadce3344f500721a3c337559f9f45980510db3d9f768a9599362bbfa024aa809', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (7, 2, N'undefined', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (8, 1, N'undefined', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (9, 19, N'0x44f9cdf9bf90721fc9c000c5ff0824a8d5e7ee1460ce12262c989d6276f42231', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (10, 16, N'0xb62928ccf52c6e94b4a10d01debf7cbe61c64bae7807ac6f65c32d98bd81daeb', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (11, 24, N'0xeb3206d91f98c6ba374d625905a1944d494197232a6fc2fd981435197b6ba43e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (12, 24, N'0x43b79527c3ff684f05ed636671c10bdf5d5494a4e1ec14f6532b1c2a695d7564', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (13, 24, N'0xb4ea8c63dad05f28b63c8097b8b154c21e53398c5a84f12a94c4f5e710fe31dc', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (14, 8, N'0x5957582bb3008e0f9b9abf739f348b2c175e60c19751d0658fb218fa817c063f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (15, 6, N'0xc4ec7d73155008252f657dfd082bf11846dac08ae765380f6d59861512af6365', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (16, 7, N'0xfc008e161ccafff2f357672805d35c4abe8266522a5e33d3267141d238cb1a14', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (17, 9, N'0x19dc5b91863deaaeda14b32dfc98e41f449fc6a543038605a31abcb7291748d4', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (18, 1, N'0xd6ef0343755b9960b6c7c3a9b02fdaa10048913ad0dac7501c409315a9e5de70', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (19, 1, N'0x3679cc4768a86872c5cb1d3917f07c39f55be1f1b7bde1c56596fe9341be984f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (20, 1, N'0xa6b8cf75ee225ad94909db3bc321e158e7a8d5e5e957e643119748c670d9ab08', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (21, 1, N'0x25427928de79c4795a82c25aaf19d123769948aa4879b79a12000f9cf15d6f7e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (22, 2, N'0x64bf609f5bbb98ed10d1c8fdcb8d8fb12be35d5644680fcc6158d0eb4ca2756d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (23, 3, N'0xb26045fe82ad0b95bf879da6cb3d35e817dedac9227464c2582f220154fac039', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (24, 3, N'0xf97fbc02c7e8dc8f2e8f96bd7d2e1f4d4fc1d2428781845e80ca0184a1aff72f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (25, 1, N'0x332e72ab7291e24ab7023a72bccd1b6df818edb62f69cb90bcccc3063c480309', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (26, 4, N'0x4414951a0f478983e4d615104a2e41c41ab1e56296db640a81835d8d88c3d36d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (27, 4, N'0x4caff8ef64d24c929e433fa1e93c478e78c44f39829a5ccd7112174221b57b16', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (28, 1, N'0x650f087ab10e078e525e990ff382483b892355379f6561640a7e62dc92bc794d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (29, 17, N'0x41ea15d025bb01f7ca810c7026fc8e3f706eb397378c06168dbd79b49ce6317f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (30, 17, N'0xbbf8a2533e7ba0682f285cd296d139a8108c904280a892d03b2d47c578b8d836', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (31, 1, N'0x07228110657b58a855b157e532a618b6ca6b9f14f4151a76c26d82b3b11d2b3e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (32, 5, N'0xe44db1c56f4900729a763b8e2c5210fd0b9634a8b6efd38cdd15d0034d6c5a0d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (33, 5, N'0x16717145c5cb244b0b443db6dbc0ab116a65efae7064e84d1dc3da1809c96d14', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (34, 19, N'0x6c309db87240562481ebadf2fede7edab707385e9517480f5cc1520c1fc4717b', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (36, 19, N'0xaab5ad82e2c5907aeeaddbbbf9131bdcbc0e5be5b3d18ac0c27230c1b15a8560', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (37, 19, N'0x069c04825cc9802788fffcc6749ad6dbf99ef435d6e41c0182dccc7412af79d7', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (38, 19, N'0x3f2e32aaec9e0f60d9e53ab276821a8e97dd192b1287778ce0db4d79d01300e9', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (39, 19, N'0xe977449e1397042327782e54291fd8f9dccf847e8b3014a831d7b7cd2fbfb79f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (40, 19, N'0x881d8609d80eb9ea6bc755a66f58351a2a7151e63118405b1bca2c707b7c766f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (41, 19, N'0x804730bd5074d69c4c2a40edab2186f7ecbf9e6da106bb34160ac97ef1dbbc0f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (42, 16, N'0xcf25ec5acd64677a73e6855b05ce3ddaaa2eef9700a1f6ae30fac62c78e6cfda', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (43, 17, N'0xdf9a85a49f558e2981d7c108c18e1fa021a93dfb711f48ebfe08cf0aa2408414', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (44, 20, N'0x35de0809186d38f003767834f2627a0e2b2a7a115ac951e10804c62db0ce5135', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (45, 10, N'0x5bf4f08937ea89a3796842f58bb1daab82e12d68fcbbad686748718e36ba6757', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (46, 10, N'0x5c46d54c7be492e0931d80d6423c9a173a36dc1010878b1cf2d1df5c01cfe88e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (47, 10, N'0xdf5f58a02158b0e37498a463b3a9e73e1e9a866341e031d6ee53419ce15861bf', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (48, 5, N'0xc193c971458a3bbc73888399d145f1ad99bb152a68d8142bfcb5222f99574f69', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (49, 10, N'0x4e925ee1aa8b071e592b173b2cdb6efd516fe0d8b99a8cb2ccec1dddf0d6f798', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (50, 11, N'0x1c031862ad5d5d13486c7df7a9562a8c785478aa7ee8a8b41879d01006e60512', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (51, 5, N'0x60422a4a0c2a7e9a7c0fc1ea23731de07c76531c114b4ee2dfd010c2f1cb2400', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (52, 5, N'0x45635b23629ef8cd2e574ddc7361639e6f91650bc99c2cd0be987b9e0ddab2da', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (53, 5, N'0xb2ed94cfb79a7c692b1cfa1917f462044f30f5c5c188f71b5724479a4d769109', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (54, 5, N'0x0978baae7bd890db67c79b59c012c53eefd86148f1077cf93780c09e1bb7aba3', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (55, 5, N'0xff2c07d080b20d9d12c41b9235f03170827d6e49f19168bafe0cd2ebb9400c8e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (56, 5, N'0x0b69365105c837732caa58fbe5703f5850bc552de3d0007864ada8aa3c1ae8eb', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (57, 9, N'0xcdc607334abf72964012b54d7a0b6cc391847cbed2ce41da9f3870573fd19c6c', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (58, 5, N'0x7dadd8bbadcc6efea6314cb2d75f667b0e1d4eb4f8db2be2f623445bd0f2ba08', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (59, 18, N'0xe9d912d9f8bff85dd46b0099b2eeed6510c51a012cae8cdc3d0ba204e5499157', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (60, 18, N'0xaa38cf9bd56799f8de31fe8ca94508512e4db6edb4ab8869eb71e69fdb492e03', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (61, 10, N'0x8c0446d3501c3426554779bd74bc6d9ec1ba14ccd4495c78ba9d35e5a57a53ea', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (65, 10, N'0xc65b64da3e6d20788c57e1b7a27dfecccd78e37e35c580d122c446e5f8a12584', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (66, 1, N'0xb6dd203da3017826c046c5873e8a5db39ff576ee30a5a7dbb6b9781b6d9dac90', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (67, 2, N'0x04957501e2aee788b4ab86155fbafa7a7115517e66a8ca46ece6814bd42fd7bd', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (68, 1, N'0x8b2a82096aec5b52f1053eabf852830048e73d4b4b6e221e8714a3c6ffd1a94d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (69, 3, N'0x39500194d6537e7461b42c36c5e356efc60bab350554c0960dff22c2a9bc974f', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (70, 4, N'0xa2a46a6181e265c563ff2184f7ef3c9e9ee86fff2f1c5ec0b9b95e5a8d190de0', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (71, 5, N'0x092f3ed44fe041ee006719e15d88dbdc5cf6c02ac358894afc7db81680545ae0', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (72, 16, N'0xbcf9abb36146a91e9799cb7af07e3eb11bebc1855865d26fa9b820ed4688e7a6', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (73, 17, N'0x3c56a1c7fab35eb54e881cb50a604decc170de2d0cb656fcae6b35448d49bc52', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (74, 18, N'0xe8920c13c5a1f1d3037435eecc007d9cb9acf466e01ec9c09e300bd4c243f691', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (75, 16, N'0x009e2d50b81489673fc4752be3f1a36eb6112ddbb93b1d8d3d7515713aa11619', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (76, 6, N'0xdfbc42ff41ae4a48c5af537f668c01780e7f3d666cf09a689a21ed709de6d52a', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (77, 6, N'0xf616a96192fcd49b8bc2d61eff8843c079d09ab8f6c5a56f4942b4f496045d79', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (79, 10, N'0x568d7fcc6190cd4b9da0ab3de9706a6d5a690899f904dcefe75f47c5b21dfc28', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (80, 6, N'0x96c692ce11311aa9bd0a8477094df00f4a421308cba695374cbcfe53c19b2575', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (81, 6, N'0x0cd0ce8fe92b5cedcf5c9ebd3779e5f5b85a7e8b833fc06603438c6b534af6ce', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (82, 19, N'0x31c266822770cb9fb356749566dbdf0c19788ff0c1ad7860722309a49932d8f4', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (83, 10, N'0xafe147761a347f530c9efd50894a19937c002d47a893f1152ca6ce4384e56bf5', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (84, 15, N'0x5c74171c6dd50595110a38b7199956612bb5c009d5d0ca7581559d193c8f1a22', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (85, 10, N'0x7315a85cc3981eeff5088c1390707bebbc68a05fbce4fdcff938f20fbfe56819', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (86, 19, N'0x313331d5965948e6efb75742dc660a39e06cbe0b6960fac0cfa848bc27f1b937', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (87, 19, N'0xc15b6c8fd9ca8036ffc3ef3394a22f772892d527925d5f47d8954ddebaa73a4e', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (88, 19, N'0xdd5aaa568ce4d957db1e924fc2caf86a5544a5db7e65552bb0d85d6924663674', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (89, 19, N'0x0af28ecbc9b2a902ac04c848bffa81d68c24dc70b99e15bb28a708bc04341a25', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (90, 19, N'0x5d6f38236bb8d499a49c008086b9837d6f5a07a6d7f6ddffd391b92054cb8fc6', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (91, 16, N'0xc5d40aec38d13a30c9e32bbfe7761af73a9f72904563283c6043e76d13be2a8d', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (92, 5, N'0xf780a2aa10605314c36d136085d9fc1da5a1234cbd19f1ff4252e78e5a3bd984', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (93, 5, N'0xccb39500d3445ce695a771973cc3715180007674770534616f3723e35d3d6f87', N'23:32 10/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (94, 20, N'0xdebf1d8eec7717164ae490900ca944b7ea946e2af11ea1845ae4aa7237fdbe56', N'22:29 12/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (95, 5, N'0x0e40ac78bfd5d362fa993d11cdc61b1161432344d93967e6a3ac28c5d78060fb', N'22:42 12/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (96, 21, N'0x0417b88b4bca0cd81185c46c1f9b9b88b74acf8d28290e337dbe6e1d8f45147c', N'10:12 13/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (97, 10, N'0x4c58a515e1f5cca2f6c6c77e6e0958f5b43beac64999ec229e02acbdabdce0ab', N'19:49 13/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (98, 11, N'0x63eb5abfc17b7d74331a6e79dbe81a930f9bc8c4a78d88c1fb613655418c188e', N'20:3 13/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (99, 11, N'0x61505e3bea7c5a7541abd7f498acb5fd00e06d329c604c27b155e37b41d52bf1', N'20:12 13/11/2019')
INSERT [dbo].[TrHash] ([TrHash_ID], [TrHash_OutLine_ID], [TrHash], [DateTime]) VALUES (100, 11, N'0xc3a615601f88fb6768232f09ebfadb0549d3cdd30929db730aeb8cb85ecf304b', N'20:17 13/11/2019')
SET IDENTITY_INSERT [dbo].[TrHash] OFF
ALTER TABLE [dbo].[Announce]  WITH CHECK ADD FOREIGN KEY([OutLine_ID])
REFERENCES [dbo].[OutLine] ([OutLine_ID])
GO
ALTER TABLE [dbo].[Announce]  WITH CHECK ADD FOREIGN KEY([Session_ID])
REFERENCES [dbo].[Session] ([Session_ID])
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD FOREIGN KEY([Course_Dep_ID])
REFERENCES [dbo].[Department] ([Dep_ID])
GO
ALTER TABLE [dbo].[Department]  WITH CHECK ADD FOREIGN KEY([Dep_Dean_Username])
REFERENCES [dbo].[Dean] ([Dean_Username])
GO
ALTER TABLE [dbo].[JoinSession]  WITH CHECK ADD FOREIGN KEY([JS_Session_ID])
REFERENCES [dbo].[Session] ([Session_ID])
GO
ALTER TABLE [dbo].[JoinSession]  WITH CHECK ADD FOREIGN KEY([JS_Student_ID])
REFERENCES [dbo].[Student] ([Student_ID])
GO
ALTER TABLE [dbo].[Lecturer]  WITH CHECK ADD FOREIGN KEY([Lecturer_Dep_ID])
REFERENCES [dbo].[Department] ([Dep_ID])
GO
ALTER TABLE [dbo].[OutLine]  WITH CHECK ADD FOREIGN KEY([OutLine_Session_ID])
REFERENCES [dbo].[Session] ([Session_ID])
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD FOREIGN KEY([Lecturer_ID])
REFERENCES [dbo].[Lecturer] ([Lecturer_ID])
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD FOREIGN KEY([OutLine_ID])
REFERENCES [dbo].[OutLine] ([OutLine_ID])
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD FOREIGN KEY([Session_ID])
REFERENCES [dbo].[Session] ([Session_ID])
GO
ALTER TABLE [dbo].[Session]  WITH CHECK ADD FOREIGN KEY([Session_Course_ID])
REFERENCES [dbo].[Course] ([Course_ID])
GO
ALTER TABLE [dbo].[Session]  WITH CHECK ADD FOREIGN KEY([Session_Lecturer_ID])
REFERENCES [dbo].[Lecturer] ([Lecturer_ID])
GO
ALTER TABLE [dbo].[Student]  WITH CHECK ADD FOREIGN KEY([Student_Dep_ID])
REFERENCES [dbo].[Department] ([Dep_ID])
GO
ALTER TABLE [dbo].[StudentClass]  WITH CHECK ADD FOREIGN KEY([Class_ID])
REFERENCES [dbo].[Class] ([Class_ID])
GO
ALTER TABLE [dbo].[StudentClass]  WITH CHECK ADD FOREIGN KEY([Student_ID])
REFERENCES [dbo].[Student] ([Student_ID])
GO
ALTER TABLE [dbo].[TrHash]  WITH CHECK ADD FOREIGN KEY([TrHash_OutLine_ID])
REFERENCES [dbo].[OutLine] ([OutLine_ID])
GO
USE [master]
GO
ALTER DATABASE [BGrade] SET  READ_WRITE 
GO
