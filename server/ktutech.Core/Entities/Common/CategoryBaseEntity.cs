namespace ktutech.Core.Entities.Common;

public abstract class CategoryBaseEntity : BaseEntity
{
    public string Name { get; set; }
    public string Slug { get; set; }
}