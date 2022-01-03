using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Friends.Core.Models;
using Friends.Core.Services;
using Friends.Resources;
using Friends.Validators;
using Microsoft.AspNetCore.Mvc;

namespace Friends.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;
        private readonly IMapper _mapper;
        public MessageController(IMessageService messageService, IMapper mapper)
        {
            _messageService = messageService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<Message>>> GetAllMessages()
        {
            var messages = await _messageService.GetAllWithUser();
            var messageResources = _mapper.Map<IEnumerable<Message>,
                IEnumerable<MessageResource>>(messages);
            return Ok(messageResources);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<MessageResource>> GetMessageById(int id)
        {
            var message = await _messageService.GetMessageById(id);
            var musicResource = _mapper.Map<Message, MessageResource>(message);

            return Ok(musicResource);
        }
        [HttpPost("")]
        public async Task<ActionResult<MessageResource>> CreateMessage([FromBody] SaveMessageResource saveMessageResource)
        {
            var validator = new SaveMessageResourceValidator();
            var validationResult = await validator.ValidateAsync(saveMessageResource);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            var messageToCreate = _mapper.Map<SaveMessageResource, Message>(saveMessageResource);
            var newMessage = await _messageService.CreateMessage(messageToCreate);
            var message = await _messageService.GetMessageById(newMessage.MessageId);
            var messageResource = _mapper.Map<Message, MessageResource>(message);
            return Ok(messageResource);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<MessageResource>> UpdateMessage(int id, [FromBody] SaveMessageResource saveMessageResource)
        {
            var validator = new SaveMessageResourceValidator();
            var validationResult = await validator.ValidateAsync(saveMessageResource);
            var requestIsInvalid = id == 0 || !validationResult.IsValid;
            if (requestIsInvalid)
            {
                return BadRequest(validationResult.Errors);

            }
            var messageToBeUpdated = await _messageService.GetMessageById(id);
            if (messageToBeUpdated == null)
            {
                return NotFound();
            }
            var message = _mapper.Map<SaveMessageResource, Message>(saveMessageResource);
            await _messageService.UpdateMessage(messageToBeUpdated, message);
            var updatedMessage = await _messageService.GetMessageById(id);
            var updatedMessageResource = _mapper.Map<Message, MessageResource>(updatedMessage);
            return Ok(updatedMessageResource);
        }

        [HttpDelete]
        public async Task<ActionResult<MessageResource>> DeleteMessage(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var message = await _messageService.GetMessageById(id);
            if (message == null)
            {
                return NotFound();
            }
            await _messageService.DeleteMessage(message);
            return NoContent();
        }
    }
}