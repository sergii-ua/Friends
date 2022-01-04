using Microsoft.EntityFrameworkCore.Migrations;

namespace Friends.Data.Migrations
{
    public partial class createViewForMessages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .Sql(@"CREATE VIEW [MessagesWithRecepients] AS 
                    select m.MessageId, m.MessageBody, m.MessageFromId, 
                    Concat(u.FirstName, ' ', u.LastName) as Recepient from Messages m
                    join Users u on m.MessageToId = u.UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .Sql("drop view MessagesWithRecepients");
        }
    }
}
