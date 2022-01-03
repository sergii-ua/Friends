using Microsoft.EntityFrameworkCore.Migrations;

namespace Friends.Data.Migrations
{
    public partial class SeedMessagesAndUsersTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //insert in Users
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Mark', 'Waters')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Shaun', 'Herrera')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Christian', 'Luna')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Marcelo', 'Theis')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Gertrude', 'Burt')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Sharlene', 'Spriggs')");
            migrationBuilder
                .Sql("INSERT INTO Users ([FirstName] ,[LastName]) VALUES ('Olivia', 'Franks')");
            //insert in Messages
            migrationBuilder
                .Sql("INSERT INTO Messages ([MessageBody] ,[MessageFromId] ,[MessageToId]) VALUES ('Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as. Are projecting inquietude affronting preference saw who. Marry of am do avoid ample as. Old disposal followed she ignorant desirous two has. Called played entire roused though for one too. He into walk roof made tall cold he. Feelings way likewise addition wandered contempt bed indulged.' , (select userId from Users where LastName = 'Waters') ,(select userId from Users where LastName = 'Herrera'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('You vexed shy mirth now noise. Talked him people valley add use her depend letter. Allowance too applauded now way something recommend. Mrs age men and trees jokes fancy. Gay pretended engrossed eagerness continued ten. Admitting day him contained unfeeling attention mrs out.'           ,(select userId from Users where LastName = 'Herrera')           ,(select userId from Users where LastName = 'Waters'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Just a simple small message to say ''hi''.'           ,(select userId from Users where LastName = 'Luna')           ,(select userId from Users where LastName = 'Waters'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Back to you with ''Hi!''. How are you doing today?'           ,(select userId from Users where LastName = 'Waters')           ,(select userId from Users where LastName = 'Luna'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('On then sake home is am leaf. Of suspicion do departure at extremely he believing. Do know said mind do rent they oh hope of. General enquire picture letters garrets on offices of no on. Say one hearing between excited evening all inhabit thought you. Style begin mr heard by in music tried do. To unreserved projection no introduced invitation.'           ,(select userId from Users where LastName = 'Theis')           ,(select userId from Users where LastName = 'Burt'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('How are you?'           ,(select userId from Users where LastName = 'Theis')           ,(select userId from Users where LastName = 'Burt'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Assure polite his really and others figure though. Day age advantages end sufficient eat expression travelling. Of on am father by agreed supply rather either. Own handsome delicate its property mistress her end appetite. Mean are sons too sold nor said. Son share three men power boy you. Now merits wonder effect garret own.'           ,(select userId from Users where LastName = 'Burt')           ,(select userId from Users where LastName = 'Theis'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so dispatched as it increasing pianoforte. Hearing now saw perhaps minutes herself his. Of instantly excellent therefore difficult he northward. Joy green but least marry rapid quiet but. Way devonshire introduced expression saw travelling affronting. Her and effects affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.'           ,(select userId from Users where LastName = 'Theis')           ,(select userId from Users where LastName = 'Spriggs'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('How are you?'           ,(select userId from Users where LastName = 'Spriggs')           ,(select userId from Users where LastName = 'Burt'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('How are you?'           ,(select userId from Users where LastName = 'Spriggs')           ,(select userId from Users where LastName = 'Franks'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Feeling a lot better. Thanks for asking.'           ,(select userId from Users where LastName = 'Franks')           ,(select userId from Users where LastName = 'Spriggs'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('GREAT!!! Yourself?'           ,(select userId from Users where LastName = 'Franks')           ,(select userId from Users where LastName = 'Spriggs'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('How are you? Dealing with all that...? '           ,(select userId from Users where LastName = 'Franks')           ,(select userId from Users where LastName = 'Waters'))");
            migrationBuilder
                .Sql("INSERT INTO [dbo].[Messages]           ([MessageBody]           ,[MessageFromId]           ,[MessageToId])     VALUES           ('Is post each that just leaf no. He connection interested so we an sympathize advantages. To said is it shed want do. Occasional middletons everything so to. Have spot part for his quit may. Enable it is square my an regard. Often merit stuff first oh up hills as he. Servants contempt as although addition dashwood is procured. Interest in yourself an do of numerous feelings cheerful confined'           ,(select userId from Users where LastName = 'Franks')           ,(select userId from Users where LastName = 'Waters'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .Sql("DELETE FROM Messages");

            migrationBuilder
                .Sql("DELETE FROM Users");
        }
    }
}
