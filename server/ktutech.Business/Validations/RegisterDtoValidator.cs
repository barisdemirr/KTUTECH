using FluentValidation;
using ktutech.Business.DTOs.User;

namespace ktutech.Business.Validations;

public class RegisterDtoValidator : AbstractValidator<RegisterDto>
{
    public RegisterDtoValidator()
    {
        RuleFor(x => x.NameSurname)
            .NotEmpty().WithMessage("Ad Soyad alanı boş bırakılamaz.")
            .MinimumLength(3).WithMessage("Ad Soyad en az 3 karakter olmalıdır.")
            .MaximumLength(50).WithMessage("Ad Soyad 50 karakterden fazla olamaz.");

        RuleFor(x => x.Email)
            .NotEmpty().WithMessage("E-posta adresi zorunludur.")
            .EmailAddress().WithMessage("Lütfen geçerli bir e-posta formatı giriniz.")
            // special validation to ensure email ends with @ogr.ktu.edu.tr
            .Must(x => x != null && x.EndsWith("@ogr.ktu.edu.tr", StringComparison.OrdinalIgnoreCase))
            .WithMessage("Sadece @ogr.ktu.edu.tr uzantılı öğrenci e-postaları ile kayıt olabilirsiniz.");

        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Şifre alanı boş bırakılamaz.")
            .MinimumLength(6).WithMessage("Güvenliğiniz için şifre en az 6 karakter olmalıdır.")
            .Matches(@"[A-Z]").WithMessage("Şifre en az bir büyük harf içermelidir.")
            .Matches(@"[a-z]").WithMessage("Şifre en az bir küçük harf içermelidir.")
            .Matches(@"[0-9]").WithMessage("Şifre en az bir rakam içermelidir.");

        RuleFor(x => x.Phone)
            .NotEmpty().WithMessage("Telefon numarası zorunludur.")
            .Length(11).WithMessage("Telefon numarası 0 ile başlayan 11 hane olmalıdır.")
            .Matches(@"^0\d{10}$").WithMessage("Telefon numarası 0 ile başlamalı ve sadece rakam içermelidir.");
    }
}