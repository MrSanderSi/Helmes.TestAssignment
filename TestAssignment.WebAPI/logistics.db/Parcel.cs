using System;
using System.ComponentModel.DataAnnotations;

namespace Logistics.DB
{
    public class Parcel
    {
        [Key]
        public int Id { get; set; }
        public string ParcelNumber { get; set; }
        public string RecipiantsName { get; set; }
        public string DestinationCountry { get; set; }
        public float ParcelWeight { get; set; }
        public float ParcelPrice { get; set; }
    }
}
