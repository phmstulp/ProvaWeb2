using System;
using System.Collections.Generic;

namespace ProvaPedroWeb2.Models
{
    public partial class Vacina
    {
        public int IdVacina { get; set; }
        public int IdAnimal { get; set; }
        public DateTime DtVacina { get; set; }
        public decimal Peso { get; set; }
        public decimal Dosagem { get; set; }
        public string Aplicador { get; set; }
        public string DescMedicamento { get; set; }

        public Animal IdAnimalNavigation { get; set; }
    }
}
