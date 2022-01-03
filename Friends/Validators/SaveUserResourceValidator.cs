using FluentValidation;
using Friends.Resources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Validators
{
    public class SaveUserResourceValidator: AbstractValidator<SaveUserResource>
    {
        public SaveUserResourceValidator()
        {
            RuleFor(u=>u.FirstName)
                .NotEmpty()
                .MaximumLength(50);

            RuleFor(u => u.LastName)
                .NotEmpty()
                .MaximumLength(50);
        }
    }
}
