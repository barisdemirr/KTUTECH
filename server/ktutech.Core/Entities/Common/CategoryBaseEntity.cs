namespace ktutech.Core.Entities.Common;

public abstract class CategoryBaseEntity : BaseEntity
{
    public string Name { get; set; } = default!;
    public string Slug { get; set; } = default!;
    public bool IsActive { get; set; } = true;
}