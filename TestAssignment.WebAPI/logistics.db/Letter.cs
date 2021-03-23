using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Logistics.DB
{
    public class Letter
    {
        [Key]
        public int Id { get; set; }
        public string BagNumber { get; set; }
        public int AmountOfLetters { get; set; }
        public float BagWeight { get; set; }
        public float ShippingPrice { get; set; }
       
    }
}
