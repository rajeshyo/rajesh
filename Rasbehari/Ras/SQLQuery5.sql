USE [mydb]
GO
/****** Object:  StoredProcedure [dbo].[Addemp]    Script Date: 13/02/2019 14:35:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER proc [dbo].[Addemp](@eid int,
@ename nvarchar(50),
@gender nvarchar(10),
@dob date,
@addr nvarchar(200))
as
begin
insert into EMP(eid,ename,gender,dob,addr) values(@eid,@ename,@gender,@dob,@addr)
end
create table ImageTab(imgid int,imgdesc nvarchar(100),img varbinary(max));

select * from ImageTab;

CREATE PROCEDURE addimg
 @imgid int,  
 @imgdesc NVARCHAR(100),  
 @img varbinary(MAX)  
AS  
BEGIN   
 INSERT INTO ImageTab
           ([imgid]  
           ,[imgdesc]  
           ,[img])  
     VALUES  
           (@imgid  
           ,@imgdesc  
           ,@img)  
END  