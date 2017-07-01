using HD.Services.Interfaces;
using HD.Services.DTOs;
using System.Collections.Generic;
using System;

namespace HD.Services
{
    public class PartService : IPartService
    {
        public PartDTO GetPart(string tagNumber)
        {
            var imageName = "part1.jpg";
            var imagePath = $"/partImages/{imageName}";

            var partDTO = new PartDTO
            {
                PartNumber = "570003331DH",
                TagNumber = "12312hjk12341234kjh1234b12",
                ShapeDescr = "FLH Fairing",
                Color = "Vivid Black",
                Model = "Solid",
                WorkStation = "Orange Line Sort",
                Process = "Paint",
                ImagePath = imagePath
            };

            return partDTO;
        }

        public ICollection<PartMovementDTO> GetPartMovements(string tagNumber)
        {
            var partMovementsDTO = new List<PartMovementDTO> {
                    new PartMovementDTO {
                    TagNumber = tagNumber,
                    StationDescr = "Station 1",
                    Date = DateTime.Now },
                    new PartMovementDTO {
                    TagNumber = tagNumber,
                    StationDescr = "Station 2",
                    Date = DateTime.Now.AddMinutes(10) },
                    new PartMovementDTO {
                    TagNumber = tagNumber,
                    StationDescr = "Station 3",
                    Date = DateTime.Now.AddMinutes(20) }
                };

            return partMovementsDTO;
        }
    }
}
