using Logistics.DB;
using System.Collections.Generic;

namespace Logistics.Core
{
    public interface ILogisticsServices
    {
        Letter CreateLetter(Letter order);
        Parcel CreateParcel(Parcel parcel);
        List<Parcel> GetParcels();
        List<Letter> GetLetters();
    }
}
