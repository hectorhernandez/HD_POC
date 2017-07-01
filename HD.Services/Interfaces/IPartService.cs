using HD.Services.DTOs;
using System.Collections.Generic;

namespace HD.Services.Interfaces
{
    public interface IPartService
    {
        PartDTO GetPart(string tagNumber);
        ICollection<PartMovementDTO> GetPartMovements(string tagNumber);
    }
}
