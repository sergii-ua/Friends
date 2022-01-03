using FluentValidation;
using Friends.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Validators
{
    public class SaveMessageResourceValidator : AbstractValidator<SaveMessageResource>
    {
        public SaveMessageResourceValidator()
        {
            RuleFor(m => m.MessageBody)
                .NotEmpty()
                .MaximumLength(1000)
                .MinimumLength(2);
            RuleFor(m => m.MessageFromId)
                .NotEmpty()
                .WithMessage("UserId cannot be 0");
            RuleFor(m => m.MessageToId)
                .NotEmpty()
                .WithMessage("UserId cannot be 0");
        }
    }
}
