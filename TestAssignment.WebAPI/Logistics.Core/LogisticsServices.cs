using Logistics.DB;
using System.Collections.Generic;
using System.Linq;

namespace Logistics.Core
{
    public class LogisticsServices : ILogisticsServices
    {
        private LogisticsContext _context;
        public LogisticsServices(LogisticsContext context)
        {
            _context = context;
        }

        public Parcel CreateParcel(Parcel order)
        {
            _context.Add(order);
            _context.SaveChanges();

            return order;
        }
        public Letter CreateLetter(Letter order)
        {
            _context.Add(order);
            _context.SaveChanges();

            return order;
        }
        public List<Parcel> GetParcels()
        {
            return _context.Parcels.ToList();
        }
        public List<Letter> GetLetters()
        {
            return _context.Letters.ToList();
        }
    }
}
