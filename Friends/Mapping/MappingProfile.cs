using AutoMapper;
using Friends.Core.Models;
using Friends.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to Resource
            CreateMap<Message, MessageResource>();
            CreateMap<User, UserResource>();

            // Resource to Domain
            CreateMap<MessageResource, Message>();
            CreateMap<UserResource, User>();

            //Save
            CreateMap<SaveUserResource, User>();
            CreateMap<SaveMessageResource, Message>();
        }
    }
}
